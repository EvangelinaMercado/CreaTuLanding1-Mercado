import React from "react";

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
              src="./imagenes/arcoiris5.jpeg"
              className="card-img-top"
              alt="Mesa Dulce ArcoIris"
            />
            <div className="card-body">
              <h6>Mesa Dulce Arco Iris</h6>
            </div>
          </div>
          <div className="card" aria-hidden="true">
            <img
              src="./imagenes/deco-osito.jpg"
              class="card-img-top"
              alt="Mesa Dulce Oso Panda"
            />
            <div class="card-body">
              <h6>Mesa Dulce Osito Panda</h6>
            </div>
          </div>
          <div class="card" aria-hidden="true">
            <img
              src="./imagenes/cupcakerosa.jpeg"
              class="card-img-top"
              alt="Cupcakes con deco shabby"
            />
            <div class="card-body">
              <h6>Cupcakes ShabbyChic</h6>
            </div>
          </div>
          <div class="card" aria-hidden="true">
            <img
              src="./imagenes/plim-plim.jpg"
              class="card-img-top"
              alt="Torta Plim Plim"
            />
            <div class="card-body">
              <h6>Torta Plim Plim</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
