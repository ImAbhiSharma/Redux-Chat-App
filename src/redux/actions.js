// actions types: Constants that represent the type of action being performed.

export const SEND_MESSAGE = "SEND_MESSAGE";
export const RECIEVE_MESSAGE = "RECIEVE_MESSAGE";


// action creators: Functions that return action objects.

export const sendMessage = (message) => ({
    type: SEND_MESSAGE,
    payload: message,
});

export const recieveMessage = (message) => ({
    type: RECIEVE_MESSAGE,
    paylod: message,
});