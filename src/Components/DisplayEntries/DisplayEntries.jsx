
const DisplayEntries = (props) => {
    return ( 
        <div>
            {props.parentEntries.map((entry) => {
                return (
                <form>
                    <label>Name</label>
                    <input value={entry.name}/>
                    <label>Post</label>
                    <input value={entry.post}/>
                    <label>Date</label>
                    <input value={entry.date}/>
                </form>
                )
            })}
       </div>
     );
}
 
export default DisplayEntries;