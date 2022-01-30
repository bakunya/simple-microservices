FROM node:alpine

WORKDIR /app/comments
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "install"]