import React from 'react'
import Comment from './Commet'
import PropTypes from 'prop-types'

class CommentList extends React.Component {
  // 父组件传过来的方法onDeleteComment
  static propTypes ={
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    comments: []
  }
  constructor(props) {
    super(props)
    this.handleDeleteComent = this.handleDeleteComent.bind(this)
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment,i) => <Comment comment={comment} key={i} onDeleteComment={this.handleDeleteComent} index={i} />)}
      </div>
    )
  }
  // 子组件把评论的index传过来,把index再向上传递给父组件
  handleDeleteComent(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
}

export default CommentList