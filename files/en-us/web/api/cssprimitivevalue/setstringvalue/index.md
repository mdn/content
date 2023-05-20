---
title: "CSSPrimitiveValue: setStringValue() method"
short-title: setStringValue()
slug: Web/API/CSSPrimitiveValue/setStringValue
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.CSSPrimitiveValue.setStringValue
---

{{APIRef("CSSOM")}}{{deprecated_header}}

The **`setStringValue()`** method of the
{{domxref("CSSPrimitiveValue")}} interface is used to set a string value. If the
property attached to this value can't accept the specified unit or the string value, the
value will be unchanged and a {{domxref("DOMException")}} will be raised.

> **Note:** This method was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js-nolint
setStringValue(stringType, stringValue)
```

### Parameters

- `stringType`

  - : An `unsigned short` representing the type of the value. Possible values
    are:

    | Constant     | Description                                             |
    | ------------ | ------------------------------------------------------- |
    | `CSS_ATTR`   | The value is an {{cssxref("attr", "attr()")}} function. |
    | `CSS_IDENT`  | The value is an identifier.                             |
    | `CSS_STRING` | The value is a {{cssxref("&lt;string&gt;")}}.           |
    | `CSS_URI`    | The value is a {{cssxref("url", "url()")}}.             |

- `stringValue`
  - : A string representing the new string value.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the CSS value doesn't contain a string value
    or if the string value can't be converted into the specified unit.
- `NoModificationAllowedError' {{domxref("DOMException")}}
  - : Thrown if the property is read-only.

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
