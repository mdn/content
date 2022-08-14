---
title: CSSPrimitiveValue.getStringValue()
slug: Web/API/CSSPrimitiveValue/getStringValue
page-type: web-api-instance-method
tags:
  - API
  - CSSPrimitiveValue
  - Method
  - getStringValue
  - Deprecated
browser-compat: api.CSSPrimitiveValue.getStringValue
---
{{APIRef("CSSOM")}}{{deprecated_header}}

The **`getStringValue()`** method of the
{{domxref("CSSPrimitiveValue")}} interface is used to get a string value. If this CSS
value doesn't contain a string value, a {{domxref("DOMException")}} is raised.

> **Note:** This method was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js
getStringValue()
```

### Parameters

None.

### Return value

A `string` value.

### Exceptions

| **Type**       | **Description**                                                                    |
| -------------- | ---------------------------------------------------------------------------------- |
| `DOMException` | An `INVALID_ACCESS_ERR` is raised if the CSS value doesn't contain a string value. |

## Examples

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("display");
console.log(cssValue.getStringValue());
```

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
