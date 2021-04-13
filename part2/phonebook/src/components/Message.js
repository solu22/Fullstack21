import React from 'react'

const Message = ({msg}) => {
    if(msg === null){
        return null
    }
    return (
        <div>
            {msg.map( m => <div key ={m.id} className={m.type}>{m.message}</div>)}
        </div>
    )
}

export default Message
