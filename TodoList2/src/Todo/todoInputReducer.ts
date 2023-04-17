type TodoinputStateType = {
  text: string
}

// change, clear
type TodoInputActionType = {
  type: 'change'
  payload: string
} | {
  type: 'clear'
}

export const todoInputReducer = (state: TodoinputStateType, action: TodoInputActionType) => {
  switch (action.type) {
    case 'change':
      return {
        text: action.payload
      }
    case 'clear':
      return {
        text: ''
      }
  }
}