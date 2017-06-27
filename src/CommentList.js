import React, { Component } from 'react'
import Comment from './Comment'

class CommnetList extends Component {
  static defaultProps = {
    commentList: []
  }
  render () {
    return ( 
      <div className='comment-list'>
        {this.props.commentList.map((item,index) => <Comment comment={item} key={index} />)}
      </div>
    )
  }
}

export default CommnetList