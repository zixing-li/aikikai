import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      Follow us:&nbsp;&nbsp;
      <FontAwesome name="instagram"/>&nbsp;Instagram &nbsp;<FontAwesome name="yelp"/>&nbsp;Yelp &nbsp;<FontAwesome name="facebook-official"/>&nbsp;Facebook
      <br/>
      <Link to="/Location">Location</Link>
      <br/>
      <a href="mailto:nyeaikikai@gmail.com" title="mailto:nyeaikikai@gmail.com">Contact Us</a>
      <hr/>
      © 2018 New York Eastside Aikikai
    </div>
  )
}

export default Footer;