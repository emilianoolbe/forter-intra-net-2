import React, { useRef, useState } from "react";
import { Carousell } from "./Carousell";
import { Cumpleaños } from "./Cumpleaños";


export const Inicio = () => {

  //Estados
  const [pagina, setPagina] = useState(1);
  
  //Referencias
  const refPagina1 = useRef();
  const refPagina2 = useRef();

  //Métodos
  const cambiarPag = (e) => {
    if (e.target == refPagina2.current) {
      setPagina(2);
    } else if (e.target == refPagina1.current) {
      setPagina(1);
    }
  };

  return (
    <div className="inicio">
      {/* Carousel */}
      <Carousell />

      {/* Datos de funcionarios */}
      <Cumpleaños pagina={pagina}/>

      <div className="botones mt-2 mb-3">
        <button className="ms-2 botenesB" onClick={cambiarPag} ref={refPagina1} > 1 </button>
        <button className="ms-2 botenesB" onClick={cambiarPag} ref={refPagina2} > 2 </button>
      </div>

    </div>
  );
};
