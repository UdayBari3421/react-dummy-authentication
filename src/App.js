import React, { useState } from "react";

const App = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [credentials, setCredentials] = useState({});
  console.log(credentials);

  function handleForm(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCredentials(res);
      });
  }

  function ChangeRoute() {
    console.log(username, password);
    if (username !== "" || password !== "") {
      document.querySelector("#err").innerHTML = "Please feel detail to login";
    }
    if (!credentials.message && username !== "" && password !== "") {
      document.querySelector("#root").innerHTML = `
        <div class="profile">
            <img src="${credentials.image}" alt="${credentials.firstName}" />
            <p>Username : ${credentials.username}</p>
            <p>ID : ${credentials.id}</p>
            <p>Name: ${credentials.firstName + " " + credentials.lastName}</p>
            <p>Email : ${credentials.email}</p>
            <p>Gender : ${credentials.gender}</p>
            <p>Token : ${credentials.token}</p>
        </div>
      `;
    } else {
      if (username.length > 1 || password.length > 1) {
        document.querySelector("#err").innerHTML = credentials.message;
      } else {
        document.querySelector("#err").innerHTML =
          "Please feel detail to login";
      }
    }
  }

  return (
    <div>
      <div className="outer">
        <div className="form">
          <p id="err"></p>
          <form onSubmit={handleForm}>
            <div>
              <p>Welcome back! 👋</p>
              <h1>Sign in to your account</h1>
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="email"
                id="email"
                value={username}
              />

              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                value={password}
              />

              <button onClick={ChangeRoute}>Continue</button>

              <a href="/">Forget your password?</a>
            </div>
          </form>
        </div>
        <h4>
          Don’t have an account? <a href="/">Sign up</a>
        </h4>
      </div>
    </div>
  );
};

export default App;
