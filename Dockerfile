FROM node:14 as build-step
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#segunda etapa NGINX
FROM nginx:1.21.1
COPY --from=build-step /usr/src/app/dist/qrcodes /usr/share/nginx/html
EXPOSE 80:80