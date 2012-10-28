
/**
 * Module dependencies.
 */

var ease = require('ease');

module.exports = Tween;

function Tween(val) {
  if (!(this instanceof Tween)) return new Tween(val);
  this._start = val;
  this.ease('linear');
}

Tween.prototype.to = function(val){
  this._to = val;
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
