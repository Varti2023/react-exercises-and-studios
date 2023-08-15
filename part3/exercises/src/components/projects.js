import data from "../data.json";

import {useState} from "react";

export default function MyProjects(){
    const [index, setIndex] = useState(0);
    
    const projects = [...new Set(data.projects)]
    const list = projects.map((project,index) => {
      return(
      <div>
      <h2>Project - {project.name}</h2>
      <p>Designer -{project.designer}</p>
      <img src= {project.photoUrl} alt={project.alt} width="30%"></img>
   </div>
   
   )})
         function handleClick() {
            if (index < data.projects.length-1)
            {
               setIndex(index + 1);
            }
            else 
            {
               setIndex(0);
            }
            }
  
    return(
      <div className="div">
         <button onClick={handleClick}>Next</button>
         {list[index]}
      </div>
    );
   
}
      