import {useEffect, useState, React} from "react";
import  {Link}  from 'react-router-dom';
import  './ProductCard.css';


function Productos(){

    const [productos, setproductos]=useState([]);
 

    useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then(respuesta=>respuesta.json())
     .then(datos=> (setproductos(datos)) )
     
    },[])


return(

<ol className="principal">
      {productos.map(producto=>(
        <>  
        <li key={producto.id}> 
        <img src={producto.image} alt="" width="10px" height="20px" />
        <p>
        { producto.title }
        </p>  
        <Link to={`/${producto.id}`}>Go to Details</Link>
        </li>
        </>
      ))}

      </ol> 

);


}


export default Productos;