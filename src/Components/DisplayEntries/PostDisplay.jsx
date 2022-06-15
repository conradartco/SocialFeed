import './PostDisplay.css';

const PostDisplay = (props) => {

    return ( 
        <div>
            <div className='name-format'>
                <p>{props.parentImport.name}</p>
            </div>
            <div className='post-format'>
                <p>{props.parentImport.post}</p>
            </div>
            <div>
                <div>
                    <button className="fa-solid fa-thumbs-up"></button>{props.parentImport.isLike ? <p>I like this!</p> : null}
                </div>
                <div>
                    <button className='fa-solid fa-thumbs-down'></button>{props.parentImport.isDislike ? <p>I dislike this</p> : null}
                </div>
            </div>
            <hr></hr>
        </div>
     );
}
 
export default PostDisplay;