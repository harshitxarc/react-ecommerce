import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            // Axios error response handling
            const message = error.response?.data?.message || "Login failed";
            alert(message);
        }
    };

    return (
        <>
        <form onSubmit={handleLogin}>
            <div className="Login-container">
                <div id="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">

                    <div className="input">
                        <label className="hello">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <label className="hello">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="forgot-password">
                        Forgot Password? <span><a href="/Signup">Click Here</a></span>
                    </div>
                    <div className="submit-container">
                        <button className="submit" type="submit">Login</button>
                        <Link className="submit toggle" to="/signup">Switch to Sign Up</Link>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
};

export default Login;
