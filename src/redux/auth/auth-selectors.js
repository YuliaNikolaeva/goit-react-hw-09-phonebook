const getIsAuthenticated = state => state.auth.isUserInLogin;
const getUserName = state => state.auth.user.name;
const errorInAuth = state => state.auth.error;

export default {
    getIsAuthenticated,
    getUserName,
    errorInAuth,
};