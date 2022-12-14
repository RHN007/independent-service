import React from 'react';
import './Service.css'
import {useNavigate} from 'react-router-dom'

const Service = ({service}) => {

    const {id, name, img, description, price} = service; 
    
    const navigate = useNavigate()
    
    const navigateToServiceDetail = id => {
            navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" height={200} width={200} />
            <h2> {name}</h2>
            <p>Price: {price} </p>
            <p> Description: {description} </p>
            <button onClick={()=> navigateToServiceDetail(id)}>Book: {name} </button>
        </div>
    );
};

export default Service;