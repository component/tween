
/**
 * Module dependencies.
 */

var ease = require('ease');

module.exports = Tween;

function Tween(obj) {
  if (!(this instanceof Tween)) return new Tween(val);
  this._start = obj;
  this.ease('linear');
  this.duration(500);
}

Tween.prototype.to = function(obj){
  this._to = obj;
  return this;
};

Tween.prototype.duration = function(ms){
  this._duration = ms;
  return this;
};

Tween.prototype.ease = function(fn){
  fn = 'function' == typeof fn ? fn : ease[fn];
  if (!fn) throw new TypeError('invalid easing function');
  this.ease = fn;
};

Tween.prototype.update = function(fn){
  this._update = fn;
  return this;
};


Tween.prototype.start = function(){
  
};
