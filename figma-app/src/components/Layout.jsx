import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext'; // Import the ThemeContext
import Dashboard from './Dashboard';
import Flight from './Flight';
import HotelFetch from './HotelFetch';
import GetUserCity from './userCity';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

function Layout() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Access the theme context


  return (
    <div className={`layout ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Button to toggle the theme */}
      <button onClick={toggleTheme} style={{ position: 'absolute', top: '10px', right: '10px',backgroundColor:'white',
                                             borderRadius:'10px'}}>
        {isDarkMode ? <SunIcon/> : <MoonIcon/>}
      </button>

      <div className="col">
        <div className="row-12 row-md-12 d-flex justify-content-center">
          <Dashboard />
        </div>
        <div className="row-12 row-md-12 d-flex justify-content-center">
          <Flight/>
        </div>
        <div className="row-12 row-md-12 d-flex justify-content-center">
          <HotelFetch />
        </div>
        
      </div>
    </div>
  );
}

export default Layout;
