import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const Cumpleaños = ({ pagina }) => {
  //Estados
  const [funcionarios, setFuncionarios] = useState([]);
  const [errores, setErrores] = useState("");

  //Efectos
  useEffect(() => {
    conseguirFuncinarios(pagina);
  }, [pagina]);

  //Métodos
  const conseguirFuncinarios = async (pagina) => {
    let url = `https://reqres.in/api/users?page=${pagina}`;

    try {
      const PETICION = await fetch(url);
      const { data } = await PETICION.json();
      setFuncionarios(data);
      setErrores("");
    } catch (err) {
      setErrores(`Error en la petición de funcionarios`);
    }
  };

  if (errores !== "") {
    return (
      <div className=" container row justify-content-around align-items-center mt-4 mb-4">
        <h3 className="text-center">Cumpleaños del mes</h3>
        <p className="fs-4 fw-bold text-center error-mensaje">
          {" "}
          No se han podido cargar los cumpleaños {errores}
        </p>
      </div>
    );
  } else if (errores === "") {
    return (
      <div className=" container row justify-content-around align-items-center mt-4 mb-4">
        <h3 className="text-center">Cumpleaños del mes</h3>

        {funcionarios.map((empleado, i) => {
          return (
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12  me-5 row justify-content-center aling-items-center" key={i} >
              <div>
                <Card
                  style={{ width: "14rem" }}
                  className="card"
                  border="light"
                >
                  <div>
                    <Card.Img src={empleado.avatar} />
                  </div>
                  
                  <div className="ms-1 card-body">
                    
                  <Card.Body>
                    <Card.Header className="text-center fw-bold bg text-light">
                      {empleado.first_name} {empleado.last_name}
                    </Card.Header>
                    <ListGroup className="text-dark fw-bold list" border="light">
                      <ListGroup.Item>Edad: </ListGroup.Item>
                      <ListGroup.Item>Fecha:</ListGroup.Item>
                      <ListGroup.Item>Sector: Desarrollo</ListGroup.Item>
                      <ListGroup.Item>Cargo:</ListGroup.Item>
      
                    </ListGroup>
                  </Card.Body>
                  </div>

                </Card>
              </div>
             
            </div>
          );
        })}
      </div>
    );
  }
};
