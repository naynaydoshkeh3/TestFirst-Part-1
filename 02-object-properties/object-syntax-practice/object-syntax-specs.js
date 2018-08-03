describe('shortand object syntax', function() {
  it('the object "dog" should be in the global scope', function() {
    expect(typeof dog).toBe('object');
  });
  it('has methods and uses the shorthand-method syntax', function() {
    expect(typeof dog.bark).toBe('function');
    expect(dog.bark.toString().includes('function')).toBe(false);
  });
  it('uses the global name variable as and assigns it as a property using shorthand-property syntax', function() {
    expect(dog.name).toBeDefined();
    expect(name).toBeDefined();
    expect(dog.name).toBe('Cody');
  });
  it('uses a function to create the computed property "age"', function() {
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
