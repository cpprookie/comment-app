import React, { Component } from 'react'
import Comment from './Comment'

class CommnetList extends Component {
  static defaultProps = {
    commentList: []
  }

  handleDelete (index) {
    if (this.props.handleDelete) {
      this.props.handleDelete(index)
    }
  }

  render () {
    return ( 
      <div className='comment-list'>
        {this.props.commentList.map((item,index) => <Comment 
          comment={item} key={index} index={index} 
          handleDelete={this.handleDelete.bind(this)}/>)}
      </div>
    )
  }
}

export default CommnetList