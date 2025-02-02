
export const gradientsReducer = (state, action) => {
  // FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        gradients: action.payload,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
      case "FETCH_PAGE":
        return {
          ...state,
          page: state.page + 1,
        }

    default:
      throw new Error(`Unsupported action type ${action.type} in gradientsReducer`)
  }
}

export default gradientsReducer
