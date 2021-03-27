import React from 'react'


const Header =(props)=>{
  return(
    <>
    {props.course} <br/>
    </>  
  )

}

const Content= (props)=>{
  return(
    <>
     {props.content1} {props.exercises1}<br/>
     {props.content2} {props.exercises2}<br/>
     {props.content3} {props.exercises3}
   </>
  )

}

 const Total= (props)=>{
   return(
     <> 
     <p>The total number of exercises:{props.exercises}</p>
     </>
   )

 }

const App= ()=>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
     <Header course= {course} />
     <Content content1={part1} exercises1={exercises1}
              content2={part2} exercises2={exercises2} 
              content3={part3} exercises3={exercises3}
              />
     <Total exercises= {exercises1 + exercises2 + exercises3}/>
     </div>
  )

}

export default App;
