---
title: SuppressedError
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError
page-type: javascript-class
browser-compat: javascript.builtins.SuppressedError
sidebar: jsref
---

The **`SuppressedError`** object represents an error generated while handing another error. It is generated during resource disposal using {{jsxref("Statements/using", "using")}} or {{jsxref("Statements/await_using", "await using")}}.

Compared to {{jsxref("AggregateError")}}, `SuppressedError` is used to represent a single error that is suppressed by another error, while `AggregateError` represents a list of unrelated errors. It is possible, though, for a `SuppressedError` to contain a chain of suppressed errors (`e.suppressed.suppressed.suppressed...`). It is also semantically different from {{jsxref("Error/cause", "cause")}} because the error is not _caused_ by another error, but _happens when_ handling another error.

`SuppressedError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("SuppressedError/SuppressedError", "SuppressedError()")}}
  - : Creates a new `SuppressedError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `SuppressedError.prototype` and shared by all `SuppressedError` instances.

- {{jsxref("Object/constructor", "SuppressedError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `SuppressedError` instances, the initial value is the {{jsxref("SuppressedError/SuppressedError", "SuppressedError")}} constructor.
- {{jsxref("Error/name", "SuppressedError.prototype.name")}}
  - : Represents the name for the type of error. For `SuppressedError.prototype.name`, the initial value is `"SuppressedError"`.

> [!NOTE]
> `SuppressedError` never has the {{jsxref("Error/cause", "cause")}} property, because the semantics of `cause` overlaps with `suppressed`.

These properties are own properties of each `SuppressedError` instance.

- {{jsxref("SuppressedError/error", "error")}}
  - : A reference to the error that results in the suppression.
- {{jsxref("SuppressedError/suppressed", "suppressed")}}
  - : A reference to the error that is suppressed by `error`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Catching an SuppressedError

A `SuppressedError` is thrown when an error occurs during [resource disposal](/en-US/docs/Web/JavaScript/Guide/Resource_management). Throwing an error causes scope cleanup, and each disposer during the cleanup can throw its own error. All these errors are collected into a chain of `SuppressedError` instances, with the original error as the `suppressed` property and the new error thrown by the next disposer as the `error` property.

```js
try {
  using resource1 = {
    [Symbol.dispose]() {
      throw new Error("Error while disposing resource1");
    },
  };
  using resource2 = {
    [Symbol.dispose]() {
      throw new Error("Error while disposing resource2");
    },
  };
  throw new Error("Original error");
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "An error was suppressed during disposal"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: Error while disposing resource1
  console.log(e.suppressed); // SuppressedError: An error was suppressed during disposal
  console.log(e.suppressed.error); // Error: Error while disposing resource2
  console.log(e.suppressed.suppressed); // Error: Original error
}
```

The chain looks like this:

```plain
       SuppressedError --suppressed--> SuppressedError --suppressed--> Original error
              |                               |
            error                           error
              v                               v
Error while disposing resource1   Error while disposing resource2
    (Disposal happens later)        (Disposal happens earlier)
```

### Creating an SuppressedError

```js
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: "New error"
  console.log(e.suppressed); // Error: "Original error"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `SuppressedError` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- {{jsxref("Error")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("DisposableStack")}}
- {{jsxref("AsyncDisposableStack")}}
