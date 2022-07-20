// import styles from '../styles/pages/_signin.module.scss';
export default function Signin() {
  return (
    <div className="signpage">
      <div className="signpage__container">
        <div className="signpage__container__firsthalf">
          <p> ACSSTANT </p>
        </div>
        <div className="signpage__container__secondhalf">
          <div className="signpage__secondhalf__container">
            <h3>Developer Log In</h3>
            <div className="signpage__secondhalf__links">
              <p>Don't Have an Account?</p>
              <button>
                CREATE AN ACCOUNT
              </button>
            </div>
            <div className="signpage__secondhalf__input">
              <input placeholder='Email Address'/>
              <input placeholder='Password'/>
            </div>
            <div className="signpage__secondhalf__buttons">
              <button className="signpage__regularButton">
                Sign in
              </button>
              <button>
                Sign-in with Gmail
              </button>
            </div>
            <p>Forgot your Password</p>
          </div>
        </div>
      </div>
    </div>
  )
}
