const user_reducer = (state, action) => {
    if(action.type === 'LOGIN') {
        return {
            ...state,
            isAuthenticated: true
        }
    }
    if(action.type === 'LOGOUT') {
        return {
            ...state,
            isAuthenticated: false
        }
    }
};

export default user_reducer;
