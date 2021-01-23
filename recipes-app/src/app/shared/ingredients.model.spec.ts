import { Ingredients } from './ingredients.model';

describe('Ingredients', () => {
  it('should create an instance', () => {
    expect(new Ingredients('sdsad', 55)).toBeTruthy();
  });
});
