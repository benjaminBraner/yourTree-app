import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { startLoading, finishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {

     /* cuando la accion es asincrona el dispatch me lo ofrece thunk de aqui, asi que no es necesario importarlo de algun lado */
     return (dispatch) => {
          dispatch( startLoading() )

          firebase.auth().signInWithEmailAndPassword(email, password)
          .then( ({ user }) => {
               dispatch( login(user.uid, user.displayName) )
               dispatch( finishLoading() )

          }).catch( e => { console.log(e) } )

          
     }
     
}


export const startRegisterEmailPasswordName = (email, password, name) => {
     return (dispatch) => {
          firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(  async({ user }) => {

               await user.updateProfile({displayName: name})
               console.log(user);

               dispatch(
                    login(user.uid, user.displayName )
               )
          }).catch( e => { console.log(e) } )
     }
}


export const startGoogleLogin = () => {
     return (dispatch) => {
          //retorna una promesa
          firebase.auth().signInWithPopup(googleAuthProvider)
          .then( ( { user } ) => {
               dispatch( login( user.uid, user.displayName ) );
          })
     }
}


export const login = (uid, displayName) => ({
     type: types.login,
     payload: {
          uid,
          displayName
     }
})

export const startLogout = () => {
     return async(dispatch) => {
          await firebase.auth().signOut();

          dispatch( logout() )
     }
}


export const logout = () => ({
     type: types.logout
})