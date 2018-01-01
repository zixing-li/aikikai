import React from 'react';
import map from '../assets/googlemaps.jpg'

const Location = () => {
  return (
    <div className="location-info">
      <img src={map} alt="map" className="info-pic" />
      307 E 92 St, 2 Fl (between 1st & 2nd Avenues), New York NY 10128
      <ul>
        <li>By subway:  #4, 5, 6 to 86 St/Lex; #6 to 96 St/Lex</li>
        <li>By bus:  M15 to 92 St; M86 to 92 St; M96 to 2nd Ave</li>
      </ul>
      Visitors are welcome.  Please arrive before regular class times. Thank you.
    </div>
  )
}

export default Location;