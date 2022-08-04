---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Reference
browser-compat: javascript.builtins.Promise.reject
---
{{JSRef}}

The **`Promise.reject()`** method returns a
`Promise` object that is rejected with a given reason.

{{EmbedInteractiveExample("pages/js/promise-reject.html")}}

## Syntax

```js
Promise.reject(reason)
```

### Parameters

- `reason`
  - : Reason why this `Promise` rejected.

### Return value

A {{jsxref("Promise")}} that is rejected with the given reason.

## Description

The static `Promise.reject` function returns a `Promise` that is
rejected. For debugging purposes and selective error catching, it is useful to make
`reason` an `instanceof` {{jsxref("Error")}}.

## Examples

### Using the static Promise.reject() method

```js
Promise.reject(new Error("fail")).then(
  () => {
    // not called
  },
  (error) => {
    console.error(error); // Stacktrace
  },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
