// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecoration extends React.Component {
  render(){
    return (
      <h1>{"You've been invited!"}</h1>
        {this.props.children}
    )
  }
}
