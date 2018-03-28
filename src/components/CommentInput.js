import React from 'react'
import PropTypes from 'prop-types'

class CommentInput extends React.Component {
  // 对 props 添加校验，onSubmit 为方法
  static propTypes = {
    onSubmit: PropTypes.func,
    username: PropTypes.any,
    onUserNameInputBlur: PropTypes.func
  }
  // 设置默认值
  static defaultProps = {
    username: ''
  }
  constructor(props) {
    super(props)
    this.state = {
      username: props.username,
      content: ''
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handleContent = this.handleContent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this)
  }
  // 不依赖 DOM 的操作放在此生命周期内
  componentWillMount () {
    // this._loadUsername()
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.handleUsername} onBlur={this.handleUsernameBlur} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容</span>
          <div className='comment-field-input'>
            <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContent} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
  // 依赖 DOM 的操作放在此生命周期内
  componentDidMount () {
    // 加载完成后，评论框获取焦点，DOM 加载完成才能获取焦点
    this.textarea.focus()
  }
  // 处理输入姓名
  handleUsername (event) {
    this.setState({
      username: event.target.value
    })
  }
  // 保存用户名的私有方法，私有方法以_开头
  _saveUsername (username) {
    // localStorage.setItem('username', username)
  }
  // 加载保存的用户名
  _loadUsername () {
    // const username = localStorage.getItem('username')
    // if(username) {
    //   this.setState({username})
    // }
  }
  // 姓名输入框失焦事件，在这里保存用户名到 localstorage
  handleUsernameBlur (event) {
    if(this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value)
    }
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
      // const { username, content } = this.state
      // +new Date() 相当于 new Date().getTime() 等同于 new Date().valueOf()
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    // 清空评论内容
    this.setState({content: ''})
  }
}

export default CommentInput