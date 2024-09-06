import { expect, test } from 'vitest';
import { getMenuSections } from './menu-provider';

test('getMenuSections', async () => {
  // arrange
  // act
  const menuSections = await getMenuSections();

  // assert
  expect(menuSections).not.toBeNull();
  expect(menuSections[0].section).toBe('Leves');
});
