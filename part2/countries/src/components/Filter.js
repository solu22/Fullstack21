import React from 'react'

const Filter = ({onChange, search} ) => {
    return (
        <div>
        find countries:
        <input onChange ={onChange} value= {search} placeholder="enter country name here" />
      </div>
    )
}

export default Filter
