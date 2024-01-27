import React,{useState} from "react";
function App() {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [showFullName,setShowFullName] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    if(firstName && lastName){
      setShowFullName(true);
    }else{
      setShowFullName(false);
    }
    
  }
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <div>
            First Name: <input type="text" name="firstname"  onChange={(e)=>setFirstName(e.target.value)} required/>
          </div>
          <div>
            Last Name: <input type="text" name="lastname" onChange={(e)=>setLastName(e.target.value)} required/>
          </div>
        </p>
        <button type="submit">Submit</button>
      </form>
      <p>
        {
          showFullName ? `Full Name: ${firstName} ${lastName}`:""
        }
        
      </p>
    </div>
  );
}

export default App;
