import formulario from './controller/formularioController.js'
import login from './controller/loginController.js'
import vincular from './controller/vincularController.js'
import loginocult from './controller/loginOcultController.js'
import buscar from './controller/buscvController.js'




export function adicionarRotas(api){
   api.use(formulario);
   api.use(buscar);
   api.use(login);
   api.use(vincular);
   api.use(loginocult);
}