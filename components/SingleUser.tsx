import * as React from "react";
import User from "./user"
import { UserType } from "../types"

export interface singleUserProps {
  user: Array<UserType>
  getUser: any
}

export interface singleUserState {
  user : any
}


export default class SingleUser extends React.Component  <singleUserProps, singleUserState> {
  constructor(props: singleUserProps) {
    super(props)
    // this.state = {
    //   user: {}
    // }

    // console.log(this.props, "this props")
  }

  render () {
    return (
      <div>
          "hihlksjdnflgksnlih"
      </div>
    )
  }
}