import React from "react";

 export function Welcome({send}) {
  return (
    <>
        <h5 className="card-title">Bienvenido al sistema de turnos</h5>
        <p className="card-text">
          Debes pedir tu turno para poder ser atendido, porfavor ingresa al sistema
          y pide tu turno.
        </p>
        <button className="btn btn-primary" onClick={() =>{
        send('START');
    }}>Pedir turno</button>
    </>
  );
}


