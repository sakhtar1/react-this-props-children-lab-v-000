// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecoration extends React.Component {
  render(){
    return (
      <div className="theme">{this.theme.children}</div>
    )
  }
}
