import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('c', {}, [])).toBe('c');
  });

  test('with additional class', () => {
    expect(classNames('c', {}, ['c1', 'c2']))
      .toBe('c c1 c2');
  });

  test('with mods', () => {
    expect(classNames('c', { hovered: true, selected: true }, ['c1', 'c2']))
      .toBe('c c1 c2 hovered selected');
  });

  test('with false mod', () => {
    expect(classNames('c', { hovered: true, selected: false }, ['c1', 'c2']))
      .toBe('c c1 c2 hovered');
  });

  test('with undefined mod', () => {
    expect(classNames(
      'c',
      { hovered: undefined, selected: true },
      ['c1', 'c2'],
    ))
      .toBe('c c1 c2 selected');
  });
});
