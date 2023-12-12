// Action 
import axios from "axios";

const increment = (num) => {
    return {
        type: 'INC',
        payload: num&&typeof(num)===typeof(3)?num:2
        
    }

}
const decrement = (num) => {
    return {
        type: 'DEC',
        payload: num&&typeof(num)===typeof(3)?num:1
    }
}
const login =  () => {
    // let res = await axios.get( 'https://jsonplaceholder.typicode.com/users' );

    return {
        type: 'IN',
         // payload:res.data[0].name
    }

}
const logout = () => {
    return {
        type: 'OUT',
    }
}

export { increment, decrement,logout,login };