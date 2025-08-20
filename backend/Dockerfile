# Use official Node LTS
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Set environment
ENV NODE_ENV=production

# Expose API port
EXPOSE 5000

# Start app
CMD ["node", "src/server.js"]
