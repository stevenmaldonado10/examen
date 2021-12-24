import React from "react";
import './About.css';
import  myImg from './Images/personal.jpg';

function About (){

return(

<div className="AboutDiv">

    <h3>Nombre: Steven Danilo Maldonado Peña</h3>
    <h3>Descripción: Soy ingeniero electrónico, tengo 28 años, vivo en la ciudad de Bogotá D.C. y me gusta observar partidos de fútbol y coleccionar vinilos musicales.</h3>
    <h3>Imagen: (no he logrado subir la imagen. Ayuda por favor)</h3>
    <h3>Cosas que he aprendido en el programa:</h3>
  {/*<img src={myImg} alt="" width="50px" height="50px"> </img>*/}

    <ol>
         
        <li>Trabajar en equipo y de manera organizada a través de un marco de trabajo</li>
        <li>Lenguajes como HTLM, CCS Y Javascript</li>
        <li>Metodologías ágiles para trabajar en un proyecto</li>
    </ol>
    <h3>Correo: stevenmaldonado10@hotmail.com</h3> 
    <a href="https://github.com/stevenmaldonado10">GitHub</a>
    
</div>


);


}

export default About;