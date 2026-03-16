FROM node:18-alpine
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV DB_HOST=localhost
ENV DB_USER=postgres
ENV DB_PASSWORD=""
ENV DB_NAME=postgres
CMD [ "node","server.js" ]
