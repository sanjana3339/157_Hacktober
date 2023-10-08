import React, {useState,setState} from 'react';
import './logincss.css'
import { Link } from 'react-router-dom';
function LoginForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    return(
        <>
        <h1 id="heading">LOGIN PAGE</h1>
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email </label><br/>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label><br/>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            
            
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link to={'/organdonationform'}>
                <button className="btn btn-primary" onClick={handleSubmit()} type="submit">Login</button>
                </Link>
                
            </div>
            
            <p align="right">Dont have an account? <a href="/registration">Register</a></p>
        </div>
        </>
       
    )       
}

export default LoginForm
