export default function BookList() {
   let pageTitle = "Books Catalogue";
   let book1 = "https://www.beyondthebookends.com/wp-content/uploads/2023/05/The-Six.jpg";
   let book2 = "https://www.beyondthebookends.com/wp-content/uploads/2023/02/The-Little-Village-of-Book-Lovers-.jpg";
   let book3 = "https://www.beyondthebookends.com/wp-content/uploads/2023/04/The-Invisible-Hour.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Invisible Hour" />
         &nbsp; &nbsp;
         <img src={book2} alt="The Little Village of Book Lovers" />
         &nbsp;  &nbsp;   
         <img src={book3} alt="The Six: The Untold Story of the First Women Astronauts" />
      </div>      
   );
}