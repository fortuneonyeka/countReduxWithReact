export const evenCounterReducer = (state = 2, action) =>  {

switch (action.type) {
  case "EVEN_INCREMENT":
      return state + 2

  case "EVEN_DECREMENT":
      return state - 2
    

  default:
    return state
}
}