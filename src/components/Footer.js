import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      Follow us:&nbsp;&nbsp;
      <a href="https://www.instagram.com/ny_eastside_aikikai/?hl=ne" title="https://www.instagram.com/ny_eastside_aikikai/?hl=ne" target="_blank">
        <FontAwesome name="instagram"/>&nbsp;Instagram
      </a>
      &nbsp;&nbsp;
      <a href="https://www.yelp.com/biz/ny-eastside-aikikai-aikido-new-york" title="https://www.yelp.com/biz/ny-eastside-aikikai-aikido-new-york" target="_blank">
        <FontAwesome name="yelp"/>&nbsp;Yelp
      </a>
      &nbsp;&nbsp;
      <a href="https://www.facebook.com/NY-Eastside-Aikikai-306688226170590/" title="https://www.facebook.com/NY-Eastside-Aikikai-306688226170590/" target="_blank">
        <FontAwesome name="facebook-official"/>&nbsp;Facebook
      </a>
      <br/>
      <Link to="/Location" style={{color: 'black'}}>Location</Link>
      <br/>
      <a href="mailto:nyeaikikai@gmail.com" title="mailto:nyeaikikai@gmail.com">Contact Us</a>
      <hr/>
      © 2018 New York Eastside Aikikai
    </div>
  )
}

export default Footer;