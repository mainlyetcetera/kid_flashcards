FROM node:16-alpine

WORKDIR '/app'

RUN npm install -g ts-node nodemon

COPY package.json .
RUN npm install

COPY . .

CMD ["nodemon", "src/index.ts"]
