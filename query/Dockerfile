FROM node:alpine

WORKDIR /app/query
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "install"]