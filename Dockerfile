FROM node:slim

COPY . /app

WORKDIR /app

VOLUME ["/app"]

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
