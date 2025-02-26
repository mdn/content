---
title: "ReferenceError: must call super constructor before using 'this' in derived class constructor"
slug: Web/JavaScript/Reference/Errors/Super_not_called
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "must call super constructor before using 'this' in derived class constructor" occurs when the {{jsxref("Operators/super", "super()")}} is not called for a given derived class constructor, and the derived constructor tries to access the value of {{jsxref("Operators/this", "this")}}, or the derived constructor has already returned and the return value is not an object.

## Message

```plain
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor (V8-based)
ReferenceError: must call super constructor before using 'this' in derived class constructor (Firefox)
ReferenceError: 'super()' must be called in derived constructor before accessing |this| or returning non-object. (Safari)
```

## Error type

{{jsxref("ReferenceError")}}

## What went wrong?

The `super()` call can only be called at most once for each `new` call to a derived class constructor. Often, you need to call it exactly once, because if you don't call it, the parent constructor cannot initialize the value of `this`, so you cannot access `this` in the derived constructor and the `this` is not considered a valid constructed object (and throws if the derived constructor completes in this state). The way around it is to return an object from the derived class constructor, in which case the object returned will be used as the constructed object instead of `this`, allowing you to not call `super()`. This is rarely done though.

## Examples

### Invalid cases

```js example-bad
class Base {
  constructor() {
    this.x = 1;
  }
}

class Derived extends Base {
  constructor() {
    console.log(this.x);
    // The Base constructor is not called yet, so this.x is undefined
    // ReferenceError: must call super constructor before using 'this' in derived class constructor
  }
}
```

### Valid cases

```js example-good
class Base {
  constructor() {
    this.x = 1;
  }
}

class Derived extends Base {
  constructor() {
    super();
    console.log(this.x); // 1
  }
}
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
