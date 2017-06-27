import React, {Component} from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.onUserChange = this.onUserChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onUserChange (e) {
    this.props.userChange(e.target.value)
  }

  onTextChange (e) {
    this.props.textChange(e.target.value)
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.submitComment()
  }

  render () {
    return (
      <form className="input-wrapper">
        <div>
          <label>用户名：</label>
          <input type="text" value={this.props.comment.username} 
            onChange={this.onUserChange} />
        </div>
        <div>
          <label>评论内容：</label>
          <textarea rows="5" onChange={this.onTextChange} 
            value={this.props.comment.commentText}>
        </textarea>
        </div>
        <button type="submit" onClick={this.onSubmit}>发布</button>
      </form>
    )
  }
}

export default CommentInput