import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignInPage() {
    const navigate = useNavigate();
    const [userCredentials, setUserCredentials] = useState(() => {
        // Lazy initialize user credentials
        return {
            username: "",
            password: "",
        };
    });
    const [displayMsg, setDisplayMsg] = useState(() => {
        return { msg: "", color: "red" }
    });

    async function handleSubmit(event) {
        event.preventDefault();
        // console.log(userCredentials);
        if (userCredentials.username === "") {
            setDisplayMsg({ msg: "Please enter a username", color: "red" });
            setTimeout(() => {
                setDisplayMsg({ msg: "", color: "red" })
            }, 1200);
            return;
        } else if (userCredentials.password === "") {
            setDisplayMsg({ msg: "Please enter a password", color: "red" });
            setTimeout(() => {
                setDisplayMsg({ msg: "", color: "red" })
            }, 1200);
            return;
        }

        try {
            const response = await axios.post("https://dummyjson.com/auth/login", {
                username: userCredentials.username,
                password: userCredentials.password,
            });
            console.log(response.data);
            if (response.status === 200) {
                localStorage.setItem("user_obj", JSON.stringify(response.data));
                setDisplayMsg({ msg: "Login Successful", color: "green" });
                setTimeout(() => {
                    setDisplayMsg({ ...displayMsg, msg: "" })
                    // navigate to profile page
                    navigate("/profilePage");
                }, 700);
                setUserCredentials({ username: "", password: "", })
            }
        } catch (err) {
            console.log(err.response.data.message);
            setDisplayMsg({ msg: err.response.data.message, color: "red" });
            setTimeout(() => {
                setDisplayMsg({ ...displayMsg, msg: "" })

            }, 2500);
        }
        // // fetch way to get user credentials
        // fetch("https://dummyjson.com/auth/login", {
        //   method : "POST",
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     username: userCredentials.username,
        //     password: userCredentials.password,
        //   })
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))

        // Axios way to get user credentials
    }

    return (
        <section className="signIn-container">
            <h5>Welcome back! 👋</h5>
            <h1>Log in to your account</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="email">Your Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        onChange={(e) =>
                            setUserCredentials({
                                ...userCredentials,
                                username: e.target.value.trim(),
                            })
                        }
                        value={userCredentials.username}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="password">Your Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={(e) =>
                            setUserCredentials({
                                ...userCredentials,
                                password: e.target.value.trim(),
                            })
                        }
                        value={userCredentials.password}
                    />
                </div>
                <p className="msgDisplay" style={{ content: "", color: displayMsg.color, visibility: displayMsg.msg === "" ? "hidden" : "visible" }}>
                    {displayMsg.msg}
                </p>
                <button type="submit">Continue</button>
            </form>
            <a href="/">
                <h4>Forgot your password?</h4>
            </a>
        </section>
    );
}

export default SignInPage;