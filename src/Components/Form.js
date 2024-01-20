// import React, { useState } from "react";
// import Profile from "./Profile";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// const Form = () => {
//   let [username, setUsername] = useState("");
//   let [password, setPassword] = useState("");

//   let [credentials, setCredentials] = useState({});

//   if (!credentials.messagage) {
//   }

//   function handleForm(e) {
//     e.preventDefault();
//     fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         setCredentials(res);
//       });
//   }

//   return (
//     <div className="outer">
//       <div className="form">
//         <form onSubmit={handleForm}>
//           <div>
//             <p>Welcome back! 👋</p>
//             <h1>Sign in to your account</h1>
//           </div>
//           <div>
//             <label htmlFor="email">Your Email</label>
//             <input
//               onChange={(e) => setUsername(e.target.value)}
//               type="text"
//               name="email"
//               id="email"
//               value={username}
//             />

//             <label htmlFor="password">Password</label>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               name="password"
//               id="password"
//               value={password}
//             />

//             <button>Continue</button>

//             <a href="/">Forget your password?</a>
//           </div>
//         </form>
//       </div>
//       <h4>
//         Don’t have an account? <a href="/">Sign up</a>
//       </h4>
//     </div>
//   );
// };

// export default Form;
