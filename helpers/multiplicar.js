const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async ( base = 5, list, hasta = 10 ) => {

  try {
  
    let salida = '';
    let consola = '';
  
    for(let i = 1; i <= hasta; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i }\n`;
    }
  
    if(list) {
      console.log('============================='.green);
      console.log(`\tTabla del:`.green, colors.blue(base));
      console.log('============================='.green);
      
      console.log(consola);
    }
  
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  
    return `tabla-${base}.txt`;

  } catch (err) {

    throw err;
  }
}

module.exports = { crearArchivoTabla };