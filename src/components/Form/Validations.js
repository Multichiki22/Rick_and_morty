const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*))/

export function validate(inputs) {
    const errors = {};
    if (!regexEmail.test(inputs.user)) errors.user = "Debe ser un correo electrónico";
    if (!inputs.user.length) errors.user = "No debe estar vacio";
    if (inputs.user.length>36) errors.user = "No puede tener más de 35 caracteres.";
    if (!regexPassword.test(inputs.password)) errors.password = "La contraseña debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial";
    if (inputs.password.length<6) errors.password = "La contraseña debe terner minimo 6 caracteres"
    if (inputs.password.length>15) errors.password = "La contraseña debe terner maximo 15 caracteres"
    return errors;
  }