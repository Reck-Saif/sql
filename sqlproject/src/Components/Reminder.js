import React from 'react';
import axios from "axios"
import reminderService from "./services/reminders"



class Reminder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
      newName: '',
      newTime: ""
    }
  }

      componentDidMount() {
        reminderService .getAll() .then(reminders => {this.setState({ reminders 
        })})
      }

      addName = (event) =>{
          event.preventDefault()
          const nameObject = {name: this.state.newName, timestamp: this.state.newTime,} 
          
        axios.post('/api/reminders', nameObject)

        .then(response => {
          this.setState({
            reminders: this.state.reminders.concat(response.data), newName: '', newTime: ''
        })})

}
   

   handleNameChange = (event) => { console.log(event.target.value)
        this.setState({newName: event.target.value})
   }

   handleTimeChange = (event) =>{
     this.setState({newTime: event.target.value})
   }


   deleteReminder = (id) => {
    return() => {
    const url = `/api/reminders/${id}`

        window.confirm("haluatko poista tämä") ?  
        axios
        .delete(url)
        (reminderService
          .getAll()
          .then(reminders => {
            this.setState({ reminders })
          })):
        alert("Ei poistettu"); 
      } 
      }

  render() {
    

    return (
      <div>
         <p>--------------------------</p>
         <h4>lisa Muistutus</h4> 
         
         <form onSubmit={this.addName}>
           
          <div>
            Aihe: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>

          <div>
            Kello: <input value={this.state.newTime} onChange={this.handleTimeChange} />
          </div>
            
          <div>
            <button type="submit">Lisa</button>
          </div>

        </form>

        <h4>Muistutus</h4>
        {this.state.reminders.map(reminder => { return (
             <div key={reminder.id}>
               <p>{reminder.timestamp} {reminder.name} <button onClick={this.deleteReminder(reminder.id)}>Poista</button></p>
             </div>  
        )})}
      
      </div>
      
    )
  }
}

export default Reminder