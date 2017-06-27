import React, {Component} from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
    this.onUserChange = this.onUserChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onUserChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  onTextChange (e) {
    this.setState({
      content: e.target.value
    })
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.submitComment(this.state)
    this.setState({content: ''})
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input type="text" value={this.state.username} 
            onChange={this.onUserChange} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea rows="5" onChange={this.onTextChange} 
            value={this.state.content}>
          </textarea>
          </div>
        </div>
        <div className='comment-field-button'>
          <button type="submit" onClick={this.onSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput