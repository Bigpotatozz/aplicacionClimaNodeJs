import { leerInput, listarLugares, menuInquirer, pausa } from "./helpers/inquirer.js";
import {Busquedas} from "./models/busquedas.js";
import dotenv from 'dotenv'; dotenv.config();

const main = async() => {

    const busquedas = new Busquedas();
    let seleccionValue;

    do{

       
        seleccionValue = await menuInquirer();
  
     
        switch(seleccionValue){
            case '1':
                let lugar = await leerInput("¿Qué lugar deseas buscar?");

                
                let resultados = await busquedas.buscar(lugar);
                let lugarElegido = await listarLugares(resultados);
                busquedas.agregarHistorial(lugar.nombre);
                let lugarClima = resultados.find(elemento => elemento.id === lugarElegido);
                console.log(lugarClima.lng, lugarClima.lat);
                let clima = await busquedas.getClima(lugarClima.lat, lugarClima.lng);
                console.log(clima.weather[0].description);

                
            
            break;
            
            case '2':

            busquedas.historial.forEach((e) => {
                console.log(e); 
            })

            break;

        }

        await pausa();
    

    }while(seleccionValue != '0')

   

}

main();