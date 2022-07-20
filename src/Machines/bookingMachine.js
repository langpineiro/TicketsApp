import { createMachine, assign} from 'xstate';

const increment = (context) => context.count + 1;
export const bookingTicket = createMachine({
  id: "tickets",
  initial: "initial",
  context: {
    count: 0,
    name: '',
  },
  states: {
     initial:{
       on: {
          START: "write",
       },
     },
     active:{
      on: {
          INC: { 
            target:"tickets",
            actions: assign({ count: increment }) 
          },
          CANCEL: "initial",
         },
      },
     write: {
       on: {
         CONTINUE:{
            target: "active",
            actions: assign({name: (context, event) => event.name},
            )},
         CANCEL: "initial",
       },
     },
     tickets: {
        on: {
          FINISH: "initial",
          CANCEL: "initial",
        },
     },

  }
})
