import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = { commentList: [] }
    this.submitComment = this.submitComment.bind(this)
  }

  // 将编辑的comment推入列表
  submitComment (comment) {
    if (!comment) return 
    if(!comment.username) return alert('请输入用户名！')
    if(!comment.content) return alert('请输入评论内容！')
    this.setState(prevState => {
      let list = prevState.commentList
      list.push(comment)
      return { commentList: list }
    })
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput submitComment={this.submitComment}/>
        <CommentList commentList={this.state.commentList} />
      </div>
    )
  }
}

export default CommentApp