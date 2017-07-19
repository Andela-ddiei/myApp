import * as React from "react";

export interface PageProps {

}

export interface PageState {

}

export default class Page extends React.Component <PageProps, PageState> {
  constructor (props: PageProps) {
    super(props)
  }

  render () {
    <div> This is just a page. </div>
  }
}