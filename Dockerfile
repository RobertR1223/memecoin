FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json ./

RUN npm install

FROM node:18-alpine AS build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

COPY . .

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=build /app/public /app/public

COPY --from=build /app/package.json /app/package.json

COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./

COPY --from=build --chown=nextjs:nodejs /app/.next/static /app/.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]