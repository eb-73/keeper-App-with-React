import React, {useState} from "react";

function Addbox(props){
    const [addBoxNote,setAddBox]=useState({title:"",content:""});

    function change(e){
        const name=e.target.name;
        const value=e.target.value;
      setAddBox((prevValue)=>({
        ...prevValue,
        [name]:value
      }));
      }

    return(
        <div className="form">
            <input type="text" name="title" placeholder="Type a title" onChange={change} value={addBoxNote.title}></input>
            <input type="text" name="content" placeholder="Type a note" onChange={change} value={addBoxNote.content}></input>
            <div className="addButton" onClick={()=>  
            { props.add(addBoxNote);
            setAddBox({title:"",content:""})} }>ADD</div>
        </div>
    );
}

export default Addbox;