const Shapes = require('./shapes.js');

function setShape(response) {
    let userShape;

    switch (response.shape) {
        case 'Circle':
            userShape = new Shapes.Circle(response.shapeColor, response.text, response.textColor);
            break;
        case 'Square':
            userShape = new Shapes.Square(response.shapeColor, response.text, response.textColor);
            break;
        case 'Triangle':
            userShape = new Shapes.Triangle(response.shapeColor, response.text, response.textColor);
            break;
        default:
            console.error('Invalid shape');
            return '';
    }

    return userShape.render();
}

module.exports = setShape;
