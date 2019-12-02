const hi = 'hi';
const world = 'world';

function helloWorld() {
 
  // eslint-disable-next-line no-template-curly-in-string
  console.log(`${hi}!`);

  return `${hi} ${world}`;
  
 }

helloWorld(hi, world);
 

const bye = 'bye';

const goodbyeWorld = {
good: 'good',
bye,
world
}

for (let key in goodbyeWorld) {
  console.log(key + " ")
}