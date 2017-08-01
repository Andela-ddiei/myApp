import * as React from "react";
import * as Actions from '../actions/'

console.log(Actions, "actions");

// custom modules
import { UserType } from '../types/'

export interface PageProps {
  users: Array<UserType>
}

export interface PageState {

}

console.log("here");

export default class Page extends React.Component <PageProps, PageState> {
  constructor (props: PageProps) {
    super(props)
    console.log(props)
    Actions.getUser();
  }

  render () {
  	return (
  		<div> This is just a page. </div>
  	)
  }
}