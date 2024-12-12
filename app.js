const express = require('express');
const sequelize = require('./config/database.js');
const autorRoutes = require('./routes/autorRoutes');
const libroRoutes = require('./routes/libroRoutes');

const app = express();
app.use(express.json());

app.use('/api/autores', autorRoutes);
app.use('/api/libros', libroRoutes);

(async () => {
  try {
    await sequelize.sync({ force: false }); // Cambiar a `true` para reiniciar las tablas
    console.log('Base de datos sincronizada');

    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
})();
