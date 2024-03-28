---
title: "CSSStyleValue: parseAll() static method"
short-title: parseAll()
slug: Web/API/CSSStyleValue/parseAll_static
page-type: web-api-static-method
browser-compat: api.CSSStyleValue.parseAll_static
---

{{APIRef("CSS Typed Object Model API")}}

The **`parseAll()`** static method of the {{domxref("CSSStyleValue")}}
interface sets all occurrences of a specific CSS property to the specified value and
returns an array of {{domxref('CSSStyleValue')}} objects, each containing one of the
supplied values.

## Syntax

```js-nolint
CSSStyleValue.parseAll(property, value)
```

### Parameters

- `property`
  - : A CSS property to set.
- `value`
  - : A comma-separated string containing one or more values that apply to the provided
    property.

### Return value

An array of `CSSStyleValue` objects, each containing one of the supplied
values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`CSSStyleValue.parse()`](/en-US/docs/Web/API/CSSStyleValue/parse_static)
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
