---
title: "CSSValue: cssValueType property"
short-title: cssValueType
slug: Web/API/CSSValue/cssValueType
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.CSSValue.cssValueType
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

The **`cssValueType`** read-only property of the
{{domxref("CSSValue")}} interface represents the type of the current computed CSS
property value.

> [!NOTE]
> This property was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Value

An `unsigned short` representing a code defining the type of the value.
Possible values are:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>CSS_CUSTOM</code></td>
      <td>The value is a custom value.</td>
    </tr>
    <tr>
      <td><code>CSS_INHERIT</code></td>
      <td>
        The value is inherited and the <code>cssText</code> contains
        <code>"inherit"</code>.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PRIMITIVE_VALUE</code></td>
      <td>
        The value is a primitive value and an instance of the
        {{domxref("CSSPrimitiveValue")}} interface can be obtained
        by using binding-specific casting methods on this instance of the
        <code>CSSValue</code> interface.
      </td>
    </tr>
    <tr>
      <td><code>CSS_VALUE_LIST</code></td>
      <td>
        The value is a <code>CSSValue</code> list and an instance of the
        {{domxref("CSSValueList")}} interface can be obtained by using
        binding-specific casting methods on this instance of the
        <code>CSSValue</code> interface.
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
const styleDeclaration = document.styleSheets[0].cssRules[0].style;
const cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssValueType);
```

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
