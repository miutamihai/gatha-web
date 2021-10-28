import faker from 'faker';

const data = () => [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    type: faker.name.findName(),
    name: faker.company.companyName(),
}));

export default data;
