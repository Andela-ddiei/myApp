import * as React from "react";

const User = (props) => {
  return (
    <div>
      <span> Login: {props.login} </span>
      <span> <img src={props.avatar_url} /> </span>
    </div>
  )
}

export default User;