import { combineReducers } from "redux"

import { profileReducer, registerReducer } from "./userReducers"

const reducer = combineReducers({
  register: registerReducer,
  profile: profileReducer,
})

export default reducer
