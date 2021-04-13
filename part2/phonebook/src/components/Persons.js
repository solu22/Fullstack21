import React from 'react'
import EachPerson from './EachPerson'

const Persons =({personLists, deletePerson})=>{
    return(
        <ul>
            {personLists.map(person =>
                <EachPerson key ={person.id} person ={person} deletePerson= {deletePerson} />)}
        </ul>
        
    )
}

export default Persons;