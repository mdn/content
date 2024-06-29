---
title: "SuppressedError: error"
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/error
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.SuppressedError.error
---

{{JSRef}}

The **`error`** data property of a {{jsxref("SuppressedError")}} instance contains a reference to the error that results in the suppression.

## Value

Any value. Like {{jsxref("Error/cause", "cause")}}, you cannot assume it's an {{jsxref("Error")}} instance, although it usually is the case.

{{js_property_attributes(1, 0, 1)}}

## Examples

### Using error

```js
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e.error); // Error: "New error"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Control flow and error handling](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) guide
- {{jsxref("SuppressedError")}}
- [`Error`: `cause`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
