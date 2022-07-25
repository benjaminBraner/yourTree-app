import ReactDOM from 'react-dom';
import './index.scss';
import { PlantsApp } from './PlantsApp';
// import './styles/index.scss';



/*
-instale la libreria react-redux para trabajar mas comodamente con redux ya que trae hooks entre otras cosas
 que facilitaran las cosas

-instale firebase la version 8.10.0 (esta no es la ultima version de firebase pero es la que utiliza namespaced)
pero hay una guia para migrar a la version actual

-https://www.npmjs.com/package/redux-thunk
tareas como el login, inserciones, etc, no son sincronas por lo que hay que aplicar un middleware que se encarga 
de resolver una tarea asincrona que llama al dispatch para modificar y retornar un nuevo estado de mi app, osea
es como el intermediario para tareas asincronas entre la accion y el dispatch para llamar al reducer y retornar un 
nuevo estado, para eso instalo redux-Thunk que vendria a ser el middleware
 
-instalo redux-thunk es un middleware que me va a ayudar a implementar toda la parte de acciones asincronas

-cuando quiero implementar el redux-thunk como middleware al principio hay un problema ya que en el store ya 
hay un middleware como segundo argumento del createStore() y si borro dicho middleware voy a romper toda
la configuracion del react-devtools, la solucion esta en una pagina de github de 
react-devtools que es una constante llamada composeEnhancers ya que de esta manera voy a poder aplicar diferentes
middlewares y voy a seguir teniendo la configuracion del redux-devtools , ahora para aplicar ese composeEnhancers y el thunk 
debo poner como segundo argumento del createStore el composeEnhancers( applyMiddleware( thunk ) )
(el applyMiddleware y el compose deben importarse de redux)
y esa seria toda la configuracion para trabajar con acciones asincronas en mi aplicacion

-instalo validator de npm para manejar todas las validaciones del email en el SignUpScreen
*/

ReactDOM.render(
    <PlantsApp />,
  document.getElementById('root')
);

