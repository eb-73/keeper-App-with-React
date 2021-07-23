import React from "react";

function Note(props){
    
    return(
        <div className="note">
            <h1>{props.text.title}</h1>
            <p>{props.text.content}</p>
            <h5 onClick={()=> props.delete(props.id)}>DELETE</h5>
        </div>
        
    );
}

export default Note;