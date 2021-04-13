import React from 'react'

const EachPerson = ({person, deletePerson}) => {
    return (
           
            <li>{person.name}  {person.number} <button onClick = {()=>deletePerson(person)} >DELETE</button>
            </li>
        
    )
}

export default EachPerson
