import React, { useState } from "react";
import "./LoginPage.css"; // external css
export default function ResetAccount() {
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call your backend API here
    console.log("Email:", email, "mobileNo:", mobileNo);
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
              <span className="welcome-heading">Reset Account</span>
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
                <label>Mobile No.</label>
                <input
                  type="number"
                  value={mobileNo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMobileNo(e.target.value)
                  }
                  required
                />
                <button type="submit" className="btn-submit">
                  Reset Account
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
