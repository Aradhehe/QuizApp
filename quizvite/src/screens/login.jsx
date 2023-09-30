import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    
      
    const [username, Setusername] = useState('')
    const [password, SetPassword] = useState("")
    const  containsSpecialChars = (str) =>  {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
      }
    const handleSubmit = (task) => {
        // task.preventdefault();
        
        if (password.length < 3) {
            alert(`The password is too short :${password}`)
        }
          else if(password.length>10){
          alert(`The password is too long :${password}`)
          }
          else if(!containsSpecialChars(password)){
            alert(`The password is not having any special characters ${password}`)
          }
         else {
            console.log("ok pas is ok");
            ttscreen()
         } 
    }
            
    const ttscreen = ()=>{
        navigate('/Mainscreen');
        }


    return (
        <>
        <h1 id="log">Login</h1>
            <form id="frm1" onSubmit={handleSubmit}>
                <label>
                    Enter your username :
                    <input
                        type="text"
                        value={username}
                        onChange={(h) => Setusername(h.target.value)}
                        required
                    />
                    <br></br>
                    <label>Enter your password  :</label>
                    <input
                        type="text"
                        value={password}
                        onChange={(f) => SetPassword(f.target.value)}
                    />
                    <label>
                        <br></br>
                        <input type="submit"  onSubmit={handleSubmit}/>
                    </label>
                </label>
            </form>
        </>
    )
}
export default Login