/** @format */

import React from "react";
import "./Home.css";
import ProductComponent from "./ProductComponent";

function Home() {
  return (
    <div className='Home'>
      <div className='home_Container'>
        <img
          className='home_Image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/Borat2Specials/B2CS_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB668560990_.jpg'
          alt=''
        />
      </div>
      <div className='home_row'>
        {/* product Component */}
        <ProductComponent
          id = "1"
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
          image='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019._UY630_SR1200,630_.jpg'
          price={100}
          rating={5}
        />
        <ProductComponent
        id = "2"
          title = "DR VAKU® Swadesi Pulse Oximeter Fingertip, Blood Oxygen Saturation Monitor Fingertip, Blood Oxygen Meter Finger Oximeter Finger with Pulse, with Four Color TFT Screen [Battery Included]"
          image = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/oxi-PC2x._SY608_CB655087945_.jpg"
          price = {1500}
          rating = {4}
        />
        {/* product Component */}
      </div>
      <div className='home_row'>
        <ProductComponent 
        id = "3"
        title = "Laptop"
        image = "https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
        price = {30000}
        rating = {5}

        />
        <ProductComponent
        id = "4"
          title = "boAt Bassheads 900 On Ear Wired Headphones(Carbon Black)"
          image = "https://m.media-amazon.com/images/I/61xeIT6UHrL._AC_SY400_.jpg"
          price = {3000}
          rating = {2}
          />
        <ProductComponent 
        id = "5"
        title = 'TP-Link Archer C6 Gigabit MU-MIMO Wireless Router, Dual Band 1200 Mbps Wi-Fi Speed, 5 Gigabit Ports, 4 External Antennas and 1 Internal Antenna WiFi Coverage with Access Point Mode, Qualcomm Chipset'
        image = "https://m.media-amazon.com/images/I/51ax8peHlPL._AC_SY400_.jpg"
        price = {8000}
        rating = {4}
        
        />
        {/* product Component */}
        {/* product Component */}
        {/* product Component */}
      </div>
      <div className='home_row'>
        <ProductComponent
        id = "6"
        title = "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
        image = "https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg"
        price = {100000}
        rating = {5}
        />
        {/* product Component */}
      </div>
    </div>
  );
}

export default Home;
