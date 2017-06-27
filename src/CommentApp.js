import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      editingComment: {
        username: '',
        commentText: ''
      },
      commentList: []
    }
    this.userChange = this.userChange.bind(this)
    this.textChange = this.textChange.bind(this)
    this.submitComment = this.submitComment.bind(this)
  }

  // 监听用户名输入框
  userChange (username) {
    this.setState(prevState => {
      return {editingComment: {
        username: username,
        commentText: prevState.editingComment.commentText
      }}
    })
  }

  // 监听评论内容输入框
  textChange (text) {
    this.setState(prevState => {
      return {editingComment: {
        username: prevState.editingComment.username,
        commentText: text
      }}
    })
  }

  // 将编辑的comment推入列表
  submitComment () {
    console.log('submitComment is called!')
    this.setState(prevState => {
      let commentList = prevState.commentList
      commentList.push(prevState.editingComment)
      return {
        editingComment: {
          username: prevState.editingComment.username,
          commentText: ''
        },
        commentList: commentList
      }
    })
  }

  render () {
    return (
      <div className="app-wrapper">
        <CommentInput comment={this.state.editingComment} userChange={this.userChange} 
          textChange={this.textChange} submitComment={this.submitComment}/>
        <CommentList commentList={this.state.commentList} />
      </div>
    )
  }
}

export default CommentApp