import { useState } from "react";
import "./App.css";

function App() {
  const [isRegister, setIsRegister] = useState(false); // Cambiar entre login / registro
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  // Manejar cambios en formulario de login
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Manejar cambios en formulario de registro
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Enviar login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Inicio de sesión:\n" + JSON.stringify(loginData, null, 2));
  };

  // Enviar registro
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert("Usuario registrado:\n" + JSON.stringify(registerData, null, 2));
  };

  return (
    <div style={styles.container}>
      {!isRegister ? (
        /* ---------------- PANTALLA DE INICIO DE SESIÓN ---------------- */
        <div style={styles.card}>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLoginSubmit} style={styles.form}>
            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit">Iniciar Sesión</button>
          </form>

          <p>
            ¿No tienes cuenta?{" "}
            <span style={styles.link} onClick={() => setIsRegister(true)}>
              Regístrate aquí
            </span>
          </p>
        </div>
      ) : (
        /* ---------------- PANTALLA DE REGISTRO ---------------- */
        <div style={styles.card}>
          <h2>Registro</h2>
          <form onSubmit={handleRegisterSubmit} style={styles.form}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={registerData.nombre}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />

            <button type="submit">Registrarse</button>
          </form>

          <p>
            ¿Ya tienes cuenta?{" "}
            <span style={styles.link} onClick={() => setIsRegister(false)}>
              Inicia sesión
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f0f0",
    fontFamily: "Arial",
  },
  card: {
    width: "350px",
    padding: "25px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
  },
};

export default App;


