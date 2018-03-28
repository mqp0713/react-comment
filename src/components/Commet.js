import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
  // 验证comment为毕传的对象, onDeleteComment为父组件传过来的方法, index 为评论对象的索引下标
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      timeString: ''
    }
    this.handleDeleteComment = this.handleDeleteComment.bind(this)
  }
  componentWillMount() {
    this._updateTimeString()
    // 每隔5秒更新时间
    this._timer = setInterval(
      this._updateTimeString.bind(this),5000
    )
  }
  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username}</span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>{this.state.timeString}</span>
        <span className='comment-delete' onClick={this.handleDeleteComment}>删除</span>
      </div>
    )
  }
  // 卸载的时候清楚定时器
  componentWillUnmount() {
    clearInterval(this._timer)
  }
  // 删除评论
  handleDeleteComment() {
    // 判断父组件是否传递，把index传递给父组件
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }
  // 更新发布评论时间
  _updateTimeString() {
    // +Date.now()做了隐式转换，转换成 number
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
}

export default Comment