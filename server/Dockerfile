FROM node:16-alpine

WORKDIR '/app'

RUN npm install -g ts-node nodemon cors @types/cors

COPY package.json .
RUN npm install

COPY . .

CMD ["nodemon", "src/index.ts"]
