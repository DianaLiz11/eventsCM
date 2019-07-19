import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,

} from "react-router-dom";
// import Theme from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
import {AppContextProvider, AppContext} from "./AppContext";
import Stuff from "./Stuff";
import Contact from "./Contact";


Stuff.contextType = AppContext;
Contact.contextType= AppContext;

// const drawerWidth = 240;
 
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     drawer: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },

//     }),
// );

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
            <li className="font-size-nav"><NavLink to="/stuff" >Crear un Evento</NavLink></li>
            <li className="font-size-nav"><NavLink to="/contact" >Eventos Creados</NavLink></li>
            </div>
            </div>
          </ul>
         
          <div className="content nav-width-rigth">
          <p className="color-blue color-blue-back margin alto-dash"></p>
            
            <Route path="/stuff" component={Stuff}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        
        </BrowserRouter>
        </AppContextProvider>  
    );
  }
}
 
export default Main;