import styles from './Ingredients.module.css';
export default function RecipeIngredients(){
    const ingredients = ['1 cup All purpose Flour','2 tbsp Oil','1/2 cup Cabbage finely chopped','2 tbsp Green Bell Pepper finely chopped','1 Carrot finely chopped','1 tsp Soya Sauce','1 tbsp Tomato Chili Sauce'];
    return(
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
           <li>{ingredients[5]}</li>
           <li>{ingredients[6]}</li>
        </ul>
     </div>
    );
}