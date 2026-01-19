# Build stage
FROM node:20-alpine AS build
WORKDIR /app

ARG BACKEND_API
ENV BACKEND_API=${BACKEND_API}

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Nginx stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]