import { useState } from "react";
import { validate } from "./Validations";
export default function Form() {
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
    setErrors(validate({ ...UserData, [key]: value }));
  };

  const handleSubmit = function (evento) {
    evento.preventDefault();
    if (Object.values(errors).length == 0) {
      alert("Datos completos");
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
      <div>
        <form onSubmit={handleSubmit}>
          <label for="">Username</label>
          <input
            name="user"
            type="text"
            value={UserData.user}
            onChange={handleChange}
          />
          <p className="danger">{errors.user}</p>
          <label for="">Password</label>
          <input
            name="password"
            type="text"
            value={UserData.password}
            onChange={handleChange}
          />
          <p className="danger">{errors.password}</p>
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
}
