// Initial State
const initialState = {
  error: "",
};

//Types
const GET_ERROR = "GET_ERROR";

// Reducer
export default function mainReducers(state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}

// Actions
export const getError = (msj) => (dispatch) => {
  dispatch({
    type: GET_ERROR,
    payload: msj,
  });
};
