export const users : Function = (state: Array<any>, action: { type: String, data?: Array<any>}) => {
  switch (action.type) {
    case 'GOTTEN_USERS':
      return action.data
    default:
      return state;
  }
}

export const user = () => {

}