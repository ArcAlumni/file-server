FROM node:14.15.1

WORKDIR /app/file-server

COPY ./package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]