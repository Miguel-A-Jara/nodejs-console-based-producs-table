const { crearArchivoTabla } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivoTabla( argv.b, argv.l, argv.h )
  .then(res => console.log(res.rainbow, 'creado'))
  .catch(err => console.error(err));