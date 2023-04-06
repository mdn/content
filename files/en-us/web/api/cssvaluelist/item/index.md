---
title: "CSSValueList: item() method"
short-title: item()
slug: Web/API/CSSValueList/item
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.CSSValueList.item
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

The **`item()`** method of the {{domxref("CSSValueList")}}
interface is used to retrieve a {{domxref("CSSValue")}} by ordinal index.

The order in this collection represents the order of the values in the CSS style
property. If the index is greater than or equal to the number of values in the list,
this method returns `null`.

> **Note:** This method was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js-nolint
item(index)
```

### Parameters

- `index`
  - : An `unsigned long` representing the index of the CSS value within the
    collection.

### Return value

A {{domxref("CSSValue")}} object at the `index` position in the
`CSSValueList`, or `null` if that is not a valid index.

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
