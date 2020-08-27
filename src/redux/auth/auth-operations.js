import axios from 'axios';
import authActions from './auth-actions';

const {
    registerRequest,
    registerSuccess,
    registerError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    loginRequest,
    loginSuccess,
    loginError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
} = authActions;

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };


  const register = credentials => dispatch => {
    dispatch(registerRequest());

    axios
    .post('/users/signup', credentials)
    .then(response => dispatch (registerSuccess(response.data), token.set(response.data.token)))
    .catch(err => dispatch(registerError(err.message)));
  };


  const login = credentials => dispatch => {
    dispatch(loginRequest());

    axios
    .post('/users/login', credentials)
    .then(response => dispatch(loginSuccess(response.data), token.set(response.data.token)))
    .catch(err => dispatch(loginError(err.message)));
  };

  const logOut = () => dispatch => {
    dispatch(logoutRequest());

    axios
      .post('/users/logout')
      .then(() => dispatch(logoutSuccess()), token.unset())
      .catch(err => dispatch(logoutError(err.message)));
  };


  const getCurrentUser = () => (dispatch, getState) => {
    const {auth: {token: persistedToken}} = getState();

    if(!persistedToken) {
      return;
    }

    token.set(persistedToken);

    dispatch(getCurrentUserRequest());
    axios
    .get('/users/current')
    .then(response => dispatch(getCurrentUserSuccess(response.data)))
    .catch(err => dispatch(getCurrentUserError(err.message)));
  };


  export default {
    register,
    login,
    logOut,
    getCurrentUser
  };