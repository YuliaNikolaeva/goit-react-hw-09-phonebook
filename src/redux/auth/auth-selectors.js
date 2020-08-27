const getIsAuthenticated = state => state.auth.isUserInLogin;
const getUserName = state => state.auth.user.name;


export default {
    getIsAuthenticated,
    getUserName,
};