import React from "react";
import {Welcome} from './Welcome';
import {WriteName} from './WriteName';
import {Count} from './Count';
import {PrintTicket} from './PrintTicket';
function ContentCard({state, send}) {
    const renderContent = () =>{
      if(state.matches('initial')){
        return <Welcome send={send}/>;//<Welcome send={send} />
      }
      if(state.matches('write')){
        return <WriteName send={send}/>;//<WriteName send={send} />
      }
      if(state.matches('active')){
        return <Count send ={send}/>;
      }
      if(state.matches('tickets')){
        return <PrintTicket send={send} />;
      }
    }
  return (
    <>
      <div className="card-body">
        {renderContent()}
      </div>
    </>
  );
}

export default ContentCard;
