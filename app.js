import { leerInput, menuInquirer, pausa } from "./helpers/inquirer.js";
import {Busquedas} from "./models/busquedas.js";

const main = async() => {

    const busquedas = new Busquedas();
    let seleccionValue;

    do{

       
        seleccionValue = await menuInquirer();
     
        switch(seleccionValue){
            case '1':
                let lugar = await leerInput("¿Qué lugar deseas buscar?");
               console.log(await busquedas.buscar(lugar));
                
            
            break;
            

        }

        await pausa();
    

    }while(seleccionValue != '0')

   

}

main();