import pureFunctions from '../pure_functions';

test.each([
  [92, 'healthy'],
  [40, 'wounded'],
  [10, 'critical'],
])('testing pure function with %i health', (health, expected) => {
  const result = pureFunctions(health);
  expect(result).toBe(expected);
});
