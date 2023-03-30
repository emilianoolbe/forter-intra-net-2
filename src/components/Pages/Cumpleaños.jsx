import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const Cumpleaños = ({pagina}) => {
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
      setErrores('');

    } catch (err) {
      setErrores(`Error en la petición de funcionarios`);
    }
  };

  if (errores !== '') {
    return(
      <div className=" container row justify-content-around align-items-center mt-4 mb-4">
        <h3 className="text-center">Cumpleaños del mes</h3>
         <p className="fs-4 fw-bold text-center error-mensaje"> No se han podido cargar los cumpleaños {errores}</p>
      </div>
    )

  }else if(errores === ''){
    return (
      <div className=" container row justify-content-around align-items-center mt-4 mb-4">
        <h3 className="text-center">Cumpleaños del mes</h3>
  
        {funcionarios.map((empleado, i) => {
          return (
            <div className="col-md-4 col-sm-12  me-5 row justify-content-center aling-items-center" key={i}>
              <div className="col-4 w-40  align-self-center">
              <Card  className="card- m-2 bg-dark text-white" border="light">
                <Card.Img src={empleado.avatar} />
              </Card>
              </div>
              <div className="col-8">

              <Card style={{ width: "14rem" }} className="card- m-2 bg-dark text-white " border="light">
          
                  <Card.Body clas>
                    <Card.Header className="text-center fw-bold">
                      {empleado.first_name} {empleado.last_name}{" "}
                    </Card.Header>
                    <ListGroup >
                      <ListGroup.Item className="bg-dark text-white">Edad: </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white">Fecha:</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white">Sector: Desarrollo</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
            
              </Card>
              </div>
          </div>
  
          );
        })}
      </div>
    );
  }
};
