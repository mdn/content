---
title: "TypeError: Initializing an object twice is an error with private fields/methods"
slug: Web/JavaScript/Reference/Errors/Private_double_initialization
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "Initializing an object twice is an error with private fields/methods" occurs when an object that was created via a class constructor goes through the class construction again, and the class contains a [private property](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties). This is usually caused by the [return override](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) trick.

## Message

```plain
TypeError: Cannot initialize #x twice on the same object (V8-based)
TypeError: Initializing an object twice is an error with private fields (Firefox)
TypeError: Cannot redefine existing private field (evaluating 'super(o)') (Safari)

TypeError: Cannot initialize private methods of class X twice on the same object (V8-based)
TypeError: Initializing an object twice is an error with private methods (Firefox)
TypeError: Cannot install same private methods on object more than once (evaluating 'super(o)') (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

For any object, if it already contains a private field or method, it would be an error to install the same field again. Private properties are installed on the value of `this` when the class constructor is called, so this error could happen if the `this` value is an already-constructed instance of this class.

Usually, `this` in a constructor is a newly created object which doesn't have any preexisting properties. However, it can be overridden by the return value of the base class. If the base class returns another object, that object would replace the current object as the value of `this`:

```js
class Base {
  constructor(o) {
    // This object will become the this value of any subclass
    return o;
  }
}

class Derived extends Base {
  #x = 0;
}
```

If you call `new Derived(anyObject)`, where `anyObject` is not an instance of `Derived`, the `Derived` constructor will be called with `anyObject` as the `this` value, and therefore install the `#x` private field on `anyObject`. This is the "return override" trick, which allows you to define arbitrary information on unrelated objects. However, if you call `new Derived(new Derived())`, or call `new Derived(anyObject)` again, the `Derived` constructor will try to install the `#x` private field again on an object which already has the `#x` private field, causing this error.

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [Private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
