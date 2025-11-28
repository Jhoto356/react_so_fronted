import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    alert("Usuario registrado correctamente");
  };

  return (
    <div style={styles.container}>
      <h1>Registro de Usuario</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ingresa tu email"
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Ingresa tu contraseña"
          required
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default App;

