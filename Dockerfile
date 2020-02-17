FROM node:12.6-alpine

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/

EXPOSE $PORT

CMD npm run start:prod
