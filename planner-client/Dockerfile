FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .
COPY .env.production .env
RUN npm ci
COPY . .
RUN npm run check
RUN npm run build
RUN npm prune --production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
COPY .env.production .env
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]