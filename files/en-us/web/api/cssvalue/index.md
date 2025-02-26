---
title: CSSValue
slug: Web/API/CSSValue
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.CSSValue
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

The **`CSSValue`** interface represents the current computed value of a CSS property.

> [!NOTE]
> This interface was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Instance properties

- {{DOMxRef("CSSValue.cssText")}} {{Deprecated_Inline}}
  - : A string representing the current value.
- {{DOMxRef("CSSValue.cssValueType")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : An `unsigned short` representing a code defining the type of the value. Possible values are:

    | Constant              | Description                                                                                                                                                                                              |
    | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CUSTOM`          | The value is a custom value.                                                                                                                                                                             |
    | `CSS_INHERIT`         | The value is inherited and the `cssText` contains `"inherit"`.                                                                                                                                           |
    | `CSS_PRIMITIVE_VALUE` | The value is a primitive value and an instance of the {{DOMxRef("CSSPrimitiveValue")}} interface can be obtained by using binding-specific casting methods on this instance of the `CSSValue` interface. |
    | `CSS_VALUE_LIST`      | The value is a `CSSValue` list and an instance of the {{DOMxRef("CSSValueList")}} interface can be obtained by using binding-specific casting methods on this instance of the `CSSValue` interface.      |

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("CSSPrimitiveValue")}}
- {{DOMxRef("CSSValueList")}}
