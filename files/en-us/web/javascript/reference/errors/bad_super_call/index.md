---
title: "SyntaxError: super() is only valid in derived class constructors"
slug: Web/JavaScript/Reference/Errors/Bad_super_call
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "super() is only valid in derived class constructors" occurs when the {{jsxref("Operators/super", "super()")}} call is used somewhere that's not the body of a [constructor](/en-US/docs/Web/JavaScript/Reference/Classes/constructor) in a class with [`extends`](/en-US/docs/Web/JavaScript/Reference/Classes/extends) keyword.

## Message

```plain
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: super() is only valid in derived class constructors (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The `super()` call is used to invoke the base constructor of a derived class, so the base class can initialize the {{jsxref("Operators/this", "this")}} object. Using it anywhere else doesn't make sense.

`super()` can also be defined in an arrow function that's nested within the constructor. However, it cannot be defined in any other kind of function.

## Examples

### Invalid cases

You cannot call `super()` if the class has no `extends`, because there's no base class to call:

```js example-bad
class Base {
  constructor() {
    super();
  }
}
```

You cannot call `super()` in a class method, even if that method is called from the constructor:

```js example-ba
class Base {}

class Derived extends Base {
  constructor() {
    this.init();
  }

  init() {
    super();
  }
}
```

You cannot call `super()` in a function, even if the function is used as a constructor:

```js example-bad
function Base(x) {
  this.x = x;
}

function Derived() {
  super(1);
}

Object.setPrototypeOf(Derived.prototype, Base.prototype);
Object.setPrototypeOf(Derived, Base);
```

### Valid cases

You can call `super()` before calling any other method in the constructor:

```js example-good
class Base {}

class Derived extends Base {
  constructor() {
    super();
    this.init();
  }

  init() {
    // …
  }
}
```

You can call `super()` in an arrow function that's nested within the constructor:

```js example-good
class Base {}

class Derived extends Base {
  constructor() {
    const init = () => {
      super();
    };

    init();
  }
}
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
