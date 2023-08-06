import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


const listItems = oceans.map(ocean => 
   <div key = {ocean.id} className={`${ocean.fishCheck === "true"? "isAFish":"profile"}`} ><img src={ocean.image} alt={ocean.name} className="img" />
   <h2>{ocean.name}</h2>
   <h4>Fun Facts</h4>
   <ol>
      <li key={ocean.id}>{ocean.fact1}</li>
      <li key={ocean.id}>{ocean.fact2}</li>
      <li key={ocean.id}>{ocean.fact3}</li>
   </ol>
   <Button />
   </div>
  
   );

function Profile()
{
   return(
     <ul>
          {listItems}
    </ul>
      
   );
}

export default Profile;