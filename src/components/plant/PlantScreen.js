import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getPlantById } from '../../helpers/getPlantById';
import '../../scss/components/plant/_PlantScreen.scss'

const plantImages = require.context('../../plants' , true)

export const PlantScreen = ({isPublic}) => {

     const { plantId } = useParams();
     console.log(plantId);

     const navigate = useNavigate();

     const plant = getPlantById( plantId );

     const imagePath = plantImages(`./${plantId}.jpg`).default;

     const clickBtn = () => (isPublic) && navigate('/public/signup');

     return (
          <div className='PlantScreen'>
               <div className='plant-container animate__animated animate__backInLeft'>

                    <div className='plant-img-container'>
                         <img alt={plantId} src={ imagePath } />
                    </div>


                    <div className='plant-info'>
                         <h2>{ plant.name }</h2>
                         <p className='plant__care-level'>Care Level: { plant.care_level }</p>
                         <h3>{ plant.price }</h3>

                         <p className='plant__cares'>{ plant.cares }</p>

                         <button onClick={ clickBtn }>Add to Cart</button>
                    </div>


               </div>
          </div>
     )
}
