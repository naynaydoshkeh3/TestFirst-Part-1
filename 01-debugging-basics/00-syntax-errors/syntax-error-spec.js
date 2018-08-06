describe('helloWorld', () => {
  it('a `hello` variable is in the global scope', () => {
    expect(hello).toBe('hello');
  });

  it('a `world` variable is in the global scope', () => {
    expect(world).toBe('world');
  });

  it('the function helloWorld returns a string', () => {
    expect(helloWorld).toBeDefined();
    expect(helloWorld()).toBe('hello world');
  });

  it('the object `goodbyeWorld` has three keys', () => {
    expect(Object.keys(goodbyeWorld).length).toBe(3);
  });
});
