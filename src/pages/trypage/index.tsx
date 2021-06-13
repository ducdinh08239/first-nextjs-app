import React, { useReducer } from 'react'

const TryPage = () => {
    const initialState = { count: 0 };

    function reducer(state, action) {
      switch (action.type) {
        case 'reset':
          return initialState;
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        default:
          return state;
      }
    }
    
    function Counter({ initialCount = 0}) {
      const [state, dispatch] = useReducer(reducer, { count: initialCount });
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({ type: 'reset' })}>
            Reset
          </button>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
      );
    }
    Counter
}

export default TryPage