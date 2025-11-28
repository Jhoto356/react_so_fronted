import { useState } from "react";
import "./App.css";

function App() {
  const productos = [
    { id: 1, nombre: "Producto A", precio: 10 },
    { id: 2, nombre: "Producto B", precio: 15 },
    { id: 3, nombre: "Producto C", precio: 20 },
  ];

  const [carrito, setCarrito] = useState({});

  // Agregar producto
  const agregar = (id) => {
    setCarrito({
      ...carrito,
      [id]: (carrito[id] || 0) + 1,
    });
  };

  // Quitar producto
  const quitar = (id) => {
    if (!carrito[id]) return;
    const nuevo = { ...carrito };
    nuevo[id]--;
    if (nuevo[id] <= 0) delete nuevo[id];
    setCarrito(nuevo);
  };

  // Total del carrito
  const totalCarrito = Object.values(carrito).reduce((a, b) => a + b, 0);

  return (
    <div className="dashboard-container">
      {/* --- BARRA SUPERIOR --- */}
      <div className="topbar">
        <h2>Dashboard</h2>
        <div className="carrito-icon">
          🛒 <span className="carrito-count">{totalCarrito}</span>
        </div>
      </div>

      {/* --- LISTA DE PRODUCTOS --- */}
      <div className="productos-grid">
        {productos.map((item) => (
          <div key={item.id} className="producto-card">
            <h3>{item.nombre}</h3>
            <p>${item.precio}</p>

            <div className="botones">
              <button onClick={() => quitar(item.id)}>-</button>
              <span>{carrito[item.id] || 0}</span>
              <button onClick={() => agregar(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
