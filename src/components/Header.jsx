import React from "react";

export const Header = () => {
  return (
    <>
      <header className="index">
        <nav>
          <ul className="menu">
            <li>
              <a href="#INICIO">INICIO</a>
            </li>
            <li>
              <a href="html/productos.html">PRODUCTOS</a>
            </li>
            <li>
              <a href="html/galeria.html">GALERIA</a>
            </li>
            <li>
              <a href="html/quienes-somos.html">QUIENES-SOMOS</a>
            </li>
            <li>
              <a href="html/contacto.html">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
