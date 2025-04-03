```
npm install react react-dom webpack@5 webpack-cli webpack-dev-server html-webpack-plugin
```

para host
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('@module-federation/webpack-module-federation-plugin');

module.exports = {
  entry: './src/index.js', // Cambia según tu punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'auto', // Importante para evitar problemas al cargar módulos remotos
    clean: true, // Limpia la carpeta de salida en cada build
  },
  mode: 'development', // Cambia a 'production' en despliegue
  devServer: {
    port: 5173, // Puerto del host
    historyApiFallback: true, // Para manejar rutas en aplicaciones SPA
    static: path.resolve(__dirname, 'dist'), // Carpeta para servir estáticos
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Transpilación de JS moderno
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Manejo de CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource', // Manejo de imágenes
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Archivo HTML base
    }),
    new ModuleFederationPlugin({
      name: 'host', // Nombre del host
      remotes: {
        navbar: 'navbar@http://localhost:4173/remoteEntry.js', // Remote para "navbar"
        counter: 'counter@http://localhost:4174/remoteEntry.js', // Remote para "counter"
        cards: 'cards@http://localhost:4175/remoteEntry.js', // Remote para "cards"
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^17.0.0' }, // Dependencias compartidas
        'react-dom': { singleton: true, eager: true, requiredVersion: '^17.0.0' },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Extensiones para resolver imports
  },
};

```

para microfrontend
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('@module-federation/webpack-module-federation-plugin');

module.exports = {
  entry: './src/index.js', // Cambia según tu punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: 'auto', // Importante para Module Federation
  },
  mode: 'development', // Cambia a 'production' en despliegue
  devServer: {
    port: 4173, // Cambia según el puerto que necesites
    historyApiFallback: true,
    static: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Cambia según tu estructura
    }),
    new ModuleFederationPlugin({
      name: 'navbar', // Nombre de tu microfrontend
      filename: 'remoteEntry.js', // Archivo de entrada remoto
      exposes: {
        './Navbar': './src/Navbar', // Expone componentes o módulos
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^17.0.0' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^17.0.0' },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Extensiones soportadas
  },
};

```

para las pruebas e2e, añadir en el package.json:
```
"scripts": {
    "build": "webpack --mode production",
    "build:dev": "webpack --mode development",
    "build:start": "cd dist && PORT=8080 npx serve",
    "start": "webpack serve --open --mode development",
    "start:live": "webpack serve --open --mode development --live-reload --hot",
    "e2e": "cypress open"
  },
```

y ejecutar 

```bash
npm run e2e
```