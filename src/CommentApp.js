import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = { commentList: [] }
    this.submitComment = this.submitComment.bind(this)
    this._loadComments = this._loadComments.bind(this)
    this._saveComments = this._saveComments.bind(this)
    this._deleteComment = this._deleteComment.bind(this)
  }

  // 载入评论列表
  _loadComments () {
    if (localStorage.comments) {
      this.setState({commentList: JSON.parse(localStorage.comments)})
    }
  }

  // 更新评论列表至localStorage
  _saveComments (comments) {
    localStorage.comments = JSON.stringify(comments)
  }

  componentWillMount () {
    this._loadComments()
  }

  _deleteComment (index) {
    this.setState(prevState => {
      let comments = prevState.commentList.filter((item,i) => i !== index)
      localStorage.comments = JSON.stringify(comments)
      this._loadComments()
      return {commentList: comments}
    })
  }

  // 将编辑的comment推入列表
  submitComment (comment) {
    if (!comment) return 
    if(!comment.username) return alert('请输入用户名！')
    if(!comment.content) return alert('请输入评论内容！')
    this.setState(prevState => {
      let list = prevState.commentList
      list.push(comment)
      this._saveComments(list)
      return { commentList: list }
    })
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput submitComment={this.submitComment}/>
        <CommentList commentList={this.state.commentList} handleDelete={this._deleteComment} />
      </div>
    )
  }
}

export default CommentApp