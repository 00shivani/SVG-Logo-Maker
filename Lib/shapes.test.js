const { Circle, Square, Triangle } = require('./shapes');
const setShape = require('./setShape');

function normalizeSvgString(svgString) {
  return svgString.replace(/\s/g, '');
}
describe('Shape rendering', () => {
  test('Triangle rendering', () => {
    const shape = new Triangle('blue', 'ABC', 'white');
    const rendered = normalizeSvgString(shape.render());
    const expected = normalizeSvgString('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="blue"/><text x="100" y="185" font-size="70" text-anchor="middle" fill="white">ABC</text></svg>');
    expect(rendered).toEqual(expected);
  });
  test('Square rendering', () => {
    const shape = new Square('red', '123', 'black');
    const rendered = normalizeSvgString(shape.render());
    const expected = normalizeSvgString('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="red"/><text x="100" y="125" font-size="70" text-anchor="middle" fill="black">123</text></svg>');
    expect(rendered).toEqual(expected);
  });
  test('Circle rendering', () => {
    const shape = new Circle('green', 'XYZ', 'yellow');
    const rendered = normalizeSvgString(shape.render());
    const expected = normalizeSvgString('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="green"/><text x="150" y="125" font-size="70" text-anchor="middle" fill="yellow">XYZ</text></svg>');
    expect(rendered).toEqual(expected);
  });
});
