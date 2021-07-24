import { combineReducers } from "redux"

import {
  profileReducer,
  registerReducer,
  updateProfileReducer,
} from "./userReducers"

const reducer = combineReducers({
  register: registerReducer,
  profile: profileReducer,
  update: updateProfileReducer,
})

export default reducer
