FROM debian:11.6-slim as builder

WORKDIR /app

RUN apt update
RUN apt install curl unzip libgcc-s1 -y

RUN curl https://bun.sh/install | bash

COPY package.json .
COPY bun.lockb .

RUN /root/.bun/bin/bun install --production

# ? -------------------------
FROM node:alpine as prisma

WORKDIR /app

COPY --from=builder /app/node_modules node_modules
COPY prisma prisma

RUN npx prisma generate

# ? -------------------------
FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=builder /root/.bun/bin/bun bun
COPY --from=prisma /app/node_modules node_modules

COPY src src
COPY public public
COPY tsconfig.json .

ENV ENV production
COPY .env .env

CMD ["./bun", "src/index.ts"]
