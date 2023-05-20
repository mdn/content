---
title: "AggregateError: errors"
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/errors
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.AggregateError.errors
---

{{JSRef}}

The **`errors`** data property of an {{jsxref("AggregateError")}} instance contains an array representing the errors that were aggregated.

## Value

An {{jsxref("Array")}} containing values in the same order as the iterable passed as the first argument of the {{jsxref("AggregateError/AggregateError", "AggregateError()")}} constructor.

{{js_property_attributes(1, 0, 1)}}

## Examples

### Using errors

```js
try {
  throw new AggregateError(
    // An iterable of errors
    new Set([new Error("some error"), new Error("another error")]),
    "Multiple errors thrown",
  );
} catch (err) {
  console.log(err.errors);
  // [
  //   Error: some error,
  //   Error: another error
  // ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Control flow and error handling](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- {{jsxref("AggregateError")}}
- [`Error`: `cause`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
