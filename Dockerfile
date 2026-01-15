# Etapa 1: Construcción (Build)
FROM node:20-alpine AS build
WORKDIR /app
# Copiar archivos de dependencias
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar el resto de archivos
COPY . .
# Construir la aplicación
RUN npm run build

# Etapa 2: Servidor de Producción (Nginx)
FROM nginx:stable-alpine
# Copiar los archivos compilados desde la etapa 'build'
COPY --from=build /app/dist /usr/share/nginx/html
# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Exponer puerto 80
EXPOSE 80
# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]