// Initial State
const initialState = {
  error: false,
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
export const getErrorActions = (status) => (dispatch) => {
  dispatch({
    type: GET_ERROR,
    payload: status,
  });
};
