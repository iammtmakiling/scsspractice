import styles from '../styles/pages/_signin.module.scss';
export default function Signup() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.firsthalf}>
          <p> ACSSTANT </p>
        </div>
        <div className={styles.secondhalf}>
          <div className={styles.secondhalf__container}>
            <h3>Create Account</h3>
            <div className={styles.secondhalf__links}>
              <p>Already have an account?</p>
              <button>
                Sign in
              </button>
            </div>
            <div className={styles.secondhalf__input}>
              <input placeholder='Last Name'/>
              <div className={styles.secondhalf__input__box}>
                <input placeholder='First Name'/>
                <input placeholder='Middle Name'/>
              </div>
              <div className={styles.secondhalf__input__box}>
                <input placeholder='Batch'/>
                <input placeholder='UP mail'/>
              </div>
              <input placeholder='Password'/>
              <input placeholder='Repeat Password'/>
            </div>
            <div className={styles.secondhalf__buttons}>
              <button className={styles.regularButton}>
                Create Account
              </button>
              <button>
                Sign-up with Gmail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
