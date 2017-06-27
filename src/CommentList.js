import React, { Component } from 'react'
import Comment from './Comment'

class CommnetList extends Component {

  render () {
    
    return ( 
      <div>
        {this.props.commentList.map((item,index) => <Comment comment={item} key={index} />)}
      </div>
    )
  }
}

export default CommnetList