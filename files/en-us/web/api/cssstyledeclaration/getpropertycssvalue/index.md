---
title: CSSStyleDeclaration.getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
tags:
  - API
  - CSSOM
  - Method
  - Deprecated
  - Reference
browser-compat: api.CSSStyleDeclaration.getPropertyCSSValue
---
{{ APIRef("CSSOM") }} {{deprecated_header}}

The **CSSStyleDeclaration.getPropertyCSSValue()**
method interface returns a {{domxref('CSSValue')}} containing the CSS value for a
property. Note that it returns `null` if the property name is a
shorthand property.

> **Note:** This interface was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - {{domxref("CSSStyleDeclaration.getPropertyValue()")}} of the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - {{domxref("Element.computedStyleMap()")}} of the modern [CSS Typed Object Model API](/en-US/docs/Web/CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js
var value = style.getPropertyCSSValue(property);
```

### Parameters

- *`property`* is a {{domxref('DOMString')}} representing the
  property name to be retrieved.

### Return value

- `value` is a {{domxref('CSSValue')}} containing the CSS value
  for a property. If none exists, returns `null`.

## Example

The following JavaScript code gets an object containing the computed RGB values of
the `color` CSS property:

```js
var style = window.getComputedStyle(elem, null);
var rgbObj = style.getPropertyCSSValue('color').getRGBColorValue();
```

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
