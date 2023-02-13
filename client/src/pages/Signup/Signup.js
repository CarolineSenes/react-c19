import styles from './Signup.module.scss';

function Signup() {
  return (
    <div className="flex-fill d-flex align-items-center justify-content-center">
      <form className={`${styles.form} d-flex flex-column card p-20`}>
        <h2>Inscription</h2>
        <div className="mb-10 d-flex flex-column">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="mb-10 d-flex flex-column">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="mb-10 d-flex flex-column">
          <label htmlFor="password">Mot de passe</label>
          <input type="text" name="password" />
        </div>
        <button className="btn btn-primary">Inscription</button>
      </form>
    </div>
  );
}

export default Signup;
