FROM node:16-alpine

WORKDIR '/app'

RUN npm install -g ts-node

COPY package.json .
RUN npm install

COPY . .

CMD ["ts-node", "src/index.ts"]
