import React,{useState} from 'react';
import Header from "./components/hedear";
import Addbox from "./components/Addbox"
import Note from "./components/note";
import Footer from "./components/footer";



function App (){
  
  const [note,setNote]=useState([]);

  function addItems(items){
    setNote((prevValue)=> [...prevValue,items]);
  }

  return(
    <div>
<Header />

<Addbox add={addItems} />

<div className="notes">
  {
  note.map((item,index) => <Note text={item} key={index}/> )
  }
</div>

<Footer />
    </div>

  );
}

export default App; 

 

