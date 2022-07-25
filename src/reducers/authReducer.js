
/*
     cuando el usuario este autenticado, el state sera :
     {
          uid: "dkfañhf3899HHK5",
          name: "Benjamin"
     }

*/

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
     switch (action.type) {
          case types.login:

               return {
                    uid: action.payload.uid,
                    name: action.payload.displayName
               }
          
          case types.logout: 

               return { }

          default:
               return state;
     }
}