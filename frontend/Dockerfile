# Stage 1: Build Vite app
FROM node:18-alpine AS build
WORKDIR /app

COPY frontend/package*.json ./
RUN npm install
COPY frontend/. .

RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
