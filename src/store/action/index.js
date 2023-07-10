export const loginUpdate = () => {
    return {
        type: 'LOGIN',
    };
}
export const updateUserName = (userName) => {
    return {
        type: 'USERNAME',
        userName
    };
}