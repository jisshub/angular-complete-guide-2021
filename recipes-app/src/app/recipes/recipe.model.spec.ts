import { Recipe } from './recipe.model';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new Recipe('jissmon', 'dasd', 'sadsaas')).toBeTruthy();
  });
});
