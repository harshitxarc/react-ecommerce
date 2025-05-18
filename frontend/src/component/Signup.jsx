import { useState } from "react";
import { signup } from "../services/authService";
import { Link, useParams } from "react-router-dom";
import './Signup.css';

const Signup = () => {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    
    const {id}=useParams();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(form);
            alert("User registered successfully!");
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="Signup-container">
                <div id="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <label className="hello">Username</label>
                        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                    </div>

                    <div className="input">
                        <label className="hello">Email</label>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={id?id:form.email}/>
                    </div>

                    <div className="input">
                        <label className="hello">Password</label>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    <div className="submit-container">
                    <button className="submit" type="submit">Signup</button>

                    <Link className="submit toggle" to="/login">Switch to Login</Link>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
};

export default Signup;
