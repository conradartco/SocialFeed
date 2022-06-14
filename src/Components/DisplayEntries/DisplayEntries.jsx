
const DisplayEntries = (props) => {
    return ( 
        <section>
            {props.parentEntries.map((entry) => {
                return (
                <div>
                    <ul value={entry.name}/>
                    <ul value={entry.post}/>
                    <ul value={entry.date}/>
                </div>
                )
            })}
       </section>
     );
}
 
export default DisplayEntries;