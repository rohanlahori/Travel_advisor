import axios from "axios";


const URL="https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";



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
    'X-RapidAPI-Key': "1f5c63a02amsh0d34597e1c98369p1e823djsn4a00110e41c9",
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};



// console.log(process.env.REACT_RAPID_KEY)
export const getPlacesData=async (coordinates) =>
{
    try{
        const {data: {data} } = await axios.get(URL,
          {
            params: {
              latitude: coordinates.lat,
              longitude: coordinates.lng,
              limit:'200'
            },
            headers: {
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

