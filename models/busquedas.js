import axios from 'axios';

class Busquedas {

    historial = [];

    constructor(){}

    async buscar(lugar){

    
        try{
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?`,
                params: {
                    'access_token': process.env.MAPBOX_KEY,
                    'limit': 5,
                    'language': 'es'
                }
            });
    
            const respo = await instance.get();
            let features =  respo.data.features;
            return features.map((elemento) => ({
                id: elemento.id,
                nombre: elemento.place_name,
                lng: elemento.center[0],
                lat: elemento.center[1]
            }))
        }catch(e){
            console.log(e);
        }
       

    }

    async getClima(lat, lon){

        try{

            const instace = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {

                    'lat': lat,
                    'lon': lon,
                    'appid': process.env.OPENWEATHER_KEY
                   
                }
            })

            const respo = await instace.get();
            return respo.data;

        }catch(e){
            console.log(e);
        }
    };


    agregarHistorial(lugar = ""){
        
        if(this.historial.includes(lugar))
        this.historial.unshift(lugar);


    }


}

export {Busquedas}