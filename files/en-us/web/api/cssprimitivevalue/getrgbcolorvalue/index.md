---
title: CSSPrimitiveValue.getRGBColorValue()
slug: Web/API/CSSPrimitiveValue/getRGBColorValue
page-type: web-api-instance-method
tags:
  - API
  - CSSPrimitiveValue
  - Method
  - getRGBColorValue
  - Deprecated
browser-compat: api.CSSPrimitiveValue.getRGBColorValue
---
{{APIRef("CSSOM")}}{{deprecated_header}}

The **`getRGBColorValue()`** method of the
{{domxref("CSSPrimitiveValue")}} interface is used to get an RGB color value. If this
CSS value doesn't contain a RGB color value, a {{domxref("DOMException")}} is raised.
Modification to the corresponding style property can be achieved using the
{{domxref("RGBColor")}} interface.

> **Note:** This method was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js
getRGBColorValue()
```

### Parameters

None.

### Return value

An {{domxref("RGBColor")}} object representing the color value.

### Exceptions

| **Type**       | **Description**                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | An `INVALID_ACCESS_ERR` is raised if the attached property can't return an RGB color value (i.e. this is not `CSS_RGBCOLOR`). |

## Examples

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("color");
console.log(cssValue.getRGBColorValue());
```

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
