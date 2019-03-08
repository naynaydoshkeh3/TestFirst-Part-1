/* eslint-env jasmine */
/* eslint-disable no-undef */

/*
  The primary goal of this section is to provide extra practice using ES2015 Syntax.
  If you find the specs confusing we advise you not to spend too much time on this
  section, you can gain the same benefit studying the solution to this suite of specs.
  The primary goal is to introduce new syntax you may encounter or use to improve your code.
*/

describe('shortand object syntax', function () {
  it('the object "dog" should be in the global scope', function () {
    expect(typeof dog).toBe('object');
  });
  it('has methods and uses shorthand-method syntax', function () {
    expect(typeof dog.bark).toBe('function');
    expect(dog.bark.toString().includes('function')).toBe(false);
  });
  it('uses the global name variable and assigns it as a property using shorthand-property syntax', function () {
    expect(name).toBeDefined();
    expect(dog.name).toBeDefined();
    expect(dog.name).toBe('Cody');
  });
  it('creates a bark method on dog', () => {
    expect(dog.bark).toBeDefined();
    expect(typeof dog.bark).toBe('function');
    expect(dog.bark()).toBe('ruff ruff!');
  });
  it('uses the global variable loud to create the computed method loudBark', function () {
    // computed properties - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015
    expect(loud).toBeDefined();
    expect(loud).toBe('loud');
    expect(dog['loudBark']()).toBe('RUFF RUFF!');
  });
  it('creates the global variable "bark" and assign the `dog.bark` method with destructuring', function () {
    // destructuring may be new! Here is the documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
    // the tests won't verify if you used destructuring.
    expect(bark).toBeDefined();
    expect(typeof bark).toBe('function');
  });
});
