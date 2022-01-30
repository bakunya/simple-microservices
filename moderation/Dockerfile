FROM node:alpine

WORKDIR /app/moderation
COPY ./package.json ./
RUN npm install
COPY ./ ./

ENV network_client="client"
ENV network_comments="comments"
ENV network_events="events"
ENV network_moderations="moderations"
ENV network_posts="posts"
ENV network_query="query"

CMD ["npm", "start"]