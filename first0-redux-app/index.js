const createStore = require('redux').createStore



// create initial state 
const initialState = {
    in: 4
};

// reducer function
// it takes two params (state, action)
// :: state parama define app state
// :: action transforms the current state to next state based on the action  


const Reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INCREMENT':
            return {
                in: state.in + 12
            };
        case 'DECREMENT':
            return {
                in: state.in - 1
            };
        default:
            return state
    }

}

// create redux store which holding the state of your app
// its api  is (subscribe, dispatch, getState)

let store = createStore(Reducer)

// use subsribe to update the UI in response to state changes
store.subscribe(() => console.log(store.getState()))


//  the only way to mutate the internal state is to dispatch an action
// the action can be serialzed, logged, stored and later replayed.
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

