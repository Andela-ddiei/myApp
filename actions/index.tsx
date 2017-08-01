import axios from 'axios';

export const getUser : ( () => {} ) = () => {
  const endpoint : string = "https://api.github.com/users";
  console.log(endpoint, "endpoint")
  return (dispatch: any) => {
    axios.get(endpoint)
    .then((users) => {
      console.log(users, "users")
    })
  }
}

// type ActionType = {
//   type: string
// }

// export const getUser : ActionType = {
//   type: "custom type"
// }