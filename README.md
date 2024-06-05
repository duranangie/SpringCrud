# API de Gestión de Estudiantes

Esta API en Java permite gestionar una tabla única de estudiantes. Proporciona operaciones para crear, leer, actualizar y eliminar estudiantes, así como para buscar estudiantes por diferentes criterios.

## Endpoints

### Obtener todos los estudiantes
- **GET /api/v1/students**

  Retorna una lista completa de todos los estudiantes almacenados en la base de datos.

### Obtener detalles de un estudiante
- **GET /api/v1/students/{id}**

  Retorna los detalles de un estudiante específico identificado por su `{id}`.

### Crear un nuevo estudiante
- **POST /api/v1/students**

  Crea un nuevo estudiante en la base de datos.

### Actualizar los detalles de un estudiante
- **PUT /api/v1/students/{id}**

  Actualiza los detalles de un estudiante existente identificado por su `{id}`.

### Eliminar un estudiante
- **DELETE /api/v1/students/{id}**

  Elimina un estudiante existente identificado por su `{id}`.

## Parámetros

- **id**: El identificador único del estudiante.

## Uso

Para consumir esta API, utiliza las siguientes URLs base dependiendo de la acción que desees realizar:

- **GET**: `http://localhost:8080/api/v1/students`
- **POST**: `http://localhost:8080/api/v1/students`
- **PUT**: `http://localhost:8080/api/v1/students/{id}`
- **DELETE**: `http://localhost:8080/api/v1/students/{id}`

Asegúrate de reemplazar `{id}` con el identificador correspondiente del estudiante para las operaciones de PUT y DELETE.

## Consumo desde JavaScript y HTML

Esta API puede ser consumida desde una aplicación web desarrollada en JavaScript y HTML. Para interactuar con la API desde el cliente, realiza las solicitudes HTTP adecuadas a los endpoints mencionados anteriormente.

## Descarga del Backend y Frontend

### Backend

Para descargar el backend de esta aplicación, sigue estos pasos:

1. **Clonar el Repositorio**:
   - Clona el repositorio desde GitHub: `git clone https://github.com/duranangie/SpringCrud.git`

2. **Instalación y Configuración**:
   - Sigue las instrucciones proporcionadas en el README del backend para instalar y configurar el proyecto.

### Frontend

Para descargar el frontend de esta aplicación, sigue estos pasos:

1. **Clonar el Repositorio**:
   - Clona el repositorio desde GitHub: `git clone https://github.com/duranangie/SpringCrud.git`

2. **Instalación y Configuración**:
   - Sigue las instrucciones proporcionadas en el README del frontend para instalar y configurar el proyecto.

Una vez descargados y configurados ambos proyectos, podrás ejecutar el backend y frontend de la aplicación de forma independiente.

