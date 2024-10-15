import { SEND_MESSAGE, RECIEVE_MESSAGE } from "./actions";


const initialState = {
    messages: [],
};

// reducer function

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case RECIEVE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        default:
            return state;
    }
};

export default chatReducer;