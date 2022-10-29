import React from 'react'
import './Featured.css'
import house from '../../assets/thehouse.jpg';
import bedroom1 from '../../assets/bedroom1.jpg';
import bedroom2 from '../../assets/bedroom2.jpg';
import kitchen from '../../assets/kitchen.jpg';
import livingroom1 from '../../assets/livingroom1.jpg';

import house3 from '../../assets/house3.jpg';
import bed1 from '../../assets/bed1.jpg';
import bed2 from '../../assets/bed2.jpg';
import kitchen2 from '../../assets/kitchen2.jpg';
import livingroom from '../../assets/livingroom.jpg';


const Featured = () => {
  return (
    <div className="featured">
       <h1 className="featured-text">Top Featured Listings</h1>
       <p className="featured-text">Selected listing by city, & Zip based on views.</p>
       <div className="container">
           <img className='span-3 image-grid-row-2' src={house} alt='' />
           <img src={bed1} alt='' />
           <img src={bed2} alt='' />
           <img src={kitchen2} alt='' />
           <img src={livingroom} alt='' />
           <div className="span-3 img-details">
              <div className='top'>
                   <h2>123 ESENIA</h2>
                   <p>House for Sales</p>
                   <p className="price">$2,67,000</p>
              </div>
              <div className="info-grid">
                <div>
                    <div className="info">
                        <p className="bold">Bedrooms:</p><p>5</p>
                    </div>
                    <div className="info">
                        <p className="bold">Bathrooms:</p><p>4</p>
                    </div>
                </div>
                <div>
                    <div className="info">
                        <p className="bold">Square Feet:</p><p>8679</p>
                    </div>
                    <div className="info">
                        <p className="bold">Est payment:</p><p>14000/month</p>
                    </div>
                </div>
           </div>
        </div> 
        <div className="span-2 right-img-details">
            <p>A beautiful modern home in the city with a full size paul. 2 bedrooms 1 open kitchen  </p>
            <button className="btn">View Listings</button>
        </div>

        </div>

        <div className="container">
        <img className="span-3 image-grid-row-2 order-1" src={house3} alt='' />

           <img className='order-2' src={bedroom1} alt='' />
           <img className='order-3' src={bedroom2} alt='' />
           <img className='order-4' src={kitchen} alt='' />
           <img className='order-5' src={livingroom1} alt='' />
           <div className="span-2 right-img-details order-7">
                <p>A beautiful modern home in the city with a full size paul. 2 bedrooms 1 open kitchen  </p>
                <button className="btn">View Listings</button>
            </div>



           <div className="span-3 img-details order-6">
              <div className='top'>
                   <h2>123 ESENIA</h2>
                   <p>House for Sales</p>
                   <p className="price">$2,6777,000</p>
              </div>
              <div className="info-grid">
                <div>
                    <div className="info">
                        <p className="bold">Bedrooms:</p><p>5</p>
                    </div>
                    <div className="info">
                        <p className="bold">Bathrooms:</p><p>4</p>
                    </div>
                </div>
                <div>
                    <div className="info">
                        <p className="bold">Square Feet:</p><p>8679</p>
                    </div>
                    <div className="info">
                        <p className="bold">Est payment:</p><p>14000/month</p>
                    </div>
                </div>
           </div>
        </div> 


        
        </div>

   </div>
    
  )
}


export default Featured