import * as React from "react";
import User from "./user";
import { Link } from "react-router";

// custom modules
import { UserType } from '../types/'

export interface PageProps {
  users: Array<UserType>
  getUsers: any,
  getUser: any
}

export interface PageState {
  users: Array<{}>
}

export default class Page extends React.Component <PageProps, PageState> {
  constructor (props: PageProps) {
    super(props)
    this.state = {
      users: []
    }
    props.getUsers();
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      users: nextProps.users
    })
  }

  render () {
    const users : Array<{}> = this.state.users.map((user: UserType) => {
      console.log(user, "user")
      return (
      <Link to={`/users/${user.login}`}>
        <User key={user.id} login={user.login} avatar_url={user.avatar_url} />
      </Link>
      )
    })
  	return (
  		<div>
          This is just a page.
          {users}
      </div>
  	)
  }
}