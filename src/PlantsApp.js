import { Provider } from "react-redux"
import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"



export const PlantsApp = () => {
     return (
          <div>
               <Provider store={store}>
                    <AppRouter/>

               </Provider>
          </div>
     )
}
