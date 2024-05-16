import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { logUserIn,logOrganizationIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import "../Login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isOrganization, setIsOrganization] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    const formData = new FormData(event.target);
    const [user, error] = isOrganization
      ? await logOrganizationIn(Object.fromEntries(formData))
      : await logUserIn(Object.fromEntries(formData));
    if (error) return setErrorText(error.message);
    setCurrentUser(user);
    navigate("/");
  };

  if (currentUser !== null) return <Navigate to="/" />;

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <h1 className="title has-text-centered">PEAR NYC</h1>
              <div className="box">
                <h2 className="subtitle has-text-centered">Login</h2>
                <div className="buttons is-centered">
                  <button
                    className={`button ${!isOrganization ? "is-user" : ""}`}
                    onClick={() => setIsOrganization(false)}
                  >
                    User
                  </button>
                  <button
                    className={`button ${isOrganization ? "is-organization" : ""}`}
                    onClick={() => setIsOrganization(true)}
                  >
                    Organization
                  </button>
                </div>
                <form onSubmit={handleSubmit} aria-labelledby="login-heading">
                  <div className="field">
                    <label htmlFor="username" className="label">
                      {isOrganization ? "Organization Name" : "Username"}
                    </label>
                    <div className="control">
                      <input
                        type="text"
                        autoComplete="username"
                        id="username"
                        name="username"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <div className="control">
                      <input
                        type="password"
                        autoComplete="current-password"
                        id="password"
                        name="password"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary is-fullwidth">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                {!!errorText && <p className="has-text-danger">{errorText}</p>}
                <p className="has-text-centered">
                  New? <a href="/signup">Sign up today!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}