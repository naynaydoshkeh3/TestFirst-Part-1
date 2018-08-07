describe('shortand object syntax', function() {
  it('the object "dog" should be in the global scope', function() {
    expect(typeof dog).toBe('object');
  });
  it('has methods and uses the shorthand-method syntax', function() {
    expect(typeof dog.bark).toBe('function');
    expect(dog.bark.toString().includes('function')).toBe(false);
  });
  it('uses the global name variable and assigns it as a property using shorthand-property syntax', function() {
    expect(dog.name).toBeDefined();
    expect(name).toBeDefined();
    expect(dog.name).toBe('Cody');
  });
  it('creates a bark method on dog', () => {
    expect(dog.bark).toBeDefined();
    expect(typeof dog.bark).toBe('function');
    expect(dog.bark()).toBe('ruff ruff!');
  });
  it('uses the global variable loud to create the computed method loudBark', function() {
    // computed properties - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015
    expect(loud).toBeDefined();
    expect(loud).toBe('loud');
    expect(dog['loudBark']()).toBe('RUFF RUFF!');
  });
  it('creates the global variables "bark" and "loudBark" using destructuring', function() {
    expect(bark).toBeDefined();
    expect(loudBark).toBeDefined();
    expect(typeof bark).toBe('function');
    expect(typeof loudBark).toBe('function');
  });
});

