import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// make sure component first letter should be in uppercase
const Counter = ({ value, increment, decrement }) => {
    return (
        <div>
            <h1> value:{value} </h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )

}

// reducer function for handeling state
const Reducer = (state = 7, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1
        default:
            return state

    }
}

// create store for  for state 
const Store = createStore(Reducer)

// This function dispatch the ations and update the state in UI 
const render = () => {
    ReactDOM.render(
        <Counter
            value={Store.getState()}
            increment={() =>
                Store.dispatch({
                    type: 'INC'
                })
            }
            decrement={() =>
                Store.dispatch({
                    type: 'DEC'
                })
            }
        />,
        document.getElementById('root'))
}


Store.subscribe(render)
render()
