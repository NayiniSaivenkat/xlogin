import React,{useState} from 'react';
import './App.css';

function App() {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const[error,setError]=useState("");
  const[isSubmitted,setIsSubmitted]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(userName=="user" && password=="password"){
      setIsSubmitted(true)
    }
    else{
      setError("Invalid username or password");
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      {
        isSubmitted?(
          <div>
            <p>Welcome, {userName}!</p>
            </div>
        ):(
          <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <div>
              <label>
                UserName:
              </label> 
              <input required  onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder='username' value={userName}/>
            </div>
            <div>
              <label>
                Password:
              </label> 
              <input required  onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='password' value={password}/>
            </div>
            <button type='submit'>Submit</button>
          </form>
        )
      }
    </div>
  );
}

export default App;
