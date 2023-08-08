import recipedata from "./recipe.json";
import './styling.css';
function AuthorInfo() {
  const recipeAuthor = recipedata.map((data) => {
     return <div key = {data.name}>{data.author}</div>;
      });

      const recipeAuthorImage = recipedata.map((data) => {
      return (
          <div key={data.name}>
            <img src={data.authorImage} alt={data.author} className="authorImage" />
          </div>
      )});

      const recipeWebsite = recipedata.map((data) => {
      return (
          <div key={data.name}>
            <a href={data.website} target = '_blank'>website</a>
          </div>
      )});
       
      return (
          <div>
              {recipeAuthorImage}
              {recipeAuthor}
              {recipeWebsite}
          </div>
      );
}
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 