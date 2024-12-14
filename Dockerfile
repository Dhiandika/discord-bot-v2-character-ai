FROM oven/bun:latest
WORKDIR /app
ENV PORT 8080

COPY . .
RUN bun install
EXPOSE 8080
CMD ["bun", "run", "start"]