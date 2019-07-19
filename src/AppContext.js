import React, { Component } from "react";

export const AppContext = React.createContext()

 export class AppContextProvider extends Component {
    constructor(props) {
      super(props);
      this.state = {
      
        banner:'', 
        title:'', 
        description:'', 
        schedule:'', 
        prerequirements:'', 
        address:'',
        latitude:'', 
        longitude:'', 
        date:'', 
        time:'', 
        capacity:'',
        listEvents: []
                   

        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.cleanBox = this.cleanBox.bind(this);
      }
        componentDidMount(){
    
          fetch('https://0nwyn7vvaa.execute-api.us-east-1.amazonaws.com/dev/list-events')
          .then(res => res.json())
          .then(json => {
            
              this.setState({
                item: json.Items,                
              })
              
              
          })
          
          
    
      }
  
    handleChange = (event) =>  {
      
      
      this.setState({[event.target.name]: event.target.value});
      
    }

    cleanBox = () => {
      this.setState({
        banner:'', 
        title:'', 
        description:'', 
        schedule:'', 
        prerequirements:'', 
        address:'',
        latitude:'', 
        longitude:'', 
        date:'', 
        time:'', 
        capacity:'',
      });
    }

    handleFormSubmit = (event) => {
      event.preventDefault();
      const { banner, title, description, schedule, prerequirements, address, latitude, longitude, date, time, capacity } = this.state;
      if(banner && title && description && schedule && prerequirements && latitude && longitude && date && time && capacity !== ""){
        // localStorage.setItem('banner', banner);
        // localStorage.setItem('title', title);
        // localStorage.setItem('description', description);
        // localStorage.setItem('schedule', schedule);
        // localStorage.setItem('prerequirements', prerequirements);
        // localStorage.setItem('latitude', latitude);
        // localStorage.setItem('longitude', longitude);
        // localStorage.setItem('date', date);
        // localStorage.setItem('time', time);
        // localStorage.setItem('capacity', capacity);
        
        let eventsubmit = {
          name: title,
          description: description,
          prerequisites: prerequirements,
          address: address,
          eventDate: date,
          eventHour: time,
          capacity: capacity,
          link: banner
        };
  
        
            
            console.log(JSON.stringify(eventsubmit))

            fetch('https://0nwyn7vvaa.execute-api.us-east-1.amazonaws.com/dev/create-event', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
              },    
              body: JSON.stringify(eventsubmit)
            })
            .then(response => ()=>{
              console.log('Success:', response)
            })
            .catch(error => console.error('Error:', error));
<<<<<<< HEAD
            
            this.cleanBox();
            
            // fetch('https://0nwyn7vvaa.execute-api.us-east-1.amazonaws.com/dev/create-event', {
              //   method: 'POST',
              //   headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json'
                //   },
                //   body: JSON.stringify(eventsubmit)
                // });
                
          }else{
            alert("Es necesario llenar todos los campos para completar el registro")
=======
>>>>>>> upstream/master
          }
        }

    componentWillMount(){
      fetch('https://0nwyn7vvaa.execute-api.us-east-1.amazonaws.com/dev/list-events')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(JSON.stringify(data.Items))
          this.setState({ listEvents: JSON.stringify(data.Items) })
         
        })
    }
  
    render() {
      return (
        <AppContext.Provider
        value={{
          banner:this.state.banner,
          title: this.state.title,
          description: this.state.description,
          schedule: this.state.schedule,
          prerequirements:this.state.prerequirements,
          address: this.state.address,
          latitude:this.state.latitude,
          longitude: this.state.longitude,
          date: this.state.date,
          time: this.state.time,
          capacity:this.state.capacity,
          handleChange: this.handleChange,
          handleFormSubmit: this.handleFormSubmit ,
          item: this.state.item,

        }}
        >
          {this.props.children}

        </AppContext.Provider>
      );
    }
  }
 
  export const AppContextConsumer = AppContext.Consumer;