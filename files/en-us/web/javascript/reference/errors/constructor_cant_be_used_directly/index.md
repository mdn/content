---
title: "TypeError: Iterator/AsyncIterator constructor can't be used directly"
slug: Web/JavaScript/Reference/Errors/Constructor_cant_be_used_directly
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "Iterator constructor can't be used directly" or "AsyncIterator constructor can't be used directly" occurs when you try to use the {{jsxref("Iterator/Iterator", "Iterator()")}} or {{jsxref("AsyncIterator/AsyncIterator", "AsyncIterator()")}} constructors directly to create instances. These constructors are _abstract classes_ and should only be inherited from.

## Message

```plain
TypeError: Abstract class Iterator not directly constructable (V8-based)
TypeError: Iterator constructor can't be used directly (Firefox)
TypeError: Iterator cannot be constructed directly (Safari)

TypeError: Abstract class AsyncIterator not directly constructable (V8-based)
TypeError: AsyncIterator constructor can't be used directly (Firefox)
TypeError: AsyncIterator cannot be constructed directly (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

The {{jsxref("Iterator")}} and {{jsxref("AsyncIterator")}} constructors are abstract classes and should not be used directly. They check the value of [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) and throw if it is the same as the constructor itself. The only way to use these constructors is to inherit from them in a subclass and call `super()` in the subclass constructor. The subclass must also define a `next()` method to be useful.

## Examples

### Invalid cases

```js example-bad
new Iterator();
```

### Valid cases

```js example-good
class MyIterator extends Iterator {
  #step;
  #end;
  constructor(start, end) {
    // Implicitly calls new Iterator(), but with a different `new.target`
    super();
    this.#step = start;
    this.#end = end;
  }
  next() {
    if (this.#step < this.#end) {
      return { value: this.#step++, done: false };
    } else {
      return { done: true };
    }
  }
}

new MyIterator();
```

## See also

- {{jsxref("AsyncIterator")}}
- {{jsxref("Iterator")}}
