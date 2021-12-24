import React, { useEffect, useState } from "react";
import './DatosProducto.css';
import { useParams } from 'react-router-dom';


function DatosProducto() {

    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProducto(json))
    }, [id])

    let CapturaRate = 0
    let CapturaCount =0

    if (producto.rating) {
        CapturaRate = producto.rating.rate;
        CapturaCount = producto.rating.count;
    }

    

    return (

            <div >
                <ul className="lista">
                    <li> Title: {producto.title}  </li>
                    <li><img src={producto.image} alt="" width="150px" height="150px" ></img></li>
                    <li>Description:{producto.description}</li>
                    <li>Category: {producto.category}</li>
                    <li>Price: {producto.price}</li>
                    <li>Rate:  {CapturaRate}</li>
                    <li>Count:  {CapturaCount}</li>
                </ul>
            </div>
    );
}

export default DatosProducto;



