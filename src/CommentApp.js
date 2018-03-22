import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends React.Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
    this.handlerDeleteComment = this.handlerDeleteComment.bind(this)
  }
  // 不依赖 DOM 的操作
  componentWillMount() {
    this._loadComments()
  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handlerDeleteComment} />
      </div>
    )
  }
  // 删除评论列表中用户删除的评论通过下标 index 删除
  handlerDeleteComment(index) {
    const comments = this.state.comments
    // 删除数组中下标为 index 的对象
    comments.splice(index, 1)
    // 通过 setState 重新渲染评论列表
    this.setState({ comments })
    // 重新本地保存
    this._saveComments(comments)
  }
  // 加载本地存储的评论内容
  _loadComments() {
    let comments = localStorage.getItem('comments')
    if(comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  // 保存评论内容，私有方法以_开头
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleSubmitComment (comment) {
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
    this._saveComments(comments)
  }
}

export default CommentApp