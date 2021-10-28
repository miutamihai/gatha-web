import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
}));

export default users;
