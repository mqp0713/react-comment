import React from 'react'
import Comment from './Commet'

class CommentList extends React.Component {
  static defaultProps = {
    comments: []
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment,i) => <Comment comment={comment} key={i} />)}
      </div>
    )
  }
}

export default CommentList