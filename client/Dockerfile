FROM node:alpine

WORKDIR /app/client
RUN npm install serve -g
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

CMD ["serve", "./dist"]