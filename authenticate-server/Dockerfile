FROM node:alpine
COPY . /authenticate-server
WORKDIR /authenticate-server
CMD npm install bcrypt && npm run start:authenticate
EXPOSE 3002