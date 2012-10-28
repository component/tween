
/**
 * Module dependencies.
 */

var ease = require('ease');

module.exports = Tween;

function Tween() {
  
}

Tween.prototype.ease = function(fn){
  fn = 'function' == typeof fn ? fn : ease[fn];
  if (!fn) throw new TypeError('invalid easing function');
  this.ease = fn;
};
