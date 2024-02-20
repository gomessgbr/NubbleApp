import {stringsUtils} from '../stringsUtils';

test('capitalizeFirstLetter', () => {
  // escrever teste
  const name = stringsUtils.capitalizeFirstLetter('Ana Maria');
  expect(name).toBe('Ana Maria');
});
