# Use official Node LTS
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Environment
ENV NODE_ENV=production

EXPOSE 5000
CMD ["node", "server.js"]