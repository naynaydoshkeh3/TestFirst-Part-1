const name = 'Cody';
const loud = 'loud';

const dog = {
  bark() {
    return 'ruff ruff!';
  },
  name,
  [`${loud}Bark`]: function() {
    return this.bark().toUpperCase();
  },
};

const { bark, loudBark } = dog;