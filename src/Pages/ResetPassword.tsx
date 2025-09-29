import React, { useState } from "react";
import "./LoginPage.css"; // external css
export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call your backend API here
    console.log("Email:", email, "Password:", password);
  };

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
              <span className="welcome-heading">New Password</span>
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
                <label>New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  required
                />
                <button type="submit" className="btn-submit">
                  Set New Password
                </button>
              </form>
              <br />
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
