const Autor = require('./Autor');
const Libro = require('./Libro');

Libro.belongsTo(Autor, { foreignKey: 'autorId', as: 'autor' });
Autor.hasMany(Libro, { foreignKey: 'autorId', as: 'libros' });

module.exports = { Autor, Libro };
