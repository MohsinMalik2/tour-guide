
import axios from 'axios';
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '68122489dcmshfe8e0a72d2e3522p126571jsn3835f8a1682a'
  }
};




export const getDetails= async ()=>{

    try {
        const response = await axios.get(URL,options);
        return response;
    } catch (error) {
        console.error(error);
    }
}