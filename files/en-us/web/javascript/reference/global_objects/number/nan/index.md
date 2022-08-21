---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
tags:
  - JavaScript
  - Number
  - Property
browser-compat: javascript.builtins.Number.NaN
---
{{JSRef}}

The **`Number.NaN`** property represents Not-A-Number. Equivalent of {{jsxref("NaN")}}.

{{EmbedInteractiveExample("pages/js/number-nan.html", "taller")}}

You do not have to create a {{jsxref("Number")}} object to access this static property (use `Number.NaN`).

{{js_property_attributes(0, 0, 0)}}

## Examples

### Checking whether values are numeric

```js
function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

### Testing against NaN

See [Testing against NaN](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#testing_against_nan) on the `NaN` page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The global {{jsxref("NaN")}} object.
- The {{jsxref("Number")}} object it belongs to.
