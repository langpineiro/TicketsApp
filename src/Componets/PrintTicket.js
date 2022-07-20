import React from "react";

export function PrintTicket({state, send}) {
   const {name, count} = state.context;
  return (
    <>
      <h5 className="card-title">Turno generado</h5>
      <p className="card-text">Tu numero de turno: {count}</p>
      <p className="card-text">Cliente: {name}</p>
        <button type="submit" onClick={()=>{
            send('FINISH');
        }} className="btn btn-primary">volver al inicio</button>
    </>
  );
}