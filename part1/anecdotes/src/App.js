import React, { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App =() =>{
  const[selected, setSelected]= useState(0);
  const[vote, setVotes]= useState([0,0,0,0,0,0]);

 

  const handleClick =()=>{
    const rand_index= Math.floor(Math.random() * anecdotes.length);
    setSelected(rand_index);
  }
  
  const setVote =()=>{
    const copy= [...vote];
    copy[selected] +=1;
    setVotes(copy);

  }
  
  const max= Math.max(...vote);
  const max_index= vote.indexOf(max);

  return(
    <div>
      {anecdotes[selected]} has {vote[selected]} votes<br/>
      <button onClick={setVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <p>Anecdotes with most votes</p>
      {anecdotes[max_index]} has {vote[max_index]} votes

    </div>
  )
}

export default App;
