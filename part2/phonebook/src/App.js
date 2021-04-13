import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookServices from "./services/phonebookServices"
import Message from './components/Message'
import './index.css'



const App = () => {

  const [ persons, setPersons ] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNumber] = useState('');
  const [ filter, setFilter]= useState('');
  const [ msg, setMsg] = useState([]);
  
  
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

    if( newName ==="" || newNumber ===""){
      window.alert("Please enter name and number to proceed")
    }

    let samePerson= persons.find(person => person.name.toLowerCase() === newName.toLowerCase() || person.number === newNumber);
    
    if(samePerson){
      if(samePerson.number === setNewName && samePerson.name.toLowerCase() === newNumber.toLowerCase()){
        window.alert(`${newName}: ${newNumber} already in phonebook`)
        return 
      }

      if(samePerson.name.toLowerCase() === newName.toLowerCase()){
        if (window.confirm(`${newName} is already addded to phonebook, replace old number with new one ?`)) {
          const updatedPersonlist = {...samePerson, number: newNumber}
          phonebookServices.updatePerson(updatedPersonlist)
          .then (response =>
            {setPersons(persons.map(p =>p.id !== updatedPersonlist.id ? p : response))
            }).then(()=>{
              setNewName('')
              setNumber('')
              setMsg([{id:1, type:'success', message: `Updated old number for ${newName} with ${newNumber}`}])})
              setTimeout(()=>{
                setMsg(null)
              }, 5000)
            }
            return
        }
        
      }
      
    else{
    const personObj= {name: newName, number: newNumber} 
    phonebookServices
    .createPerson(personObj)
    .then(returnedPerson =>
      setPersons(persons.concat(returnedPerson))).then(p=>{
        setNewName('')
        setNumber('')
      })
      .then(()=>{
        setMsg([{id:1, type: 'success' , message: `New  contact ${newName} is added to phonebook`}])
        setTimeout(()=>{
        setMsg(null)}, 5000)
      })
     
   
    }
  }

  const deleteSelectedPerson = (person)=>{
      //console.log('iam clicked')
      if( window.confirm(`Delete ${person.name}?`)){
        phonebookServices.deletePerson(person.id)
        .then(p=>{
          setPersons(persons.filter(leftPerson=>leftPerson.id !== person.id))
        }).catch(err =>{
          setMsg([{ id:1, type: 'error' , message: `Infomation about ${person.name} is already removed from server` }])
          setPersons(persons.filter(leftPerson=>leftPerson.id !== person.id))
          console.log(err)
          setTimeout(()=>{
            setMsg(null)},5000)
        })
      }
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
  
  //Filter person with user input
  const filteredPerson= persons.filter(person =>
    person.name.toLowerCase().includes(filter));
    //console.log(filteredPerson);

 

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
      <Persons personLists = {filteredPerson} deletePerson= {deleteSelectedPerson}/>
      <Message msg= {msg} />
    
     
    </div>
  )
}

export default App
