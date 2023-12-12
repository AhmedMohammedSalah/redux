import './App.css';
// import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement,logout,login} from './store/action';
import { connect } from 'react-redux';
import React from 'react';
class APP extends React.Component {
    //   const count = useSelector( state => state.counter.count )
    //   const isLogged = useSelector( state => state.auth.logged )
    //   const dispatch = useDispatch();
    render () {
        return (
            <div className="app">
                <header>
                    <div> {this.props.count} </div>
                    {this.props.isLogged ? (
                        <button onClick={this.props.onLogout}> logout </button>
                    ) : (
                        <button onClick={this.props.onLogin}> login </button>
                    )}
                </header>
                <div className="counter">
                    <button onClick={() => this.props.onIncrement( 1 )}> + </button>
                    <button onClick={() => this.props.onIncrement()}> +2 </button>
                    <button onClick={() => this.props.onIncrement( 3 )}> +3 </button>
                    <button onClick={() => this.props.onDecrement()}> - </button>
                    <button onClick={() => this.props.onDecrement( 2 )}> -2 </button>
                    <button onClick={() => this.props.onDecrement( 3 )}> -3 </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        count: state.counter.count,
        isLogged: state.auth.logged
    };
};
const mapDispatchToProps = ( dispatch ) => {
    return {
        onIncrement: ( num ) => {
            dispatch( increment( num ) );
        },
        onDecrement: ( num ) => {
            dispatch( decrement( num ) );
        },
        onLogin: () => {
            dispatch( login() );
        },
        onLogout: () => {
            dispatch( logout() );
        },
    };
};
export default connect (mapStateToProps,mapDispatchToProps)(APP);
