const express = require('express');
const sequelize = require('./config/database.js');
const turnoRoutes = require('./routes/turnoRoutes');

const app = express();
app.use(express.json());

app.use('/api/turnos', turnoRoutes);

(async () => {
  try {
    await sequelize.sync({ force: false }); // `true` para reiniciar DB.
    console.log('Base de datos sincronizada');

    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
})();
