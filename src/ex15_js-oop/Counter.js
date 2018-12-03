function Calculaator() {
    this._result = 0;
}
Calculaator.prototype.add = function(a) {
    this._result += a;
    return this;
}
Calculaator.prototype.subtract = function(a) {
    this._result -= a;
    return this;
}
Calculaator.prototype.multiply = function(a) {
    this._result *= a;
    return this;
}
Calculaator.prototype.divide = function(a) {
    this._result /= a;
    return this;
}
Calculaator.prototype.reset = function() {
    this._result = 0;
    return this;
}
Calculaator.prototype.getResult = function() {
    return this._result;
}
Calculaator.prototype.setState = function(a) {
    this._result = a;
    return this;
}

function SimpleCalculaator() {
    Calculaator.apply(this);
}
SimpleCalculaator.prototype = Object.create(Calculaator.prototype);
SimpleCalculaator.prototype.constructor = SimpleCalculaator;

SimpleCalculaator.prototype.percent = function(a) {
    this._result = a/100*this._result;
    return this;
}

function EngineCalculaator() {
    SimpleCalculaator.apply(this);
}
EngineCalculaator.prototype = Object.create(SimpleCalculaator.prototype);
EngineCalculaator.prototype.constructor = EngineCalculaator;
EngineCalculaator.prototype.log = function(a) {
    this._result = Math.log(this._result, a);
    return this;
}
EngineCalculaator.prototype.trunc = function() {
    this._result = Math.trunc(this._result);
    return this;
}

var calculaator = new Calculaator();
var simpleCalculaator = new SimpleCalculaator();
var EngineCalculaator = new EngineCalculaator();

console.log(calculaator.add(10).subtract(5).multiply(3).divide(5).getResult());
console.log(simpleCalculaator.add(10).subtract(5).multiply(3).divide(3).percent(50).getResult());
console.log(EngineCalculaator.add(10).subtract(5).multiply(3).divide(3).percent(50).log(2).trunc().getResult());