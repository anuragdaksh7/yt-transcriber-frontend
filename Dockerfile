# Stage 1: Build
FROM oven/bun:1.1.13 AS builder

WORKDIR /app

COPY bun.lockb package.json tsconfig.json ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# Stage 2: Runtime
FROM oven/bun:1.1.13 AS runner

WORKDIR /app

COPY --from=builder /app .

ENV NODE_ENV=production
ENV PORT=4000
EXPOSE 4000

CMD ["bun", "start"]
