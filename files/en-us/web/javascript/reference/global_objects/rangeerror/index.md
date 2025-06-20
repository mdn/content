---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
page-type: javascript-class
browser-compat: javascript.builtins.RangeError
---

{{JSRef}}

The **`RangeError`** object indicates an error when a value is not in the set or range of allowed values.

## Description

A `RangeError` is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value.

This can be encountered when:

- passing a value that is not one of the allowed string values to {{jsxref("String.prototype.normalize()")}}, or
- when attempting to create an array of an illegal length with the {{jsxref("Array")}} constructor, or
- when passing bad values to the numeric methods {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}} or {{jsxref("Number.prototype.toPrecision()")}}.

`RangeError` is a {{Glossary("serializable object")}}, so it can be cloned with {{DOMxRef("Window.structuredClone", "structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

`RangeError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : Creates a new `RangeError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `RangeError.prototype` and shared by all `RangeError` instances.

- {{jsxref("Object/constructor", "RangeError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `RangeError` instances, the initial value is the {{jsxref("RangeError/RangeError", "RangeError")}} constructor.
- {{jsxref("Error/name", "RangeError.prototype.name")}}
  - : Represents the name for the type of error. For `RangeError.prototype.name`, the initial value is `"RangeError"`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Using RangeError (for numeric values)

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

### Using RangeError (for non-numeric values)

```js
function check(value) {
  if (!["apple", "banana", "carrot"].includes(value)) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
