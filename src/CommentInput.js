import React from 'react'

class CommentInput extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handleContent = this.handleContent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.handleUsername} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleContent} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
  // 处理输入姓名
  handleUsername (event) {
    this.setState({
      username: event.target.value
    })
  }
  // 处理用户输入评论内容
  handleContent (event) {
    this.setState({
      content: event.target.value
    })
  }
  // 发布评论
  handleSubmit () {
    // 判断父组件是否传入了onSubmit属性
    if (this.props.onSubmit) {
      // 相当于const username = this.state.username;const content = this.state.content
      const { username, content } = this.state
      this.props.onSubmit({username,content})
    }
    // 清空评论内容
    this.setState({content: ''})
  }
}

export default CommentInput