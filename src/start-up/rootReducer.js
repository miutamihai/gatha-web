import { combineReducers } from "@reduxjs/toolkit";

import { assetReducer} from "../pages/asset/slices/index";
import { visitorReducer} from "../pages/visitor/slices/index";
import { departmentReducer} from "../pages/departments/slices/index";
import { userReducer} from "../pages/users/slices/index";
import { observationReducer} from "../pages/observations/slices/index";

export const rootReducer = combineReducers({
    assetReducer,
    visitorReducer,
    departmentReducer,
    userReducer,
    observationReducer
})