FROM node:alpine
RUN mkdir -p /usr/src/spam-fe
WORKDIR /usr/src/spam-fe
COPY ./packages/platform/build /usr/src/spam-fe
RUN npm install express
CMD ["node","server.js"]