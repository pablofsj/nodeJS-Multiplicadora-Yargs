const {crearTabla} = require('./helpers/multiplicacion');
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption:true,
                    default: 5,
                    describe:'Base de la multiplicación'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption:true,
                    default : 10,
                    describe:'Multiplicador de la multiplicación'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b || argv.h)){
                        throw 'ERROR: La base debe ser un número'
                    }
                    return true;
                })
                .argv;

console.clear();


console.log(argv);


crearTabla(argv.b, argv.h, argv.l)
    .then(salida => console.log(salida,'creado'))
    .catch(err =>console.log(err));

 