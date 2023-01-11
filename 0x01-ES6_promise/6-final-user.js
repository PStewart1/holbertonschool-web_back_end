import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return [await signUpUser(firstName, lastName)
    .then((value) => ({ status: 'fulfilled', value }))
    .catch((err) => ({ status: 'rejected', value: err })),
  await uploadPhoto(fileName)
    .then((value) => ({ status: 'fulfilled', value }))
    .catch((err) => ({ status: 'rejected', value: err.toString() }))];
}
