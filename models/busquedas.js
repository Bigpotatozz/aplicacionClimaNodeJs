import axios from 'axios';

class Busquedas {

    historial = [];

    constructor(){}

    async buscar(lugar){

    
        const instance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?`,
            params: {
                'access_token': 'pk.eyJ1IjoiYmlncG90YXRvIiwiYSI6ImNsdHAwdmJnMjBsZGcyanBhd24yYXUydTAifQ.QCbsgo9N22Tx1Ha_jUekOA',
                'limit': 5,
                'language': 'es'
            }
        });

        const respo = await instance.get();
        console.log(respo.data);
        return [];
    }


}

export {Busquedas}