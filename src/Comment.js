import React, { Component } from 'react'

class Comment extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.comment.username}</h2>
        <p>{this.props.comment.commentText}</p>
      </div>
    )
  }
}

export default Comment