import React from "react";
import img2 from "./imagenes/arcoiris5.jpeg"
import img3 from "./imagenes/deco-osito.jpg"
import img4 from "./imagenes/cupcakerosa.jpeg"
import img5 from "./imagenes/plim-plim.jpg"
export const Galeria = () => {
  return (
    <>
      <section id="GALERIA">
        <nav>
          <ul>
            <li>
              <a href="html/galeria.html">
                <h2>NUESTROS TRABAJOS</h2>
              </a>
            </li>
          </ul>
        </nav>
        <p>
          Preparamos Mesas Dulces con mucho cariño y detalle para que siempre
          recuerdes ese dia especial
        </p>
        <div className="card-imagenes">
          <div className="card" aria-hidden="true">
            <img
              src={img2}
              className="card-img-top"
              alt="Mesa Dulce ArcoIris"
            />
            <div className="card-body">
              <h6>Mesa Dulce Arco Iris</h6>
            </div>
          </div>
          <div className="card" aria-hidden="true">
            <img
              src={img3}
              className="card-img-top"
              alt="Mesa Dulce Oso Panda"
            />
            <div className="card-body">
              <h6>Mesa Dulce Osito Panda</h6>
            </div>
          </div>
          <div className="card" aria-hidden="true">
            <img
              src={img4}
              className="card-img-top"
              alt="Cupcakes con deco shabby"
            />
            <div className="card-body">
              <h6>Cupcakes ShabbyChic</h6>
            </div>
          </div>
          <div className="card" aria-hidden="true">
            <img
              src={img5}
              className="card-img-top"
              alt="Torta Plim Plim"
            />
            <div className="card-body">
              <h6>Torta Plim Plim</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
