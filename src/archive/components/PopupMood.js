//htps://www.youtube.com/watch?v=i8fAO_zyFAM //
//unused since we used Modal

import React from 'react'
import './PopupMood.css' 


function Popup_Mood(props) {
    return (props.trigger) ? (
        <div className='popup_mood'>
            <div className='popup_inner_mood'>
                <button className='close_button_mood' onClick={() => props.setTrigger(false)}
                >Close</button>
                {props.children}
                </div>
        </div>
        ): "";  //trigger is a boolean, if the trigger is 
        //true the button will show otherwise nothing//
}

export default Popup_Mood;

//Below needs to be entered into the main page Dace.js

//<Popup_Mood trigger = {buttonPopup} setTrigger = {setButtonPopup}>
//<p> Do you feel better?</p>
//</Popup_Mood>  

{/* timed pop up get an error
<Popup_Mood trigger = {timedPopup} setTrigger = {setTimedPopup}>
<p> Do you feel better?</p>
</Popup_Mood>  


    <button onClick={() => setButtonPopup(true)}
    > Open Mood Pop up</button>   

    const [buttonPopup, setButtonPopup] = useState(false);
    const [timedPopup, setTimedPopup] = useState(false);
*/}    

{/*setTimeout(()=> { 
    setTimedPopup(true);
}, 3000); */}