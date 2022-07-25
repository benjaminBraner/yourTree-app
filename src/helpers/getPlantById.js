import { plants } from "../data/plants";

export const getPlantById = (id) => {

     return plants.find(hero => hero.id === id);
} 