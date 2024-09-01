import React, {useState} from 'react';
import "../CSS-Styles/Login.css";

// here I added state variables in the function
function Login(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    return (
            <div className="login-container">
                <div className='form'>
                    <form> 
                        <h3>Login</h3>
                        <input type="text" placeholder="Username"  onChange={(e) => setUserName(e.target.value)} /> <br></br><br></br>
                        <input type="password"  placeholder="Password"  onChange={(e) => setPassword(e.target.value)} /> <br></br><br></br>
                        <input id="submit" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        )
    
}

export default Login;