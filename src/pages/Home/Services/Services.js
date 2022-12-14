import React, { useEffect, useState } from 'react';
import Service from '../Home/SingleService/Service';
import './Services.css'

const Services = () => {
   
  const [services, setServices] = useState([]); 


  useEffect(()=>{
      fetch ('services.json')
      .then(res => res.json())
      .then(data => setServices(data)); 
  },[])
   
   
    return (
        <div id='services' className='container'>
            
            <div className="row">
            <h2 className='services-title'>My Services </h2>
               <div className="services-container">  
        
        {
            services.map(service => <Service
                key = {service.id}
                service ={service}
            
            ></Service>)
        }
</div>

            </div>
            
      


        </div>
    );
};

export default Services;