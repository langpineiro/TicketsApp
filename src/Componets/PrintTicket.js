import React from "react";

export function PrintTicket({send}) {

  return (
    <>
      <h5 className="card-title">Turno generado</h5>
        <button type="submit" onClick={()=>{
            send('FINISH');
        }} className="btn btn-primary">volver al inicio</button>
    </>
  );
}