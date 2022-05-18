export const newPostReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE": {
      return { ...state, title: action.payload.title };
    }
    case "SET_CONTENT": {
      return { ...state, content: action.payload.content };
    }
    case "SET_IS_PUBLIC": {
      return { ...state, isPublic: !state.isPublic };
    }
  }
};
