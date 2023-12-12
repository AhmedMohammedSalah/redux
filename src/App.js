import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement,logout,login} from './store/action';

function App() {
  const count = useSelector( state => state.counter.count )
  const isLogged = useSelector( state => state.auth.logged )
  const user = useSelector( state => state.auth.user )
  const dispatch = useDispatch();
  return (
    <div className="app">
      <header> 
        <div> {count} </div>
        {isLogged?
        <button onClick={()=>dispatch(logout())}> logout </button>
        :
        <button onClick={()=>dispatch(login())}> login </button>
        }
      </header>
      <div className="counter">
        <button onClick={() => dispatch( increment(1) )}> + </button>
        <button onClick={() => dispatch( increment() )}> +2 </button>
        <button onClick={() => dispatch( increment(3) )}> +3 </button>
        <button onClick={()=>dispatch(decrement())}> - </button>
        <button onClick={()=>dispatch(decrement(2))}> -2 </button>
        <button onClick={()=>dispatch(decrement(3))}> -3 </button>
      </div>
      <div className='centerdiv'>
        
      {isLogged &&
        <h2 className='h2-user'>Hello {user}</h2>
      }
      </div>
    </div>
  );
}

export default App;
