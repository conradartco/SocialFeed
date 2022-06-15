import React, { useState } from 'react';
import './SocialButton.css'

const SocialButtonDislike = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick() {
        if(buttonClass === "inactive") {
            setButtonClass("active-dislike");
        }
        else {
            setButtonClass("inactive");
        }
    }

    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick}><i className="fa-solid fa-thumbs-down"></i></button>
        </div>
     );
}
 
export default SocialButtonDislike;