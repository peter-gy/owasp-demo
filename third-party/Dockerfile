# Install dependencies only when needed
FROM node:16-alpine AS deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# Production image, copy all the files and run react-scripts
FROM node:16-alpine AS runner
WORKDIR /app

# For static serving the build folder
RUN yarn global add serve

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactjs
COPY --from=builder --chown=reactjs:nodejs /app/build ./build

USER reactjs

EXPOSE 4000
ENV PORT 4000

CMD ["serve", "-s", "build"]