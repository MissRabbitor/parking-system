const initialState = {
    loginState: false,
    userName: ''
};

const updateLoginState = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loginState: true
            }
        case 'USERNAME':
            return {
                ...state,
                userName: action.userName
            }
        default:
            return state;
    }
}

export default updateLoginState