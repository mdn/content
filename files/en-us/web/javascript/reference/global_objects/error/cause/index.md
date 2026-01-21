---
title: "Error: cause"
short-title: cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Error.cause
sidebar: jsref
---

The **`cause`** data property of an {{jsxref("Error")}} instance indicates the specific original cause of the error.

It is used when catching and re-throwing an error with a more-specific or useful error message in order to still have access to the original error.

## Value

The value that was passed to the [`Error()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) constructor in the `options.cause` argument. It may not be present.

{{js_property_attributes(1, 0, 1)}}

## Description

The value of `cause` can be of any type. You should not make assumptions that the error you caught has an `Error` as its `cause`, in the same way that you cannot be sure the variable bound in the `catch` statement is an `Error` either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

The {{jsxref("SuppressedError")}} and {{jsxref("AggregateError")}} subclasses both serve the purpose of associating multiple errors. They both represent multiple failing sites: `SuppressedError` represents an error that occurred while handling another error, while `AggregateError` represents a collection of multiple, unrelated errors that occurred during the same operation. The `cause` property represents a single failing site, with the wrapper error only adding context to the cause and not representing an additional failure.

The following is typical usage of `cause`. There is a single failing site, which originates within `mainLogic()`. The `throw new Error()` statement merely wraps that original error to add context and does not constitute an additional failure.

```js
try {
  mainLogic();
} catch (err) {
  throw new Error("Main logic failed", { cause: err });
}
```

The following is typical usage of `SuppressedError`. There are two failing sites: one within `mainLogic()` and one within `cleanup()`. The `SuppressedError` instance associates the two errors.

```js
try {
  mainLogic();
} catch (primaryError) {
  try {
    cleanup();
  } catch (cleanupError) {
    throw new SuppressedError(
      cleanupError,
      primaryError,
      "Main logic failed; while handling that, cleanup also failed",
    );
  }
}
```

The following is typical usage of `AggregateError`. There are multiple failing sites within `mainLogic()`. The `AggregateError` instance associates all the errors.

```js
function mainLogic() {
  const errors = [];
  try {
    operation1();
  } catch (e1) {
    errors.push(e1);
  }
  try {
    operation2();
  } catch (e2) {
    errors.push(e2);
  }
  if (errors.length > 0) {
    throw new AggregateError(errors, "Multiple operations failed");
  }
}
```

## Examples

### Rethrowing an error with a cause

It is sometimes useful to catch an error and re-throw it with a new message.
In this case you should pass the original error into the constructor for the new `Error`, as shown.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

For a more detailed example see [Error > Differentiate between similar errors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Providing structured data as the error cause

Error messages written for human consumption may be inappropriate for machine parsing — since they're subject to rewording or punctuation changes that may break any existing parsing written to consume them. So when throwing an error from a function, as an alternative to a human-readable error message, you can instead provide the cause as structured data, for machine parsing.

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error("RSA key generation requires integer inputs.", {
      cause: { code: "NonInteger", values: [p, q] },
    });
  }
  if (!areCoprime(p, q)) {
    throw new Error("RSA key generation requires two co-prime integers.", {
      cause: { code: "NonCoprime", values: [p, q] },
    });
  }
  // rsa algorithm…
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
