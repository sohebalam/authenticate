import {
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_SUCCESS,
} from "./userTypes"

export const registerReducer = (
  state = { loading: false, user: null },
  action
) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true }
    case REGISTER_USER_SUCCESS:
      return { loading: false, success: true, message: action.payload.message }
    case REGISTER_USER_FAIL:
      return { loading: false, error: action.payload }
    case CLEAR_ERRORS:
      return { ...state, error: null }
    default:
      return state
  }
}

export const profileReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return { loading: true }
    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        isAuthenticated: true,

        user: action.payload,
      }
    case LOAD_USER_FAIL:
      return { loading: false, error: action.payload }
    case CLEAR_ERRORS:
      return { ...state, error: null }
    default:
      return state
  }
}

export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case UPDATE_PROFILE_SUCCESS:
      return { loading: false, isUpdated: action.payload }
    case UPDATE_PROFILE_RESET:
      return { loading: false, isUpdated: false }
    case UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
