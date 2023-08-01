import styles from './ChoresList.module.css';
export default function ChoresList () {
   
   const chore = ["Cleaning Rooms","Preparing Dinner","Gardening"];
   return (
      <div>
       <p className = {styles.choresHeading}>Chores List</p>
         <ol>
            <li className= {styles.choresText}>{chore[0]}</li>
            <li className= {styles.choresText}>{chore[1]}</li>
            <li className= {styles.choresText}>{chore[2]}</li>
         </ol>
   </div>
   );
}