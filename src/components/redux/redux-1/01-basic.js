import { createStore } from 'redux'

const initState = 0

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const log = () => console.log(store.getState());

const store = createStore(countReducer)

log()

console.log(store);

store.subscribe(log)

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'INCREMENT'
})
















export default () => {
  return null
}
