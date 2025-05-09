import React, { useEffect, useState } from "react";
import Flight from "./Flight";

function GetUserCity() {
  const [Usercity, setUserCity] = useState("Loading...");
  const apiKey = "b5dea6c2e703427aa17c02434f81973b"; // key

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&no_annotations=1`;

          try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Safely access city/town/village from the components
            const components = data.results[0].components;
            const cityName =
              components.city || components.town || components.village ||components.city_district ||
              components.state_district || "City not found";
              
             
            
            setUserCity(cityName);
          } catch (err) {
            console.error("Error fetching location:", err);
            setUserCity("Failed to get city");
          }
        },
        (error) => {
          console.error("Geolocation permission error:", error);
          setUserCity("Permission denied");
        }
      );
    } else {
      setUserCity("Geolocation not supported");
    }
  }, []);

  return (
    <>
       {Usercity && Usercity !== "Loading..." && Usercity !== "Failed to get city" && Usercity !== "Permission denied" && (
      <>
      <div>UserCity:{Usercity}</div>
      <Flight Usercity={Usercity}/>
      </>
       )}
    </>
  );
}

export default GetUserCity;
