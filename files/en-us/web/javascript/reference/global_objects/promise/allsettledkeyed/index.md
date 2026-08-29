---
title: Promise.allSettledKeyed()
short-title: allSettledKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettledKeyed
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Promise.allSettledKeyed
sidebar: jsref
---

{{SeeCompatTable}}

The **`Promise.allSettledKeyed()`** static method is like {{jsxref("Promise.allSettled()")}}, except that instead of using arrays/iterables as input/output, it uses objects. It takes an object where each own key is associated with a promise, and returns a single {{jsxref("Promise")}}. This returned promise fulfills when all of the input's promises settle, with an object of the same keys mapped to objects that describe the outcome of the corresponding promise.

Compared to {{jsxref("Promise.allSettled()")}}, `Promise.allSettledKeyed()` allows you to associate results with semantically meaningful keys, instead of arbitrary array ordering which can be difficult to maintain.

## Syntax

```js-nolint
Promise.allSettledKeyed(object)
```

### Parameters

- `object`
  - : An object. All of its [own enumerable properties](/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), whether the key is a string or a symbol, should have {{jsxref("Promise")}} values. These values are [awaited](/en-US/docs/Web/JavaScript/Reference/Operators/await), so other [thenables](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) are also resolved, while non-thenables are returned as-is.

### Return value

A {{jsxref("Promise")}} that is:

- **Already fulfilled**, if the `object` passed has no own enumerable properties.
- **Asynchronously fulfilled**, when all promises in the given `object` have settled (either fulfilled or rejected). The fulfillment value is an object, with the same keys in the same order as the given `object`, and each property's value being an object describing the outcome of the corresponding promise in `object`, regardless of completion order. Each outcome object has the following properties:
  - `status`
    - : A string, either `"fulfilled"` or `"rejected"`, indicating the eventual state of the promise.
  - `value`
    - : Only present if `status` is `"fulfilled"`. The value that the promise was fulfilled with.
  - `reason`
    - : Only present if `status` is `"rejected"`. The reason that the promise was rejected with.

  If the `object` passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) fulfilled.

## Description

The `Promise.allSettledKeyed()` method is one of the [promise concurrency](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) methods. It performs the same kind of task as {{jsxref("Promise.allSettled()")}}. `Promise.allSettledKeyed()` is preferred when you don't already have an array of promises and/or you are immediately destructuring the results; see {{jsxref("Promise.allKeyed()")}} for more description.

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

const result = await Promise.allSettledKeyed(promises);
console.log(result);
// {
//   a: { status: "fulfilled", value: "a" },
//   [sym]: { status: "fulfilled", value: "symbol" },
//   nested: {
//     b: <Promise>,
//   },
// }
```

For more examples related to concurrency behavior common to `Promise.allSettled()` and `Promise.allSettledKeyed()`, see {{jsxref("Promise.allSettled()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Promise.allSettledKeyed` in `core-js`](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims polyfill of `Promise.allSettledKeyed`](https://www.npmjs.com/package/promise.allsettledkeyed)
- {{jsxref("Promise")}}
- {{jsxref("Promise.allKeyed()")}}
- {{jsxref("Promise.allSettled()")}}
