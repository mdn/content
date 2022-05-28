---
title: Error.prototype.cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
tags:
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.Error.cause
---
{{JSRef}}

The **`cause`** property indicates the specific original cause of an error.

It is used when catching and re-throwing an error with a more-specific or useful error message in order to still have access to the the original error.

## Value

This is the value that was passed to the [`Error()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) in the `options.cause` argument.

The value can be of any type. You should not make assumptions that the error you caught has an `Error` as its `cause`, in the same way that you cannot be sure the variable bound in the `catch` statement is an `Error` either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as cause.

## Examples

### Rethrowing an error with a `cause`

It is sometimes useful to catch an error and re-throw it with a new message.
In this case you should pass the original error into the constructor for the new `Error`, as shown.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error('Connecting to database failed.', { cause: err });
}
```

For a more detailed example see [Error > Differentiate between similar errors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Providing structured data as the error cause

Since error messages are written for human consumption, they are usually seen as unstable and inappropriate for machine parsing. When throwing an error from a function, you can provide its cause as structured data for algorithms to handle.

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error('RSA key generation requires integer inputs.', {
      cause: { code: 'NonInteger', value: [p, q] },
    });
  }
  if (!areCoprime(p, q)) {
    throw new Error('RSA key generation requires two co-prime integers.', {
      cause: { code: 'NonCoprime', values: [p, q] },
    })
  }
  // rsa algorithm...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
