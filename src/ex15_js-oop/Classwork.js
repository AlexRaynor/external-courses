function Shape(type) {
    this._edges = [];
    this._type = type;
}

Shape.prototype.getType = function() {
    return this._type;
}

Shape.prototype.draw = function() {
    console.log(this._type + " drawing");
}

Shape.prototype.getPerimeter = function() {
    return this._edges.reduce((acc, val) => acc + val, 0);
}

function Triangle(a,b,c) {
    Shape.call(this, "triangle");
    this._edges = [a,b,c];
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

function quadrangle(a,b,c,d) {
    Shape.call(this, "quadrangle");
    this._edges = [a,b,c,d];
}

quadrangle.prototype =  Object.create(Shape.prototype);
quadrangle.prototype.constructor = quadrangle;

function Quadrate(a) {
    Shape.call(this, "Quadrate");
    this._a = a;
    this._edges = [a,a,a,a];
}
Quadrate.prototype =  Object.create(quadrangle.prototype);
Quadrate.prototype.constructor = Quadrate;
Quadrate.prototype.getSquare = function() {
    return (this._a*2);
}
var quadrangle = new quadrangle(3,7,2,8);
var triangle = new Triangle(2,9,5);
var Quadrate = new Quadrate(5);

console.log(triangle.getType());
console.log(triangle.getPerimeter());
triangle.draw();
console.log(quadrangle.getType());
console.log(quadrangle.getPerimeter());
quadrangle.draw();
console.log(Quadrate.getType());
console.log(Quadrate.getPerimeter());
console.log(Quadrate.getSquare());
Quadrate.draw();