import React, { useContext, useState } from 'react';
import "./Login.css"
import {AuthContext} from "../../context/AuthContext"
import axios from "axios";
const Login = () => {
    const {user,loading,error,dispatch}=useContext(AuthContext)
    const [credential,setCredential]=useState({
        username:undefined,
        password:undefined,
    })
    const handleChange=(e)=>{
        setCredential((prev)=>({...prev,[e.target.id]:e.target.value}) )
    }
    const handleLogin=async e=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res=await axios.post('/auth/login',credential);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
        }
    }
    console.log(credential);
    return (
        <div className='login-container'>
            <div className='login'>
                <h2>Login Page</h2>
                <label><b>User Name</b> </label> 
                <input type="text" name="username" id="username" onChange={handleChange}/>
                <br/><br/>    
                <label><b>Password </b></label> 
                <input type="password" name="password" id="password" onChange={handleChange}/>
                <br/><br/> 
                <input type="button" onClick={handleLogin} value="Login" className='lbutton'/>
                {error && <span> {error.messege}</span>}
            </div>
        </div>
    );
};

export default Login;