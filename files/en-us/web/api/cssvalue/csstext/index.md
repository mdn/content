---
title: CSSValue.cssText
slug: Web/API/CSSValue/cssText
page-type: web-api-instance-property
tags:
  - API
  - CSSValue
  - Property
  - Reference
  - cssText
  - Deprecated
browser-compat: api.CSSValue.cssText
---
{{APIRef("CSSOM")}}{{Deprecated_header}}

The **`cssText`** property of the {{domxref("CSSValue")}}
interface represents the current computed CSS property value.

> **Note:** This property was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Value

A string representing the current CSS property value.

## Examples

```js
const styleDeclaration = document.styleSheets[0].cssRules[0].style;
const cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssText);
```

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](CSS_Typed_OM_API) that is now on the standard track.

## See also

- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}}
