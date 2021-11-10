export const ADD_ROLE = 'ADD_ROLE';
//action creators
export function addrole(data) {
    // console.log('USER DATA AFTER UPADTE==>', data)
    return {
        type: ADD_ROLE,
        data,
    };
}
// export function updatedata(data) {
//     return {
//         type: UPDATE_DATA,
//         data,
//     };
// }
// export function clearuserdata() {
//     return {
//         type: CLEAR_USER_DATA,
//     };
// }
// export function clearuserdetails() {
//     return {
//         type: CLEAR_USER_DETAILS,
//     };
// }

// Intial State
let role = null;
// AsyncStorage.getItem('newuser').then((result) => {
//     if (result) {
//         Object.assign(user, JSON.parse(result));
//         // console.warn('user', result);
//     }
// });
export default function UserReducer(state = role, action) {
    // console.log('UPDATED REDUX',action.data)
    switch (action.type) {
        case ADD_ROLE:
            return action.data;
        // case UPDATE_DATA:
        //     // console.log('UPDATED USER REDUX',action.data)
        //     return {
        //         ...state,
        //         [action.data.name]: action.data.value,
        //     };
        // case CLEAR_USER_DETAILS:
        //     return empty;
        default:
            return state;
    }
}
