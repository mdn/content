---
title: "CSSPrimitiveValue: primitiveType property"
short-title: primitiveType
slug: Web/API/CSSPrimitiveValue/primitiveType
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.CSSPrimitiveValue.primitiveType
---

{{APIRef("CSSOM")}}{{deprecated_header}}

The **`primitiveType`** read-only property of the
{{domxref("CSSPrimitiveValue")}} interface represents the type of a CSS value.

> **Note:** This property was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Value

An `unsigned short` representing the type of the value. Possible values are:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>CSS_ATTR</code></td>
      <td>
        The value is an {{cssxref("attr", "attr()")}} function. The value can be
        obtained by using the <code>getStringValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_CM</code></td>
      <td>
        The value is a {{cssxref("&lt;length&gt;")}} in centimeters.
        The value can be obtained by using the
        <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_COUNTER</code></td>
      <td>
        The value is a
        <a href="/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters"
          >counter or counters</a
        >
        function. The value can be obtained by using the
        <code>getCounterValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_DEG</code></td>
      <td>
        The value is an {{cssxref("&lt;angle&gt;")}} in degrees. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_DIMENSION</code></td>
      <td>
        The value is a {{cssxref("&lt;number&gt;")}} with an unknown
        dimension. The value can be obtained by using the
        <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_EMS</code></td>
      <td>
        The value is a {{cssxref("&lt;length&gt;")}} in em units. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_EXS</code></td>
      <td>
        The value is a {{cssxref("&lt;length&gt;")}} in ex units. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_GRAD</code></td>
      <td>
        The value is an {{cssxref("&lt;angle&gt;")}} in grads. The value
        can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_HZ</code></td>
      <td>
        The value is a {{cssxref("&lt;frequency&gt;")}} in Hertz.
        The value can be obtained by using the getFloatValue method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_IDENT</code></td>
      <td>
        The value is an identifier. The value can be obtained by using the
        <code>getStringValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_IN</code></td>
      <td>
        The value is a {{cssxref("&lt;length&gt;")}} in inches. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_KHZ</code></td>
      <td>
        The value is a {{cssxref("&lt;frequency&gt;")}} in
        Kilohertz. The value can be obtained by using the
        <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_MM</code></td>
      <td>
        The value is a {{cssxref("&lt;length&gt;")}} in millimeters.
        The value can be obtained by using the
        <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_MS</code></td>
      <td>
        The value is a {{cssxref("&lt;time&gt;")}} in milliseconds. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_NUMBER</code></td>
      <td>
        The value is a simple {{cssxref("&lt;number&gt;")}}. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PC</code></td>
      <td>
        The value is a {{cssxref("&lt;length&gt;")}} in picas. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PERCENTAGE</code></td>
      <td>
        The value is a {{cssxref("&lt;percentage&gt;")}}. The value
        can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PT</code></td>
      <td>
        The value is a {{cssxref("&lt;length&gt;")}} in points. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PX</code></td>
      <td>
        The value is a {{cssxref("&lt;length&gt;")}} in pixels. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RAD</code></td>
      <td>
        The value is an {{cssxref("&lt;angle&gt;")}} in radians. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RECT</code></td>
      <td>
        The value is a {{cssxref("shape", "rect()", "#Syntax")}}
        function. The value can be obtained by using the
        <code>getRectValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RGBCOLOR</code></td>
      <td>
        The value is an {{cssxref("&lt;color&gt;")}}. The value can be
        obtained by using the <code>getRGBColorValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_S</code></td>
      <td>
        The value is a {{cssxref("&lt;time&gt;")}} in seconds. The
        value can be obtained by using the <code>getFloatValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_STRING</code></td>
      <td>
        The value is a {{cssxref("&lt;string&gt;")}}. The value can
        be obtained by using the <code>getStringValue()</code> method.
      </td>
    </tr>
    <tr>
      <td><code>CSS_UNKNOWN</code></td>
      <td>
        The value is not a recognized CSS2 value. The value can only be obtained
        by using the {{domxref("CSSValue.cssText", "cssText")}}
        attribute.
      </td>
    </tr>
    <tr>
      <td><code>CSS_URI</code></td>
      <td>
        The value is a {{cssxref("url", "url()")}}. The value can be obtained
        by using the <code>getStringValue()</code> method.
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("color");
console.log(cssValue.primitiveType);
```

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}}
