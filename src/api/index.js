import axios from "axios";


const RESTAURANT_URL="https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";
const HOTEL_URL="'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng'";


const options = {
  params: {
    latitude: '12.91997',
    longitude: '100.87808',
    limit: '30',
    currency: 'USD',
    distance: '2',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};



// console.log(process.env.REACT_RAPID_KEY)
export const getPlacesData=async (coordinates,type) =>
{

  const cur_url=`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`;
  console.log(cur_url)
    try{
        console.log(cur_url)
        const {data: {data} } = await axios.get(cur_url,
          {
            params: 
            {
              latitude: coordinates.lat,
              longitude: coordinates.lng,
              limit:'200'
            },
            headers: 
            {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
            
          }
        );
        console.log(data)
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}