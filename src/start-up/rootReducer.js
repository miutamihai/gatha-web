import { combineReducers } from "@reduxjs/toolkit";

import { assetReducer} from "../pages/asset/slices";
import { visitorReducer} from "../pages/visitor/slices";
import { departmentReducer} from "../pages/departments/slices";
import { userReducer} from "../pages/employees/slices";
import { observationReducer} from "../pages/observations/slices";

export const rootReducer = combineReducers({
    assetReducer,
    visitorReducer,
    departmentReducer,
    userReducer,
    observationReducer
})