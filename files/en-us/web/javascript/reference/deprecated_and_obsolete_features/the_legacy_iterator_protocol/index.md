---
title: The legacy Iterator protocol
slug: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
tags:
  - ES2015
  - Guide
  - JavaScript
  - Legacy Iterator
---
{{jsSidebar("More")}}

> **Warning:** The legacy iterator protocol was a SpiderMonkey-specific feature, which is removed in Firefox 58+. For future-facing usages, consider using [for..of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops and the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

## The deprecated Firefox-only iterator protocol

Firefox, prior to version 26 implemented another iterator protocol that is similar to the standard [ES2015 Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

An object is an legacy iterator when it implements a `next()` method with the following semantics, and throws `StopIteration` at the end of iteration.

| Property | Value                                            |
| -------- | ------------------------------------------------ |
| `next`   | A zero arguments function that returns an value. |

### Difference between legacy and ES2015 iterator protocols

- The value was returned directly as a return value of calls to `next`, instead of the `value` property of a placeholder object
- Iteration termination was expressed by throwing a `StopIteration` object.

### Simple example with the old protocol

```js
function makeIterator(array) {
  let nextIndex = 0;

  return {
    next() {
      if (nextIndex < array.length) {
        return array[nextIndex++];
      } else {
        throw new StopIteration();
      }
    }
  }
}

const it = makeIterator(['yo', 'ya']);

console.log(it.next()); // 'yo'
console.log(it.next()); // 'ya'
try {
  console.log(it.next());
} catch (e) {
  if (e instanceof StopIteration) {
    // iteration over
  }
}
```

## See also

- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- More [deprecated and obsolete features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
