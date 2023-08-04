import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor(){
    let authorLink = "https://cookingfromheart.com/vegetable-momos-street-food-special-veg-momos/";
    let authorPhoto = "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2018/01/Cooking-From-Heart_trans.png?w=419&ssl=1";
    let authorName = "Ramya";
 
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Vegetable Momos" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Veg Momos | Dim Sum Recipe</a> 
           </div>
        </div>
     );
}

 class RecipeDescription extends React.Component{
   render(){
      return(
            <div> 
               <div>
                  <h1>Vegetable Momos</h1>
                  <p>Veg Momos are steamed or fried flour dumplings stuffed with stir fried vegetables</p>
               </div>
            <RecipeAuthor />
         </div>
       );
   }
}

export default RecipeDescription;
