FROM node:23.3.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm i -g http-server

RUN npm run build

EXPOSE 5173

#CMD ["npm", "run", "dev"]

CMD [ "http-server", "dist", "-p", "5173" ]