import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookServices from "./services/phonebookServices";
import axios from 'axios'



const App = () => {
  const [ persons, setPersons ] = useState([]); 

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNumber] = useState('');
  const [ filter, setFilter]= useState('');
  
  
  useEffect(() => {
   phonebookServices
   .getPerson()
   .then((personData)=>{
     setPersons(personData)
   })
  }, [])


  //Form handling
  const addPersons= (e)=>{
    e.preventDefault();
    const personObj= {name: newName, number: newNumber} //Persons obj template
    const nameCollections= persons.map((person)=>person.name)//map to check for duplicate names
    //console.log(nameCollections);
     if(nameCollections.includes(newName)){ //contion for new adding names
       alert(`${newName} is already added in phonebook` )
     }
    phonebookServices
    .createPerson(personObj)
    .then(returnedPerson =>{
      setPersons(persons.concat(returnedPerson))
      setNewName('');
      setNumber('');
    })
    
  }
  
 //input field handling for controlled components
  const handleNameChange= (e)=>{
    setNewName(e.target.value);
  }

  //input handling for phone number
  const handleNumberChange = (e)=>{
    setNumber(e.target.value);
  }

  const handleFilterChange =(e)=>{
    setFilter(e.target.value);
  }
  
  const filteredPerson= persons.filter(person =>
    person.name.toLowerCase().includes(filter));
    console.log(filteredPerson);

 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter ={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        onFormSubmit ={addPersons}
        handleNameChange={handleNameChange}
        nameValue={newName}
        handleNumberChange ={handleNumberChange}
        numberValue={newNumber}

        />
      
      <h2>Numbers</h2>
    {/* <Persons lists=  {showPerson} onDelete ={deletePerson} /> */}
    
     
    </div>
  )
}

export default App
