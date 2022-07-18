import React, {useState} from "react";

export function WriteName({ send }) {
  const [info, setInfo] = useState('');
  const saveData =(e) => {
    e.preventDefault();
    send('CONTINUE', {name: info});
  }
 const saveState = (e) =>{
    setInfo(e.target.value);
 } 
  return (
    <>
      <h5 className="card-title">Ingreso de datos</h5>
            <input type="text" className="form-control" placeholder="Nombre y apellido" 
            aria-label="Username" aria-describedby="addon-wrapping"
              onChange={saveState}
            />
        <button type="submit" onClick={saveData} className="btn btn-primary">Solicitar el número de turno</button>
    </>
  );
}