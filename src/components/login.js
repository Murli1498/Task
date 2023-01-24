import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Login = () =>{
    let[email,setEmail] = useState('')
    let[password,setPassword]=useState('')

    let navigate = useNavigate()

    let handleSubmit = () => {
        if((email === "123@gmail.com") && (password ==="1234")){
        navigate("/home")
        }else{
            alert("Invalid")
        }
    }
    return(
        <section className="Login">
            <div className="card">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Mail-Id</label>
                    <br />
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
                    <label htmlFor="">Password</label><br />
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br /><br />
                     <button id="btn1">Submit</button>
                    <br />
                </form>
            </div>
        </section>
    )
}
export default Login;