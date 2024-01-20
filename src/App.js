import "./styles/App.css";
import SignInPage from "./Components/SignInPage";
import ProfilePage from "./Components/ProfilePage";
import { Route, Routes } from "react-router-dom";
function App() {
  const msgStyle = {
    color: "#333",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: 400,
    marginTop: "18px"
  }
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SignInPage />
              <h5 style={msgStyle}>
                Don't have an account? <a href="/">Sign Up</a>
              </h5>
            </div>
          }
        />

        <Route path="profilePage" element={<ProfilePage/>} />
      </Routes>
    </div>
  );
}

export default App;