const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const createStore = redux.createStore; // Use createStore instead of legacy_createStore
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// action creators

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => { // Pass 'users' as a parameter
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => { // Pass 'error' as a parameter
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// thunk middleware has the ability for an action creator to return a function instead of an action object
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode.com/users') // Use axios.get instead of axios.getAdapter
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users)); // Pass 'users' to the success action
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
