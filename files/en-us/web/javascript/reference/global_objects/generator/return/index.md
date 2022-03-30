---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Generator.return
---
{{JSRef}}

The **`return()`** method returns the given value and finishes
the generator.

## Syntax

```js
return(value)
```

### Parameters

- `value`
  - : The value to return.

### Return value

The value that is given as an argument.

## Examples

### Using return()

The following example shows a simple generator and the `return` method.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();        // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }
```

If `return(value)` is called on a generator that is already in
"completed" state, the generator will remain in "completed" state.

If no argument is provided, the `value` property of the returned object will be "`undefined`". If an argument is provided, it will be set to the value
of the `value` property of the returned object.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

### Using return() with try...finally

When the `return` method is called on a generator that is suspended within a `try` block, execution in the generator proceeds to the `finally` block — since the `finally` block of `try...finally` statements always executes.

```js
function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 'cleanup';
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }

// Execution is suspended before the try...finally.
g1.return('early return'); // { value: 'early return', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// Execution is suspended within the try...finally.
g2.return('early return'); // { value: 'cleanup', done: false }

// The completion value is preserved
g2.next(); // { value: 'early return', done: true }

// Generator is in the completed state
g2.return('not so early return'); // { value: 'not so early return', done: true }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*")}}
