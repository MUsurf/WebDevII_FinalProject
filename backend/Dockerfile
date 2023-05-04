FROM node:18

# RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

# RUN npm cache clean
RUN npm install

COPY . /usr/src/app
EXPOSE 3000

CMD ["nodemon","server.js"]
