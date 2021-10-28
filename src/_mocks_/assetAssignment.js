import faker from 'faker';
import {sample} from "lodash";

const assetAssignment = [...Array(6)].map((_, index) => ({
    type: faker.vehicle.manufacturer(),
    name: faker.vehicle.vehicle(),
    serialNumber: faker.datatype.number(),
    startDate: faker.name.findName(),
    returnDate: sample([
        faker.name.findName(),
        null,
        null,
    ]),
    deadlineDate: faker.name.findName(),
    createdBy:{
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    }
}));

export default assetAssignment;