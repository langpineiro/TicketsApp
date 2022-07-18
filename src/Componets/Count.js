import React from "react";

export function Count({ send }) {
  const saveData =(e) => {
    e.preventDefault();
    send('INC');
  }
  return (
    <>
      <h5 className="card-title">Dale click en Generar Turno</h5>
        <button type="submit" onClick={saveData} className="btn btn-primary">Generar Turno</button>
    </>
  );
}