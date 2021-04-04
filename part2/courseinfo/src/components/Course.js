

const Header = ({ courses }) => {
       return (
           <>
           
         <h1>{courses}</h1>
         </>
       )
       }

       const Content = ({parts}) => {
        return (
          <div>
            {parts.map(part=>
                <Part key ={part.id} name={part.name} exercises= {part.exercises} />)}
          </div>
        )
      }

      const Part =({key, name , exercises})=>{
          return(
              <>
              <p>{key} {name} {exercises}</p>
              </>
          )

      }
      

  const Total =({parts})=>{
      const sum = parts.reduce((total,part)=>
      total + part.exercises,0);
      return <p>Total exercises: {sum}</p>
}
  

  
    

   const Course = ({course})=>{
  
    return(
        <div>
      <Header courses= {course.name} />
      <Content parts= {course.parts} />
      <Total parts = {course.parts} />
      </div>
    )
  
  }

  export default Course;