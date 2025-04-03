FROM node:23.3.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm i -g http-server

RUN npm install

RUN npm run build

EXPOSE 4175

#CMD ["npm", "run", "dev"]

#CMD [ "http-server", "dist", "-p", "3000" ]

CMD ["npm", "run", "preview", "--", "--port=4175"]

#CMD [ "http-server", "dist", "-p", "4175" ]
