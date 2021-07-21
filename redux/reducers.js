import { combineReducers } from "redux"

import { registerReducer } from "./userReducers"

const reducer = combineReducers({ register: registerReducer })

export default reducer
