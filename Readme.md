
# tween

  Motion tween component using &quot;ease&quot;

## Installation

    $ component install component/tween

## API

### Tween(obj)

  Initialize a new `Tween` with `obj`.

### Tween#reset()

  Reset the tween.

### Tween#to(obj:Object)

  Tween to `obj` and reset internal state.
  
     tween.to({ x: 50, y: 100 })

### Tween#duration(ms:Number)

  Set duration to `ms` [500].

### Tween#ease(fn:String|Function)

  Set easing function to `fn`.
  
     tween.ease('in-out-sine')

### Tween#update(fn:Function)

  Set update function to `fn` or 
  when no argument is given this performs
  a "step".

## License

  MIT
