//163.158.241.18:3000
const ip = '163.158.241.18:3000';

//if needed change this
fetch(`{ip}/Contacts:id`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
