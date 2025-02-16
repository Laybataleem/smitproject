import React, { useState} from "react";
import "../App.css"
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import MainPage from './MainPage';
import axios from "axios";
const Signup = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [contact, setcontact] = useState('')

    const handleSubmit = async (e) => {
        console.log(Name, email, password)
        e.preventDefault();
        try {
const SendData = {username:Name,contact_no:contact,email:email,password:password}

            console.log('Signed in successfully');
            console.log(SendData);
            axios.post('http://localhost:8000/signup',SendData)  
            .then(function (RES){ 
                console.log(RES);
            })
            .catch(function (error) {
                
                // handle error
                console.log(error);
              })
        } catch (error) {
            console.log(error.response.data.error);
        }
        setEmail('');
        setpassword('');
        setName('');
        setcontact('');
    };
    return (
        <>
<div>
<MainPage/>

        <div className=" signup-outer">

         <div className='main-2'>
        <h1 style={{textAlign:"center"}}>Sign up </h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text"
                        placeholder="username"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    <FaRegUserCircle className="icon" />
                </div>
                <div className="input-group">
                    <input type="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required />
                    <RiLockPasswordFill className="icon" />
                </div>
                <div className="input-group">
                    <input type="contact"
                        placeholder="Enter your contact-no"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                        required />
                    <MdOutlineWifiCalling3 className="icon" />
                </div>
                <div className="input-group">
                    <input type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    < MdMarkEmailRead className="icon" />
                </div>
                <button type="submit">Signup</button>
                {/* <Link href="/login" variant="body2">
                {"Already have an account?Log in"}
              </Link> */}
            </form >
        </div>
        </div>


        </div>
</>

    )
}
export default Signup;