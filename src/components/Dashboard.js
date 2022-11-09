import React,{useState}  from 'react'
import Header from './Header';

function Dashboard() {
 
    const [auth,setAuth] = useState(false)
    return (
        <div className="App">
           <Header auth ={auth} setAuth={setAuth}/>
        </div>
    );
  
}

export default Dashboard
