# Product API

1. Clonar proyecto
2. Clonar el archivo ``` .env.template ``` y renombrarlo a ``` .env ```
3. Cambiar las varibles de entorno
4. Levantar la base de datos

5. Levantar la base de datos
```
docker-compose up
```
6. En caso de que no tenga docker, haga la conexion de manera manual en el gestor de base de dato de su preferencia.

7. Hay un endpoint para regitrar un usuario, http://localhost:8000/auth/register, como no se me pidio hacer un register en el frontend no lo hice, pero si lo hice en el backend para fines de prueba. puede acceder a este endpoint en la url que le deje anteriormente. Los campos que requieren son username y password en un json.


7. Levantar: ``` npm run start:dev ```

