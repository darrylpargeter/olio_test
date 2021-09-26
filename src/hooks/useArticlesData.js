import React from 'react';

const URL = 'https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json';

const initState = {
  response: [],
  isLoading: false,
  isError: false,
}

const Actions = {
  SET_RESPONSE: 'set_response',
  SET_IS_LOADING: 'set_is_loading',
  SET_IS_ERROR: 'set_is_error',
}

const reducer = function(state, action) {
  switch(action.type) {
    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    }
    case Actions.SET_IS_ERROR: {
      return {
        ...state,
        isLoading: !state.isLoading,
        isError: action.payload,
        response: {},
      }
    }
    case Actions.SET_RESPONSE: {
      return {
        ...state,
        isLoading: !state.isLoading,
        isError: false,
        response: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

async function fetchData() {
  try {
    const rawData = await fetch(URL);
    return rawData.json();
  } catch (error) {
    return error
  }
}

export default function useArticlesData() {
  const [state, dispatch] = React.useReducer(reducer, initState);

  React.useEffect(() => {
    (async () => {
      dispatch({ type: Actions.SET_IS_LOADING });
      try {
        const data = await fetchData();
        dispatch({ type: Actions.SET_RESPONSE, payload: data });
      } catch (e) {
        dispatch({ type: Actions.SET_IS_ERROR, payload: e });
      }
    })()
  }, []);

  return state;
}
