/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  const upload = uploadPhoto;
  const create = createUser;
  return Promise.all([upload, create]).then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[2].lastName}`);
  }).catch(() => {
    console.log('signup system offline');
  });
}

console.log(handleProfileSignup);
