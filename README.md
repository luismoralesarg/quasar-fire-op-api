# Fuego de Quasar API REST

API REST para determinar la ubicación y el contenido del mensaje enviado por un carguero imperial. 

## ⚙️ Guía de Inicio
 
### Variables de Entorno
 
Copiar el contenido de `.env.example`  en `.env` y setear los parametros de conexion a la base de datos y el puerto de la aplicación
 
Instalar dependencias

```sh
$ npm i
```
 
### Ejecución local (Build)

```sh
# Build
$ npm run build
# Run build
$ npm run start
```

### Docker

#### Build
 
```sh
$ docker build . -t quasar-fire-api
```
 
#### Run
 
```sh
$  docker run --name quasar -p 3000:3000 -e DBUSER=<dbuser> -e DBPASSWORD=<dbpassword> -e DBHOST=<dbhost> -e DBNAME=<dbname> quasar-fire-api
```
 
### Docker-Compose
 
```sh
$ docker-compose up --build -d
```
## Documentación (Open API 3.0.0)
 
Se puede encontrar la documentación completa de la Api [AQUÍ](https://app.swaggerhub.com/apis-docs/luismo07/quasar-fire-op-api/1.0.0)
 
## Requisitos

- Node.js (Express)
- MongoDB

## Tests
  
```sh
$  npm run test
```
## Demo 

El proyecto esta hosteado en [https://quasar.hostify.com.ar](https://quasar.hostify.com.ar)
