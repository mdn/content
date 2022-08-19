---
title: CSSValueList
slug: Web/API/CSSValueList
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - CSSValueList
  - Interface
  - Reference
  - Deprecated
browser-compat: api.CSSValueList
---
{{APIRef("CSSOM")}}{{Deprecated_Header}}

The **`CSSValueList`** interface derives from the {{DOMxRef("CSSValue")}} interface and provides the abstraction of an ordered collection of CSS values.

> **Note:** This interface was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

Some properties allow an empty list in their syntax. In that case, these properties take the `none` identifier. So, an empty list means that the property has the value `none`.

The items in the `CSSValueList` are accessible via an integral index, starting from 0.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{DOMxRef("CSSValue")}}_.

- {{DOMxRef("CSSValueList.length")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : An `unsigned long` representing the number of `CSSValues` in the list.

## Methods

- {{DOMxRef("CSSValueList.item()")}} {{Deprecated_Inline}}
  - : This method is used to retrieve a {{DOMxRef("CSSValue")}} by ordinal index. The order in this collection represents the order of the values in the CSS style property. If index is greater than or equal to the number of values in the list, this returns `null`.

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("CSSPrimitiveValue")}}
- {{DOMxRef("CSSValue")}}
