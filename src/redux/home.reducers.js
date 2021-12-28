import { limit } from "../config/homeData.config";

// Initial State
const initialState = {
  totalData: 0,
  lastPage: 0,
  actuallyPage: 1,
};

//Types
const GET_TOTAL_DATA_HOME = "GET_TOTAL_DATA_HOME";
const NEXT_PAGE = "NEXT_PAGE";
const BACK_PAGE = "BACK_PAGE";

// Reducer
export default function homeReducers(state = initialState, action) {
  switch (action.type) {
    case GET_TOTAL_DATA_HOME:
      return {
        ...state,
        totalData: action.payload.totalData,
        lastPage: action.payload.lastPage,
      };
    case NEXT_PAGE:
      return {
        ...state,
        actuallyPage: action.payload,
      };
    case BACK_PAGE:
      return {
        ...state,
        actuallyPage: action.payload,
      };
    default:
      return { ...state };
  }
}

// Actions
export const getDataHomeActions = (amount) => (dispatch) => {
  dispatch({
    type: GET_TOTAL_DATA_HOME,
    payload: {
      totalData: amount,
      lastPage: Math.ceil(amount / limit),
    },
  });
};

export const nexPageActions = () => (dispatch, getState) => {
  dispatch({
    type: NEXT_PAGE,
    payload: getState().HomeReducers.actuallyPage + 1,
  });
};

export const backPageActions = () => (dispatch, getState) => {
  dispatch({
    type: BACK_PAGE,
    payload: getState().HomeReducers.actuallyPage - 1,
  });
};
