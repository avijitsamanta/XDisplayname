import React,{useState} from "react";
function App() {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [fullName,setFullName] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    if(firstName && lastName){
      setFullName(firstName+" "+lastName)
    }else{
      setFullName("")
    }
    
  }
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <div>
            First Name: <input type="text" name="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
          </div>
          <div>
            Last Name: <input type="text" name="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
          </div>
        </p>
        <button type="submit">Submit</button>
      </form>
      <p>
        {
          fullName!="" ? `Full Name: ${fullName}`:""
        }
        
      </p>
    </div>
  );
}

export default App;
