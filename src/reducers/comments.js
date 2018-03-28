/** 
 * 1、定义action types
 * 2、编写reducer
 * 3、跟这个reducer相关的action creators
*/
// action类型
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
// reducer
export default function(state,action) {
    if(!state) {
      state = {comments:[]}
    }
    switch(action.type) {
      case INIT_COMMENTS:
      //初始化评论
      return {comments: action.comments}
      case ADD_COMMENT: 
      //新增评论
      return {
        comments:[...state.comments,action.comment]
      }
      case DELETE_COMMENT:
      // 删除评论,索引之前的内容和索引之后的内容，然后再合并，相当于删除
      return {
        comments: [
            ...state.comments.slice(0, action.commentIndex),
            ...state.comments.slice(action.commentIndex + 1)
        ]
      }
      default:
      return state
    }
}
// 返回 action
export const initComments = (comments) => {
    return {type: INIT_COMMENTS, comments}
}
export const addComment = (comment) => {
    return {type: ADD_COMMENT, comment}
}
export const deleteComment = (commentIndex) => {
    return {type: DELETE_COMMENT, commentIndex}
}