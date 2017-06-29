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
    this._saveUsername = this._saveUsername.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  // 用户名输入框变化
  onUserChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  // 评论内容变化
  onTextChange (e) {
    this.setState({
      content: e.target.value
    })
  }

 // 点击评论按钮 
  onSubmit (e) {
    e.preventDefault()
    this.props.submitComment(Object.assign(this.state, {createTime: Date.now()}))
    this.setState({content: ''})
  }

  // 私有方法
  _saveUsername (name) {
    localStorage.setItem('username', name)
  }

  // 用户名输入框失焦时保存用户名,
  handleBlur (e) {
    this._saveUsername(e.target.value)
  }

  // 检查是否缓存用户信息
  componentWillMount () {
    if(localStorage.username) {
      this.setState({username: localStorage.username})
    }
  }

  // 页面内容加载完成自动聚焦
  componentDidMount () {
    this.textarea.focus()
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input type="text" 
              value={this.state.username} 
              onChange={this.onUserChange} 
              onBlur={this.handleBlur}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea rows="5" 
            onChange={this.onTextChange}
            ref={(textarea) => this.textarea = textarea}  
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