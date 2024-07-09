FROM node:22.4.0-alpine3.20

RUN apk update && apk upgrade && apk add --no-cache bash

RUN npm install -g yarn --force

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["yarn", "run", "dev"]
