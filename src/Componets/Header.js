import React from 'react';

function Header({state, send}) {
  const goToWelcome = () => {
    send('CANCEL')
  }
  return (
      <div class="card-header">
       <h1>Generador de Turnos</h1>
       {!state.matches('initial') &&
        <button onClick={goToWelcome} className='btn btn-danger'>Cancelar</button>
       }
      </div>
  );
}

export default Header;