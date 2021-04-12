import React from 'react'

const EachPerson = ({person}) => {
    return (
       
            <li>{person.name}{person.number}
            <button>DELETE</button>
            </li>
        
    )
}

export default EachPerson
