---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
page-type: javascript-instance-method
browser-compat: javascript.builtins.Generator.next
---

{{JSRef}}

The **`next()`** method of {{jsxref("Generator")}} instances returns an
object with two properties `done` and `value`. You can also
provide a parameter to the `next` method to send a value to the
generator.

## Syntax

```js-nolint
generatorObject.next(value)
```

### Parameters

- `value`

  - : The value to send to the generator.

    The value will be assigned as a result of a `yield` expression. For
    example, in `variable = yield expression`, the value
    passed to the `.next()` function will be assigned to
    `variable`.

### Return value

An {{jsxref("Object")}} with two properties:

- `done`
  - : A boolean value:
    - `true` if the generator is past the end of its control flow. In this case `value` specifies the _return value_ of the generator (which may be undefined).
    - `false` if the generator is able to produce more values.
- `value`
  - : Any JavaScript value yielded or returned by the generator.

## Examples

### Using next()

The following example shows a simple generator and the object that the
`next` method returns:

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // Generator { }
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
```

### Using next() with a list

In this example, `getPage` takes a list and "paginates" it into chunks of size `pageSize`. Each call to `next` will yield one such chunk.

```js
function* getPage(list, pageSize = 1) {
  for (let index = 0; index < list.length; index += pageSize) {
    yield list.slice(index, index + pageSize);
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const page = getPage(list, 3); // Generator { }

page.next(); // { value: [1, 2, 3], done: false }
page.next(); // { value: [4, 5, 6], done: false }
page.next(); // { value: [7, 8], done: false }
page.next(); // { value: undefined, done: true }
```

### Sending values to the generator

In this example, `next` is called with a value.

> **Note:** The first call does not log anything, because the generator was not yielding anything initially.

```js
function* gen() {
  while (true) {
    const value = yield;
    console.log(value);
  }
}

const g = gen();
g.next(1); // Returns { value: undefined, done: false }
// No log at this step: the first value sent through `next` is lost
g.next(2); // Returns { value: undefined, done: false }
// Logs 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*")}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
