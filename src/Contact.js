import React, { Component } from "react";
 
class Contact extends Component {
  
  render() {
    // const {newSales, sales, users, visit} = this.context
    return (
      <div className="row dashboard">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            {/* <img src="images/sample-1.jpg" alt=""> */}
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div> 
      
    );
  }
}
 
export default Contact;