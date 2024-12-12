import React from 'react'
import img1 from "../components/imagenes/celebrate.jpg"

export default function Inicio() {
  return (
    <>
    <section id="INICIO">
      <h1>MERCADO DE ILUSIONES</h1>

      <p className="descripcion">
        DECORACIÓN Y AMBIENTACIÓN DE MESAS DULCES TEMATICAS PARA TU EVENTO
      </p>
      <img className="image2" src={img1} alt="Torta y Bonete" />
    </section>
    </>
  )
}
