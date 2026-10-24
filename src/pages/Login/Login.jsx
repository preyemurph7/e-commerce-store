import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import "./Login.css";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const isSignup = mode === "signup";

  const switchMode = (newMode) => {
    setMode(newMode);
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsDone(true);
    }, 1000);
  };

  if (isDone) {
    return (
      <div className="auth-container">
        <div className="auth-card auth-message">
          <CheckCircle size={40} color="green" />
          <h2>{isSignup ? "Account created" : "Welcome back"}</h2>
          <p>This is a demo store, so no account was created or saved.</p>
          <Link to="/" className="auth-btn">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${!isSignup ? "current" : ""}`}
            onClick={() => switchMode("login")}
          >
            Log in
          </button>
          <button
            type="button"
            className={`auth-tab ${isSignup ? "current" : ""}`}
            onClick={() => switchMode("signup")}
          >
            Create account
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && <input type="text" placeholder="Full name *" required />}
          <input type="email" placeholder="Email address *" required />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {isSignup && (
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password *"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn" disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : isSignup ? "Create account" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;