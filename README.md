# API TEST - MUSIC BANDS

Diseño REST API en nodejs con DB en MySQL

# Instalación
Debe tener instalado Node.js y Mysql

* [NodeJS](https://nodejs.org/es/download/)
* [MySQL](https://dev.mysql.com/downloads/installer/)

## Importar base de datos
* [Base de datos (MySQL)](/db/edge-test.sql)

## Dependencias
```bash
"bcrypt": "^5.0.1",
"dotenv": "^16.0.0",
"express": "^4.17.3",
"jsonwebtoken": "^8.5.1",
"mysql": "^2.18.1"
```

# Configuraciones
Las configuraciones de los datos de bd y puertos, se encuentran en el archivo [.env](/.env)

# Documentación (Postman Collection)
* [Postman Document](https://documenter.getpostman.com/view/7658959/UVkmQH22)

# Autenticación

Usuario de prueba para test -> **Usuario**: admin@admin.com - **Contraseña**: adminadmin


## Verbos HTTP

Los verbos o métodos HTTP deben usarse de acuerdo con sus definiciones según el estándar [HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html).
| METODOS       | VERBOS HTTP | ACCIONES       
| ------------- | ----------- | -----------------------
| /api/users    | GET         | Autenticación          
| /api/bands    | GET         | Ver listado de bandas  
| /api/bands/1  | GET         | Ver banda              
| /api/bands    | POST        | Agregar una banda      
| /api/bands    | PUT         | Editar una banda       
| /api/bands/1  | DELETE      | Borrar una banda       
