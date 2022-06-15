import SocialButtonDislike from '../SocialButton/SocialButtonDislike';
import SocialButtonLike from '../SocialButton/SocialButtonLike';
import './PostDisplay.css';

const PostDisplay = (props) => {

    return ( 
        <div>
            <div className='name-format'>
                <p>{props.parentImport.name}</p>
            </div>
            <div className='post-style'>
                <p>{props.parentImport.post}</p>
            </div>
            <div className='icon-format'>
                <SocialButtonLike />
                {/* <button className="fa-solid fa-thumbs-up">{props.parentImport.isLike ? <SocialButtonLike /> : null}</button> */}
                <SocialButtonDislike />
                {/* <button className='fa-solid fa-thumbs-down'></button>{props.parentImport.isDislike ? <SocialButtonDislike /> : null} */}
            </div>
            <hr></hr>
        </div>
     );
}
 
export default PostDisplay;