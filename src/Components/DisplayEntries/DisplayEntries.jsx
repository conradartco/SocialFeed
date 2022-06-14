
const DisplayEntries = (props) => {
    return ( 
        <section>
            <div>
            {props.parentEntries.map((entry) => {
                return (
                    <div>
                        <div>
                            <p>{entry.name}</p>
                        </div>
                        <div>
                            <p>{entry.post}</p>
                        </div>
                        <div>
                            <p>{entry.date}</p>
                        </div>
                    </div>
                );
            })}
            </div>
       </section>
     );
}
 
export default DisplayEntries;