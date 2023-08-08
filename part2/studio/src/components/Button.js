import "./styling.css";
import SaveButton from './SaveButton.js';
import ClickedButton from './ClickedButton.js';
function Button(props) {
    const saveButton = props.saveButton;
    return (saveButton 
               ? <SaveButton/> : <ClickedButton/>
            );
    
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 