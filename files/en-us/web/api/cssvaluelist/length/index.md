---
title: CSSValueList.length
slug: Web/API/CSSValueList/length
tags:
  - API
  - CSSValueList
  - NeedsExample
  - Property
  - Read-only
  - Reference
  - length
  - Deprecated
browser-compat: api.CSSValueList.length
---
{{APIRef("CSSOM")}}{{Deprecated_header}}

The **`length`** read-only property of the
{{domxref("CSSValueList")}} interface represents the number of {{domxref("CSSValue")}}s
in the list. The range of valid values of the indices is `0` to
`length-1` inclusive.

> **Note:** This property was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js
var length = cssValueList.length;
```

### Value

An `unsigned long` representing the number of {{domxref("CSSValue")}}s.

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
