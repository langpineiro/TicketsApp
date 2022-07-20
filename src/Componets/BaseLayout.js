import React from "react";
import { useMachine } from "@xstate/react";
import { bookingTicket } from "../Machines/bookingMachine";
import Header from "../Componets/Header";
import ContentCard from "../Componets/ContentCard";
export const BaseLayout = () => {
  const [state, send] = useMachine(bookingTicket);
  return (
    <div className="container">
      <div className="row align-items-center m-4 postion-relative">
        <div className="col-md-12">
          <div className="card position-absolute top-50 start-50 translate-middle rounded shadow">
            <Header state={state} send={send} />
            <ContentCard state={state} send={send} />
          </div>
        </div>
      </div>
    </div>
  );
};
