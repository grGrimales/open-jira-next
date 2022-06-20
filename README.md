# Next.js OpenJira App

Para correr localment, se necesita la base de datos

```
docker-compose up -d

```

- El -d, significa **detached**

- MongoDB URL Local:

```mongodb://localhost:127.0.0.1:27018/entriesdb

```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

\*Reconstruir los modulos ne node y levantar Next

```
yarn install
yarn dev
```

## Llamar la base de datos con información de pruebas

Llamara a:

```
http://localhost:3000/api/seed


```
