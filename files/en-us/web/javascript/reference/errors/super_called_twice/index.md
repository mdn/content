---
title: "ReferenceError: super() called twice in derived class constructor"
slug: Web/JavaScript/Reference/Errors/Super_called_twice
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "super() called twice in derived class constructor" occurs when the {{jsxref("Operators/super", "super()")}} is called a second time for a given derived class constructor.

## Message

```plain
ReferenceError: Super constructor may only be called once (V8-based)
ReferenceError: super() called twice in derived class constructor (Firefox)
ReferenceError: 'super()' can't be called more than once in a constructor. (Safari)
```

## Error type

{{jsxref("ReferenceError")}}

## What went wrong?

The `super()` call can only be called at most once for each `new` call to a derived class constructor. This is because `super()` is responsible for initializing the parent class, and calling it more than once would result in the parent constructor being called multiple times.

The best way to prevent this is to ensure that `super()` is placed outside of any control flow structure. Otherwise, make sure that all code paths in the constructor lead to only one `super()` call.

The `super()` call can be "saved" in an arrow function nested within the constructor. Then, when you call the arrow function, you will also call `super()`, and the same rule applies: the arrow function can only be called at most once.

## Examples

### Invalid cases

```js example-bad
class Base {}

class Derived extends Base {
  constructor() {
    super();
    super();
  }
}
```

Sometimes the bug may be more subtle.

```js example-bad
class Base {
  constructor(flavor) {
    // Do something with the flavor
  }
}

class Derived extends Base {
  constructor(flavors) {
    if (flavors.includes("chocolate")) {
      super("chocolate");
    }
    if (flavors.includes("vanilla")) {
      super("vanilla");
    }
  }
}
```

Originally, `flavors` may never simultaneously include both "chocolate" and "vanilla", but if that ever happens, the constructor will call `super()` twice. You need to rethink about how your class should be structured to avoid this issue.

### Valid cases

```js example-good
class Base {}

class Derived extends Base {
  constructor() {
    super();
    // More initialization logic
  }
}
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
