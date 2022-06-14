import React, { useState } from 'react';
import './AddEntryForm.css';

const AddEntryForm = (props) => {

    const [name, setName] = useState("");
    const [post, setPost] = useState("");
    const [date, setDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post,
            date: date
        }
        props.addNewEntry(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='name' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <div>
                <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Submit</button>
            </div>
        </form>
     );
}
 
export default AddEntryForm;