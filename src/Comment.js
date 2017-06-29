import React, { Component } from 'react'

class Comment extends Component {
  constructor () {
    super()
    this.state = { timeString: '' }
    this._computeTime = this._computeTime.bind(this)
  }

  _computeTime () {
    let duration = (Date.now() - this.props.comment.createTime) / 1000
    let createdStr = duration > 60
          ? `${Math.round(duration / 60)}分钟前` 
          : `${Math.round(Math.max(duration, 1))}秒前`
    this.setState({timeString : createdStr})
  }

  componentWillMount () {
    this._computeTime()
    this._timer = setInterval(this._computeTime, 5000)
  }

  handleDelete () {
    if (this.props.handleDelete) {
      this.props.handleDelete(this.props.index)
    }
  }

  ComponentWillUnmount() {
    clearInterval(this._timer)
  }

  render () {
    return (
      <div className='comment' onMouseEnter={this.handleMouseEnter}
          onMouseOut={ this.handleMouseOut}>
        <div className='comment-user'>
          <span>{this.props.comment.username}</span>：
        </div>
        <span className='comment-delete' onClick={this.handleDelete.bind(this)}>删除</span>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>
          { this.state.timeString }
        </span>
      </div>
    )
  }
}

export default Comment