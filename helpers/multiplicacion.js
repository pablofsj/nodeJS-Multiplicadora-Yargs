
const fs = require('fs');

const crearTabla = async (base, hasta, listar = false) =>{
    
    try {
        if(listar){
            console.log(`----------------------`)
            console.log('Tabla del:',base, 'multiplicado por', hasta)
            console.log(`----------------------`)    
        }

        let salida = '';

        for (let i = 1; i <= hasta ; i++) {

            salida += `${base} x ${i} = ${base * i}\n`

        } 
        if(listar){
          console.log(salida);  
        }  

        fs.writeFileSync(`./outputs/tabla-${base} multilpicado por ${hasta}.txt`, salida)
        return (`tabla-${base} multilpicado por ${hasta}.txt`) 

        
    } catch (error) {
        throw error;
        
    }        

}

module.exports = {
    crearTabla
}