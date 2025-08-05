# STEP 1: Build the frontend with environment variables
FROM node:24-alpine AS builder

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Run build (this will inline env variables)
RUN npm run build

# STEP 2: Serve using Nginx
FROM nginx:stable-alpine

# Copy the build from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace the default Nginx config with custom one
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]