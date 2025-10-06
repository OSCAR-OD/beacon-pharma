import React, { useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // external css
export default function LoginPage() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [isValid, setIsValid] = useState(false);
   const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log("Email:", email, "Password:", password);
     if (email === "admin@gmail.com" && password === "12345678") {
      setIsValid(true); // trigger redirect in useEffect
    } else {
      alert("Invalid email or password!");
    }
  };

    useEffect(() => {
    if (isValid) {
      navigate("/admin-dashboard"); // redirect after successful login
    }
  }, [isValid, navigate]);

  return (
    <>
      <section className="login" id="home">
        <img
          src="./assets/images/elp.svg"
          alt="Illustration art"
          className="shape shape-3"
        />
        <div className="container">
          <div className="login-content">
            <span className="welcome-login">
              <span className="welcome-heading">Welcome to</span>
              Beacon Patient Care
            </span>
            <br />
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                />
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  required
                />
                <button type="submit" className="btn-submit">
                  LOGIN
                </button>
              </form>
              <br />
              <h5 className="reset-txt" onClick={() => navigate("/reset-password")}>Forget Password? Reset</h5>
            </div>
            <footer>
              <br />
              <p>
                <span className="login-footer">Beacon Patient Care</span> <br />
                 Beacon Pharmaceuticals Limited
              </p>
            </footer>
          </div>
        </div>
      </section>
      {/* <div className="new-password-container"> */}
      {/* <div className="Ellipse-15"></div>
  <div className="Ellipse-16"></div> */}
      {/* <div className="form-card">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit" className="btn-submit">
            LOGIN
          </button>
        </form>
                <h5>Forget Password? Reset</h5>
      </div>
      <footer>
        <p>
          <span className="highlight">Beacon Patient Care</span> <br />
          Beacon Pharmaceuticals Limited
        </p>
      </footer>
    </div> */}
    </>
  );
}
