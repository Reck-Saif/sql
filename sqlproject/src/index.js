import React from 'react'
import ReactDOM from 'react-dom'
import Reminder from './Components/Reminder'
import Feedback from './Components/Feedback'
import Phonebook from './Components/Phonebook'

const App = () => {

  const phonebook = {
    name: 'Superadvanced phonebook app',
    contacts: [
      {
        name: 'John Doe',
        phonenumber: '358401234567',
        id: 1
      },
      {
        name: 'Jane Doe',
        phonenumber: '44551234567',
        id: 2
      },
      {
        name: 'Foo bar',
        phonenumber: '000',
        id: 3
      }
    ]
  }


  return (
    <div>
      <Phonebook phonebook={phonebook}/>
      <Feedback />
      <Reminder />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


