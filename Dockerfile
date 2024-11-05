FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY .env ./
COPY jest.config.js ./
COPY jest.setup.ts ./
COPY tsconfig.json ./
COPY src ./src
COPY tests ./tests

RUN npm install

CMD ["npm", "run", "test:coverage"]
