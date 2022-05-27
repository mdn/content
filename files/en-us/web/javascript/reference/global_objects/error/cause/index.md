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

The value can be of any type.

## Examples

### Rethrowing an error with a `cause`

It is sometimes useful to catch an error and re-throw it with a new message.
In this case you should pass the original error into the constructor for the new `Error`, as shown.

```js
  try {
    frameworkThatCanThrow();
  } catch (err) {
    throw new Error('New error message', { cause: err });
  }
```

For a more detailed example see [Error > Differentiate between similar errors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
