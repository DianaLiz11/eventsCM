import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,

} from "react-router-dom";
import {AppContextProvider, AppContext} from "./AppContext";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Home from "./Home"
import {Icon} from 'react-materialize'

Stuff.contextType = AppContext;
Contact.contextType= AppContext;

class Main extends Component {
  
  render() {
    return (
      <AppContextProvider>
        <BrowserRouter>

          <ul className="header margin nav-width">
          <div className="color-black">
            <div className="alto">
             <p className="color-white color-blue-strong margin padding-nav font-size-nav">Events CM</p>
            </div>
            <div className="margin-nav">
            <li className="font-size-nav"><Icon small className="icon">
            event_available</Icon><NavLink className="color-white-nav" to="/home" >Home</NavLink></li>
            <li className="font-size-nav"><Icon small className="icon">
            date_range</Icon><NavLink to="/stuff" className="color-white-nav">Crear un Evento</NavLink></li>
            <li className="font-size-nav"><Icon small className="icon">
            event_available</Icon><NavLink className="color-white-nav" to="/contact" >Eventos Creados</NavLink></li>
            </div>
            </div>
          </ul>

         
          <div className="content nav-width-rigth">
          <p className="color-blue color-blue-back margin alto-dash">  <i class="material-icons">add</i></p>
            <Route exact path="/home" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route  path="/contact" component={Contact}/>
            
          </div>
        
        </BrowserRouter>
        </AppContextProvider>  
    );
  }
}
 
export default Main;