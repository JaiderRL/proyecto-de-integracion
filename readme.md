# Proyecto Integracion

API REST para la gestión de tareas (To-Do List), desarrollada con Node.js, Express y Sequelize bajo el patrón MVC
El proyecto implementa pruebas automatizadas con Jest + Supertest e integración continua mediante GitHub Actions

## Caracteristicas principales
- CRUD completo de tareas (crear, leer, actualizar, eliminar)
- Arquitectura **MVC** (Model-View-Controller)
- Base de datos **SQLite**
- Pruebas unitarias y de integración
- Pipeline de **CI/CD** con GitHub Actions
- Documentación con **Swagger**
- Manejo centralizado de errores

## Estructura del proyecto

proyecto-de-integracion/
├── src/
│   ├── config/               # Configuración de Sequelize y base de datos
│   ├── controllers/          # Lógica de negocio
│   ├── models/               # Definición de modelos
│   ├── routes/               # Rutas y endpoints
│   ├── tests/                # Pruebas unitarias e integración
│   ├── app.js                # Punto de entrada de la app
│   └── database/             # Archivos SQLite
├── .github/workflows/ci.yml  # Pipeline de CI/CD
├── package.json
├── jest.config.js
└── README.md

## Tecnologias utilizadas
| Componente    | Tecnología                 |
|---------------|----------------------------|
| Lenguaje      | Node.js (v20)              |
| Framework     | Express.js                 |
| Base de datos | SQLite (con Sequelize ORM) |
| Pruebas       | Jest + Supertest           |
| CI/CD         | GitHub Actions             |
| Documentación | Swagger (OpenAPI 3.0)      |

## Endponits principales

| Metodo   | Ruta             | Descripcion                    |
| -------- | ---------------- | ------------------------------ |
| `GET`    | `/api/tasks`     | Obtener todas las tareas       |
| `GET`    | `/api/tasks/:id` | Obtener una tarea por ID       |
| `POST`   | `/api/tasks`     | Crear una nueva tarea          |
| `PUT`    | `/api/tasks/:id` | Actualizar una tarea existente |
| `DELETE` | `/api/tasks/:id` | Eliminar una tarea             |

Por defecto el servidor corre en `http://localhost:3000`


## Pruebas

Ejecuta las pruebas con:

````bash
npm test
````

## Instalacion y ejecucion

```bash
# Clonar el repositorio
git clone https://github.com/JaiderRL/proyecto-de-integracion.git

# Instalar dependencias
npm install

# Ejecutar el servidor en desarrollo
npm run dev

```


