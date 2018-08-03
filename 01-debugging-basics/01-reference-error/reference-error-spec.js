describe('reference-error specs', () => {
  it('`france` is a variable in the global scope', () => {
    expect(france).toBeDefined();
    expect(france).toBe('france');
  });

  it('vacationSpots is a function that returns the destination with the most characters', () => {
    expect(vacationSpots('Italy', 'Iceland')).toBe('Iceland');
  });
});
