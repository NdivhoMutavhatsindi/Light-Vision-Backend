# syntax = docker/dockerfile:1

ARG NODE_VERSION=22.21.1
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js/Prisma"

WORKDIR /app

ENV NODE_ENV=production

FROM base AS build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    node-gyp \
    openssl \
    pkg-config \
    python-is-python3

# Copy package files
COPY package*.json ./

# Copy Prisma BEFORE npm ci
COPY prisma ./prisma

# Install dependencies (postinstall can now find schema.prisma)
RUN npm ci

# Copy the rest of the application
COPY . .

# Optional (postinstall already generated the client)
RUN npx prisma generate

FROM base

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y openssl && \
    rm -rf /var/lib/apt/lists/*

COPY --from=build /app /app

EXPOSE 8080

CMD ["npm", "run", "start"]