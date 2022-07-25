import React from 'react'
import { Link } from 'react-router-dom';
import '../../scss/components/plant/_PlantCard.scss'

export const PlantCard = ( { id, name, price } ) => {


     const imagePath = `/assets/${ id }.jpg`;
     

     return (
               <div className='plant-card'>

                    <img alt={id} src={ imagePath }/>

                    <div className='plant__features'>

                         <div className='features'>
                              <h2>{ name }</h2>
                              <p>{ price }</p>
                              <Link to={`/public/products/plant/${id}`}>
                                   <button>
                                        More..
                                   </button>
                              </Link>
                         </div>

                    </div>

               </div>         
     )
}
