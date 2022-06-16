---
title: CSSPrimitiveValue.getCounterValue()
slug: Web/API/CSSPrimitiveValue/getCounterValue
page-type: web-api-instance-method
tags:
  - API
  - CSSPrimitiveValue
  - Method
  - NeedsExample
  - getCounterValue
  - Deprecated
browser-compat: api.CSSPrimitiveValue.getCounterValue
---
{{APIRef("CSSOM")}}{{deprecated_header}}

The **`getCounterValue()`** method of the
{{domxref("CSSPrimitiveValue")}} interface is used to get the [counter](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
value. If this CSS value doesn't contain a counter value, a {{domxref("DOMException")}}
is raised. Modification to the corresponding style property can be achieved using the
{{domxref("Counter")}} interface.

> **Note:** This method was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js
getCounterValue()
```

### Parameters

None.

### Return value

A {{domxref("Counter")}} object representing the counter value.

### Exceptions

| **Type**       | **Description**                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | An `INVALID_ACCESS_ERR` is raised if the CSS value doesn't contain a `Counter` value (e.g. this is not `CSS_COUNTER`). |

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
