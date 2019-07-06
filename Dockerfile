FROM node:11.15.0-alpine

RUN mkdir -p /app/mock-json-data

WORKDIR /app/mock-json-date

COPY packge*.json ./app/mock-json-data

RUN npm install --production --silent

CMD ["npm", "run", "start"]
