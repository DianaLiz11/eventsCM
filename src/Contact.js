import React, { Component ,Fragment} from "react";


 
class Contact extends Component {
  
  render() {
    const {item} = this.context ;
    console.log(item)
   

    
    return (

      <div className="container">
          
         {
           
           item.map((number)=>
           <div class="row">
           <div class="col s12 m7">
             <div class="card">
               <div class="card-image">
               <img src={number.link.S} className=""/>
                 <span class="card-title">{number.name.S}</span>
               </div>
               <div class="card-content">
                 <p>Fecha: {number.eventDate.S}</p>
                 <p>Hora: {number.eventHour.S}</p>
               </div>
               <div class="card-action">
                 <a href="#">Editar</a>
                 <a href="##">Eliminar</a>
               </div>
             </div>
           </div>
         </div>
           
           )

             
            }

    
         </div>

      
    );
  }
}
 
export default Contact;