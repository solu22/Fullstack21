import axios from 'axios'

const baseUrl= ' http://localhost:3001/persons'

const getPerson = () =>{
    return ( axios.get(baseUrl).then(response=> response.data));
}

const createPerson = person =>{
    return (axios.post(baseUrl, person).then(response => response.data))
}

export default {getPerson, createPerson};