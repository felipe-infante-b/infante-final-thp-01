# tp-thp2-v3
TP Final - Taller de Programacion 2.
Profesor: Osvalo Ojeda.
Alumno: Felipe Infante.

----------------------------

Sistema de Manejo de Libreria.

Cuenta con Autores y Libros,
Los libros estan asociados a autores,
Cada libro tiene una cantidad (que no puede bajar de 1),
Cantidad por default es 1 y se puede incrementar o decrementar.
Se usa SQLite para almacenar la informacion.

PASOS:
1.Clonar repositorio de GitHub
git clone https://github.com/felipe-infante-b/tp-thp2-v3.git

2.Navegar al directorio del proyecto
cd TP V2

3.Instalar Dependencies
npm install

4.Correr el Server
(Va a correr en http://localhost:3000 por default)
npm start

5.Testear Endpoints:

AUTORES
    GET /api/autores - Todos los autores
    POST /api/autores - Crear Autor
    {
        "nombre": "Maria",
        "apellido": "Campos",
        "fechaNacimiento": "1289-11-06"
    }
    PUT /api/autores/:id Actualizar Autor
    DELETE /api/autores/:id - Eliminar Autor

LIBRO
    GET /api/libros - Todos los Libros
    POST /api/libros - Crear Libro
    {
     "titulo": "Gran Libro",
     "genero": "Aventura",
     "autorId": 3
    }
    POST /api/libros/:id/incrementar - Incrementar Cantidad
    {
        "cantidad": 5
    }
    POST /api/libros/:id/decrementar - Decrementar Cantidad
    {
        "cantidad": 3
    }

----------------------------

NOTA:
Para resetear la base de datos
eliminar el archivo "database.sqlite"
y correr nuevamente las migraciones.
O cambiar a force: a "true" en app.

