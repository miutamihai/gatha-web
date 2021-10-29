import { combineEpics } from "redux-observable";

import { userEpics } from "../pages/employees/epics";
import { departmentEpics } from "../pages/departments/epics";
import { visitorEpics } from "../pages/visitor/epics";
import { assetEpics } from "../pages/asset/epics";
import { observationEpics } from "../pages/observations/epics";

export const rootEpic = combineEpics(
    userEpics,
    departmentEpics,
    visitorEpics,
    assetEpics,
    observationEpics
)