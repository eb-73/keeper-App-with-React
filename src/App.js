import React from 'react';
import Header from "./components/hedear";
import Note from "./components/note";
import Footer from "./components/footer";
import notes from "./notes";

function App (){
  return(
    <div>
<Header/>

<div className="notes">
  {
  notes.map(x => <Note note={x} key={x.key}/> )
  }
</div>

<Footer />
    </div>

  );
}

export default App; 

 

