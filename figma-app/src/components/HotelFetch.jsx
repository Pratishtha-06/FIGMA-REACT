import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import { differenceInCalendarDays } from "date-fns";
import HotelData from '..//../api/api.json';


function HotelFetch() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location =useLocation();
  const city =location.state?.city;
  const date =location.state?.date;
  const returnDate =location.state?.returnDate;
  const days=differenceInCalendarDays(new Date(returnDate),new Date(date));
  const [place,setPlace]=useState([]);
  const [filteredHotels,setFilteredHotels]=useState([]);
  
  
  useEffect(()=>{
    axios.get('..//../api/api.json')
    .then((res)=>{
      console.log((res.data));
      setPlace(res.data);
    })
    .catch((err)=>{
      console.log(err);
      
    })
  },[])
  
  useEffect(() => {
    if (place.length && city) {
      const matchedCity = place.find(
        (item) => item.city.toLowerCase() === city.toLowerCase()
      );
      if (matchedCity) {
        setFilteredHotels(matchedCity.hotels);
      }
    }
  }, [place, city]);

 

  return (
    <div className="d-flex flex-column" style={{width:'80%'}}>
    <h3>Accomodations</h3>

    <div className="py-4 d-flex flex-row" style={{overflowX:'scroll',flexWrap:'nowrap'}} >
     
    
      {filteredHotels.length > 0 ? (
          filteredHotels.map((items,index)=> (

      <div className="card mx-4" key={index} style={{borderRadius:'20px',minWidth:'290px'}}>

        <div className="w-100">

        <div className="backgound" style={{height:'165px',borderRadius:'20px 20px 0px 0px'}}>
          <img src={items.image}  alt="hotel"
               style={{width:'100%',height:'100%',borderRadius:'20px 20px 0px 0px'}}/>
        </div>
        </div>
        <div style={{margin:'10px 0px 15px 8px'}}>
            <div style={{fontFamily:'sans-serif',fontWeight:'700',fontSize:'16px'}}>
                 {items.name}</div>
            <div style={{fontFamily:'sans-serif',fontWeight:'700',fontSize:'14px'}}>
                CheckIn:{items.checkIn}</div>
            <div style={{fontFamily:'sans-serif',fontWeight:'700',fontSize:'14px'}}>
                CheckOut:{items.checkOut}</div>
        </div>
          
        <div style={{fontFamily:'sans-serif',fontWeight:'700',fontSize:'14px',margin:'0px 0px 5px 8px'}}>
            {days} Nights</div>
      </div>
      ))
    ):(
      <div className="card mx-4"  style={{borderRadius:'20px',minWidth:'290px'}}>

      <div className="w-100">

      <div className="backgound" style={{height:'165px',borderRadius:'20px 20px 0px 0px'}}>
        <img   alt="hotel"
             style={{width:'100%',height:'100%',borderRadius:'20px 20px 0px 0px'}}/>
      </div>
      </div>
      <div style={{margin:'10px 0px 15px 8px'}}>
          <div style={{fontFamily:'sans-serif',fontWeight:'700',fontSize:'16px'}}>
               No Hotels Found</div>
          <div style={{fontFamily:'sans-serif',fontWeight:'700',fontSize:'14px'}}>
              CheckIn:</div>
          <div style={{fontFamily:'sans-serif',fontWeight:'700',fontSize:'14px'}}>
              CheckOut:</div>
      </div>
        
      <div style={{fontFamily:'sans-serif',fontWeight:'700',fontSize:'14px',margin:'0px 0px 5px 8px'}}>
          {days} Nights</div>
    </div>
    )}
    </div>
    </div>
  );
}

export default HotelFetch;
