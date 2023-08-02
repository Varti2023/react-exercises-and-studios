import classes from './HobbyLinks.module.css';
export default function HobbyLinks () {
    let pageTitle = "My Hobbies";
    let url1="https://www.pinterest.com/kitskorner/art-doodles-mandalas/";
    let url2="https://www.thesprucecrafts.com/how-to-crochet-for-beginners-979092";
    let url3="https://hebbarskitchen.com/";

    const hobbyLinks = [url1,url2,url3];
    return(
        <div className = {classes.hobbyLinksBorder}>
            <h3 className= {classes.hobbyLinksHeading}>{pageTitle}</h3>
            <a href  = {hobbyLinks[0]}>Doodle Art</a><br></br>
            <a href = {hobbyLinks[1]}>Chrochet</a><br></br>
            <a href = {hobbyLinks[2]}>Cooking</a>
        </div>
    );
}