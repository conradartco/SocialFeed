import React, { useState } from 'react';
import './SocialButton.css'

const SocialButtonLike = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick() {
        if(buttonClass === "inactive") {
            setButtonClass("active-like");
        }
        else {
            setButtonClass("inactive");
        }
    }

    return ( 
        <div className='button-format'>
            <button className={buttonClass} onClick={handleClick}><i className="fa-solid fa-thumbs-up"></i></button>
        </div>
     );
}
 
export default SocialButtonLike;