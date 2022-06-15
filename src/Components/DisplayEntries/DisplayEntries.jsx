import PostDisplay from "./PostDisplay";
import './PostDisplay.css';

const DisplayEntries = (props) => {
    return ( 
        <section>
            <div className='post-format'>
                {props.parentEntries.map((entry) => {
                    return (
                        <PostDisplay key={entry.id} parentImport={entry}/>
                    );
                })}
            </div>
       </section>
     );
}
 
export default DisplayEntries;