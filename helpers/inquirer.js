import inquirer from 'inquirer';
import colors from 'colors';






const opciones = [{
    type: 'list',
    name: 'opcion',
    message: 'Elige una opcion',
    choices: [{
        value: `1`,
        name: `${"1".green}. Buscar ciudad`
    },
    {
        value: `2`,
        name: `${"2".green}. Historial`
    },
    {
        value: '0',
        name: `${"0".green}. Salir` 
    }]
}]

const pausaOpciones = [{
    type: 'input',
    name: 'opcionPausa',
    message: 'Presion ENTER para continuar',
}]



const menuInquirer = async() => {
    console.clear();
    console.log("=====================".blue);
    console.log("SELECCIONA UNA OPCION".blue);
    console.log("=====================\n ".blue);
   
    const {opcion} = await inquirer.prompt(opciones);
    return opcion;
}

const pausa = async() => {
    await inquirer.prompt(pausaOpciones);

}

const leerInput = async(message) => {

    const pregunta = [{
        type: 'input',
        name: 'desc',
        message: message,
        validate(value){
            if(value.length === 0){
                return 'Ingresa un valor'
            }
                return true;
            
        }
    }]

    const {desc} = await inquirer.prompt(pregunta);
    return desc;
}



const borrarTarea = async(tareas = []) => {

    let choices = tareas.map((elemento, indice) => {

        
        return {
            value: elemento.id,
            name: `${`${indice + 1}`.green}. ${elemento.desc}`
        }

    });

    const opcionesBorrar = [{
        type: 'list',
        name: 'opcion',
        choices: choices
    }]


    const {opcion} = await inquirer.prompt(opcionesBorrar);

    return opcion;
} 

const confirmar = async(mensaje) => {

    const opcionesConfirmar = [{
        type: 'confirm',
        name: 'confirm',
        message: mensaje
    }]

    const {confirm} = await inquirer.prompt(opcionesConfirmar);
    return confirm;
}
    


const mostrarListadoCheck = async(tareas = []) => {

    let choices = tareas.map((elemento, indice) => {

        
        return {
            value: elemento.id,
            name: `${`${indice + 1}`.green}. ${elemento.desc}`
        }

    });

    const opcionesBorrar = [{
        type: 'checkbox',
        name: 'opciones',
        message: 'Seleccione lo que desea completar',
        choices: choices
    }]


    const {opciones} = await inquirer.prompt(opcionesBorrar);

    return opciones;
} 


              








export {menuInquirer,pausa, leerInput, borrarTarea, confirmar, mostrarListadoCheck};
