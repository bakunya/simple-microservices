FROM node:alpine

WORKDIR /app/moderation
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "install"]