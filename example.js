import _ from 'lodash';

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};
console.log(Object.hasOwn(data, 'name'));
console.log(_.pick(data, ['user', 'keys']));
const compareVersion = (v1, v2) => {
  const [v1_major, v1_minor] = v1.split('.');
  const [v2_major, v2_minor] = v2.split('.');
  console.log(v1_major, v2_minor);
};
compareVersion('1.27', '2.13');

const x = 1;
let y = x;
y += 1;
console.log(x, y);
