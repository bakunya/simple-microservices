FROM node:alpine

WORKDIR /app/posts
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "install"]