import PostDisplay from "./PostDisplay";

const DisplayEntries = (props) => {
    return ( 
        <section>
            <div>
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