// Reducer
const initialStat = {
    logged:false,
    user:null
}
const authReducer = ( state = initialStat, action ) => {
    switch ( action.type ) {
        case 'IN': return {
            ...state,
            logged: true,
            user:action.payload
        };
        case 'OUT': return {
            ...state,
            logged: false,
            user:null
        };
        default : return{...state}
    }
}
export default authReducer