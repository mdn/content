---
title: "CSSPrimitiveValue: getRectValue() method"
short-title: getRectValue()
slug: Web/API/CSSPrimitiveValue/getRectValue
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.CSSPrimitiveValue.getRectValue
---

{{APIRef("CSSOM")}}{{deprecated_header}}

The **`getRectValue()`** method of the
{{domxref("CSSPrimitiveValue")}} interface is used to get a rect value. If this CSS
value doesn't contain a rect value, a {{domxref("DOMException")}} is raised.
Modification to the corresponding style property can be achieved using the
{{domxref("Rect")}} interface.

> **Note:** This method was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js-nolint
getRectValue()
```

### Parameters

None.

### Return value

A {{domxref("Rect")}} object representing the rect value.

### Exceptions

| **Type**       | **Description**                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `DOMException` | An `INVALID_ACCESS_ERR` is raised if the CSS value doesn't contain a Rect value. (i.e. this is not `CSS_RECT`). |

## Examples

```js
const cs = window.getComputedStyle(document.getElementById("clippedDiv"));
const cssValue = cs.getPropertyCSSValue("clip");
console.log(cssValue.getRectValue());
```

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
