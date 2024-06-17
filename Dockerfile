FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --silent
RUN npm install express

COPY . .

RUN npm run build

CMD ["npm", "run", "serve"]