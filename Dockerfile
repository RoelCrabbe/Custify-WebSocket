FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
EXPOSE 8765
CMD ["npm", "start"]
