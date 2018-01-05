import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      Follow us:&nbsp;&nbsp;
      <a href="#" title="#">
        <FontAwesome name="instagram"/>&nbsp;Instagram
      </a>
      &nbsp;&nbsp;
      <a href="" title="">
        <FontAwesome name="yelp"/>&nbsp;Yelp
      </a>
      &nbsp;&nbsp;
      <a href="" title="">
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