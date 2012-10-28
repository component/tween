
/**
 * Module dependencies.
 */

var Emitter = require('emitter')
  , ease = require('ease');

module.exports = Tween;

function Tween(obj) {
  if (!(this instanceof Tween)) return new Tween(obj);
  this._from = obj;
  this.reset();
  this.ease('linear');
  this.duration(500);
}

Emitter(Tween.prototype);

Tween.prototype.reset = function(){
  this._curr = clone(this._from);
  this._done = false;
  this._start = Date.now();
  return this;
};

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
  this._ease = fn;
  return this;
};

Tween.prototype.step = function(){
  if (this._done) return;

  // duration
  var duration = this._duration;
  var now = Date.now();
  var diff = now - this._start;
  var done = diff >= duration;

  // complete
  if (done) {
    this._from = this._curr;
    this._done = true;
    this.emit('end')
    return;
  }

  // tween
  var obj = this._from;
  var to = this._to;
  var curr = this._curr;
  var fn = this._ease;

  for (var key in obj) {
    var val = obj[key];
    curr[key] = fn(diff, val, to[key] - curr[key], duration);
  }

  this._update(curr);
};

Tween.prototype.update = function(fn){
  if (0 == arguments.length) return this.step();
  this._update = fn;
  return this;
};


Tween.prototype.start = function(){
  this._start = Date.now();
};

/**
 * Clone `obj`.
 * 
 * @api private
 */

function clone(obj) {
  var ret = {};
  for (var key in obj) ret[key] = obj[key];
  return ret;
}