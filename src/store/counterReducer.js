// Reducer
const initialStat = {
    count:0
}
const counterReducer = ( state = initialStat, action ) => {
    switch ( action.type ) {
        case 'INC': return {
            ...state,
            count: state.count + action.payload
        };
        case 'DEC': return {
            ...state,
            count: state.count - action.payload
        };
        default : return{...state}
    }
}
export default counterReducer