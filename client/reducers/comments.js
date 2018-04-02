function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // return the new state with the new comment
      return [...state, { user: action.author, text: action.comment }];
    case "REMOVE_COMMENT":
      return [...state.splice(0, action.i), ...state.splice(action.i + 1)];
    default:
      return state;
  }
}

function comments(state = {}, action) {
  const { postId } = action;
  if (!typeof postId !== "undefined") {
    return {
      // take the current state
      ...state,
      // override this post with a new one
      [postId]: postComments(state[postId], action)
    };
  }
  return state;
}

export default comments;
