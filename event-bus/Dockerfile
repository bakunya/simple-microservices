FROM node:alpine

WORKDIR /app/events
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "install"]