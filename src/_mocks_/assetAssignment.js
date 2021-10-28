import faker from 'faker';
import {sample} from "lodash";

const assetAssignment = [...Array(6)].map((_, index) => ({
    type: faker.vehicle.manufacturer(),
    name: faker.vehicle.vehicle(),
    serialNumber: faker.datatype.number(),
    startDate: faker.date.past(),
    returnDate: sample([
        faker.date.future(),
        null,
        null,
    ]),
    deadlineDate: sample([
        faker.date.future(),
        faker.date.recent()
    ]),
    createdBy:{
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    }
}));

export default assetAssignment;