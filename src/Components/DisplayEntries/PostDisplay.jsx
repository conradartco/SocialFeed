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
                <button>Like</button>
                <button>Dislike</button>
            </div>
            <hr></hr>
        </div>
     );
}
 
export default PostDisplay;