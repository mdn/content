---
title: Promise.allSettledKeyed()
short-title: allSettledKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettledKeyed
page-type: javascript-static-method
browser-compat: javascript.builtins.Promise.allSettledKeyed
sidebar: jsref
---

The **`Promise.allSettledKeyed()`** static method is like {{jsxref("Promise.allSettled()")}}, except that it takes an object of promises and returns a promise of an object. This allows you to associate results with semantically meaningful keys, instead of arbitrary array ordering which can be difficult to maintain.

## Syntax

```js-nolint
Promise.allSettledKeyed(object)
```

### Parameters

- `object`
  - : An ordinary object. All of its [own enumerable properties](/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), whether the key is a string or a symbol, should have {{jsxref("Promise")}} values.

### Return value

A {{jsxref("Promise")}} that is:

- **Already fulfilled**, if the `object` passed has no own enumerable properties.
- **Asynchronously fulfilled**, when all promises in the given `object` have settled (either fulfilled or rejected). The fulfillment value is an object, with the same keys in the same order as the given `object`, and each property's value being an object describing the outcome of one promise in the `iterable`, in the order of the promises passed, regardless of completion order. Each outcome object has the following properties:
  - `status`
    - : A string, either `"fulfilled"` or `"rejected"`, indicating the eventual state of the promise.
  - `value`
    - : Only present if `status` is `"fulfilled"`. The value that the promise was fulfilled with.
  - `reason`
    - : Only present if `status` is `"rejected"`. The reason that the promise was rejected with.

  If the `object` passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) fulfilled.

## Description

The `Promise.allSettledKeyed()` method is one of the [promise concurrency](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) methods. It performs the same kind of task as {{jsxref("Promise.allSettled()")}}. `Promise.allSettledKeyed()` is preferred when you don't already have an array of promises and/or you are immediately destructuring the results; ead {{jsxref("Promise.allKeyed()")}} for more description.

## Examples

### Using Promise.allSettledKeyed()

The `Promise.allSettledKeyed()` method takes an object and processes all of its own enumerable properties.

```js
function delayed(value, timeout) {
  return new Promise((res) => setTimeout(() => res(value), timeout));
}

const sym = Symbol();

const promises = {
  a: delayed("a", 500),
  // Symbol properties are processed
  [sym]: delayed("symbol", 300),
  // Nested properties are not processed; this whole object is treated as
  // an already-resolved value and returned as-is
  nested: {
    b: delayed("b", 100),
  },
};

const result = await Promise.allKeyed(promises);
console.log(result);
// {
//   a: { status: "fulfilled", value: "a" },
//   [sym]: { status: "fulfilled", value: "symbol" },
//   nested: {
//     b: <Promise>,
//   },
// }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Promise.allKeyed()")}}
- {{jsxref("Promise.allSettled()")}}
