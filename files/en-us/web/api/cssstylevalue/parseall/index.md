---
title: CSSStyleValue.parseAll()
slug: Web/API/CSSStyleValue/parseAll
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSStyleValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - parseAll()
browser-compat: api.CSSStyleValue.parseAll
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`parseAll()`** method of the {{domxref("CSSStyleValue")}}
interface sets all occurrences of a specific CSS property to the specified value and
returns an array of {{domxref('CSSStyleValue')}} objects, each containing one of the
supplied values.

## Syntax

```js
parseAll(property, value)
```

### Parameters

- `property`
  - : A CSS property to set.
- `cssText`
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

- {{domxref("CSSStyleValue.parse()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
