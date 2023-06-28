---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Number.NaN
---

{{JSRef}}

The **`Number.NaN`** static data property represents Not-A-Number, which is equivalent to {{jsxref("NaN")}}. For more information about the behaviors of `NaN`, see the [description for the global property](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

{{EmbedInteractiveExample("pages/js/number-nan.html", "taller")}}

## Value

The number value {{jsxref("NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Description

Because `NaN` is a static property of {{jsxref("Number")}}, you always use it as `Number.NaN`, rather than as a property of a number value.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
