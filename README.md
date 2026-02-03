# agenda-mongo

2021496

# Agenda Mongo API

API REST desarrollada con Node.js y MongoDB para la gestión de **contactos** y **tareas**, incluyendo operaciones CRUD completas, validaciones y manejo de errores.

---

## Tecnologías utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors
* helmet
* express-validator
* multer

---

## Estructura del proyecto

```
AGENDA-MONGO
├── configs
│   ├── app.js
│   ├── cors-configuration.js
│   ├── db.js
│   └── helmet-configuration.js
├── middlewares
│   ├── check-validators.js
│   ├── contact-validators.js
│   ├── task-validators.js
│   ├── file-uploader.js
│   ├── handle-errors.js
│   ├── request-limit.js
│   └── reservation-validators.js
├── node_modules
├── src
│   ├── contacts
│   │   ├── contact.controller.js
│   │   ├── contact.model.js
│   │   └── contact.routes.js
│   ├── tasks
│   │   ├── task.controller.js
│   │   ├── task.model.js
│   │   └── task.routes.js
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

---

## Configuración previa

1. Tener **Node.js** y **MongoDB** instalados.
2. Crear un archivo `.env` con las siguientes variables:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/agenda
```

---

## Inicio del proyecto

El proyecto se inicia con el siguiente comando:

```bash
node index.js
```

No es necesario utilizar el comando `node --use-system-ca index.js`.

El servidor se ejecuta por defecto en:

```
http://localhost:3000
```

---

## Endpoints – Contactos

### Base URL

```
/api/contacts
```

---

### Crear contacto

* Método: POST
* Ruta: `/api/contacts`

Body (JSON):

```json
{
  "name": "Juan Pérez",
  "phone": "55555555",
  "email": "juan@mail.com"
}
```

---

### Listar todos los contactos

* Método: GET
* Endpoint:

```
/contacts
```

Ejemplo de URL completa:

```
http://localhost:3000/agendaWebAdmin/v1/contacts
```

Retorna una lista de contactos registrados.

---

### Crear un nuevo contacto

* Método: POST
* Endpoint:

```
/contacts
```

Body (JSON):

```json
{
  "name": "Juan Pérez",
  "alias": "Juanito",
  "phone1": "5555-1111",
  "phone2": "4444-2222",
  "location": "Guatemala",
  "type": "PERSONAL"
}
```

Crea un contacto nuevo en la base de datos.

---

### Actualizar un contacto

* Método: PUT
* Endpoint:

```
/contacts/:id
```

Ejemplo de URL:

```
http://localhost:3000/agendaWebAdmin/v1/contacts/65ab1234abc567890def1234
```

Body (JSON):

```json
{
  "alias": "JP",
  "location": "Ciudad de Guatemala"
}
```

Actualiza únicamente los campos enviados.

---

### Eliminar un contacto

* Método: DELETE
* Endpoint:

```
/contacts/:id
```

Elimina el contacto de forma permanente.

---

## Endpoints – Tareas (Tasks)

### Listar todas las tareas

* Método: GET
* Endpoint:

```
/tasks
```

Ejemplo de URL:

```
http://localhost:3000/agendaWebAdmin/v1/tasks
```

Retorna todas las tareas registradas.

---

### Filtro opcional por prioridad

```
/tasks?priority=ALTA
```

Valores permitidos:

* ALTA
* MEDIA
* BAJA

---

### Crear una nueva tarea

* Método: POST
* Endpoint:

```
/tasks
```

Body (JSON):

```json
{
  "name": "Estudiar para el examen de programación",
  "priority": "ALTA"
}
```

Crea una tarea nueva.

---

### Actualizar una tarea

* Método: PUT
* Endpoint:

```
/tasks/:id
```

Ejemplo de URL:

```
http://localhost:3000/agendaWebAdmin/v1/tasks/65ab9876fed432109abc4567
```

Body (JSON):

```json
{
  "name": "Estudiar Express y MongoDB",
  "priority": "MEDIA"
}
```

Actualiza los datos de la tarea.

---

### Eliminar una tarea

* Método: DELETE
* Endpoint:

```
/tasks/:id
```

Elimina la tarea definitivamente (hard delete).

---

## Pruebas con Postman

1. Abrir Postman.
2. Seleccionar el método HTTP correspondiente.
3. Colocar la URL completa, por ejemplo:

```
http://localhost:3000/api/contacts
```

4. En la pestaña **Body**, seleccionar `raw` y formato `JSON`.
5. Enviar la solicitud.

---

## Estado del proyecto

* CRUD completo
* Validaciones implementadas
* Arquitectura modular
* Listo para integración con frontend

---

## Autor

Andy Ariel Ajiatas Xiquin - 2021496

Proyecto académico desarrollado para prácticas de backend con Node.js y MongoDB.
