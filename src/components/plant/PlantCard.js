import React from 'react'
import { Link } from 'react-router-dom';
import '../../scss/components/plant/_PlantCard.scss'

const plantImages = require.context('../../plants' , true)

export const PlantCard = ({ id, name, price }) => {
     // console.log(plantImages("./air-plant.jpg").default);
     // console.log(id);
     // const hola = "zz-plant"
     

     return (
          <div className='plant-card'>

               <img alt={id} src={plantImages(`./${id}.jpg`).default} />

               <div className='plant__features'>

                    <div className='features'>
                         <h2>{name}</h2>
                         <p>{price}</p>
                         <Link to={`/plants-app/products/plant/${id}`}>
                              <button>
                                   More..
                              </button>
                         </Link>
                    </div>

               </div>

          </div>
     )
}
