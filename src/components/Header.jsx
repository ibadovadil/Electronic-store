import Button from 'react-bootstrap/Button';
import React from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
            <h1 >Roco wireless <br /> headphone</h1>

            <Button variant="light">Shop now</Button>{' '}
            
      </div>
      <div className="header-right">

        <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
