import { useState } from "react";
import { validate } from "./Validations";
import styles from "./Login.module.css";
import logo from "../../Images/RyM_Logo5.png";

export default function Form(props) {
  const { login } = props;
  const [UserData, setUserData] = useState({
    user: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    user: "",
    password: "",
  });

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setUserData({ ...UserData, [key]: value });
    if (event) {
      console.log(event);
      setErrors(validate({ ...UserData, [key]: value }));
    }
  };

  const handleSubmit = function (evento) {
    evento.preventDefault();
    if (Object.values(errors).length === 0) {
      login(UserData);
      setUserData({
        user: "",
        password: "",
      });
      setErrors({
        user: "",
        password: "",
      });
    } else {
      alert("Debes corregir los errores");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <img src={logo} alt="Rick and Morty logo" className={styles.logo} />
          <div className={styles.divusername}>
            <h4 className={styles.guides}>Create your user:</h4>
            <input
              autocomplete="off"
              className={styles.inputs}
              placeholder="Username"
              name="user"
              type="text"
              value={UserData.user}
              onChange={handleChange}
            />
            <p className={styles.danger}>{errors.user}</p>
          </div>
          <div className={styles.divpassword}>
            <h4 className={styles.guides}>Create your password:</h4>
            <input
              autocomplete="off"
              className={styles.inputs}
              placeholder="Password"
              name="password"
              type="text"
              value={UserData.password}
              onChange={handleChange}
            />
            <p className={styles.danger}>{errors.password}</p>
          </div>
          <button type="submit" className={styles.login}>
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
