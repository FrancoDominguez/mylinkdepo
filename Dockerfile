FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . .

RUN npm run build --silent

CMD ["npm", "run", "serve"]