# --- Stage 1: Build the Vite app ---
FROM node:24 AS builder

# Bake Image tag into the image.
ARG VITE_IMAGE_TAG=local_docker
ENV VITE_IMAGE_TAG=$VITE_IMAGE_TAG

WORKDIR /app

COPY package*.json ./
COPY vite.config.js ./
COPY public/index.html ./index.html      
RUN npm install

COPY . .

RUN npm run build


# --- Stage 2: Serve with NGINX ---
FROM nginx:stable-alpine

# Copy built app from builder.
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace NGINX config to support React routing.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh && \
    dos2unix /entrypoint.sh

# Enter container using port 80 (default http port).
EXPOSE 80

# Use custom entrypoint instead of default CMD.
ENTRYPOINT ["/entrypoint.sh"]
