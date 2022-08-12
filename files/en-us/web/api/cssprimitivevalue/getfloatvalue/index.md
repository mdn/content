---
title: CSSPrimitiveValue.getFloatValue()
slug: Web/API/CSSPrimitiveValue/getFloatValue
page-type: web-api-instance-method
tags:
  - API
  - CSSPrimitiveValue
  - Method
  - getFloatValue
  - Deprecated
browser-compat: api.CSSPrimitiveValue.getFloatValue
---
{{APIRef("CSSOM")}}{{deprecated_header}}

The **`getFloatValue()`** method of the
{{domxref("CSSPrimitiveValue")}} interface is used to get a float value in a specified
unit. If this CSS value doesn't contain a float value or can't be converted into the
specified unit, a {{domxref("DOMException")}} is raised.

> **Note:** This method was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

## Syntax

```js
getFloatValue(unit)
```

### Parameters

- `unit`

  - : An `unsigned short` representing the code for the unit type, in which the
    value should be returned. Valid values are:

    | Constant         | Description                                                                                                                        |
    | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CM`         | The value is a {{cssxref("&lt;length&gt;")}} in centimeters.                                                            |
    | `CSS_DEG`        | The value is an {{cssxref("&lt;angle&gt;")}} in degrees.                                                                   |
    | `CSS_DIMENSION`  | The value is a {{cssxref("&lt;number&gt;")}} with an unknown dimension.                                                 |
    | `CSS_EMS`        | The value is a {{cssxref("&lt;length&gt;")}} in em units.                                                               |
    | `CSS_EXS`        | The value is a {{cssxref("&lt;length&gt;")}} in ex units.                                                               |
    | `CSS_GRAD`       | The value is an {{cssxref("&lt;angle&gt;")}} in grads.                                                                     |
    | `CSS_HZ`         | The value is a {{cssxref("&lt;frequency&gt;")}} in Hertz. The value can be obtained by using the getFloatValue method. |
    | `CSS_IN`         | The value is a {{cssxref("&lt;length&gt;")}} in inches.                                                                 |
    | `CSS_KHZ`        | The value is a {{cssxref("&lt;frequency&gt;")}} in Kilohertz.                                                          |
    | `CSS_MM`         | The value is a {{cssxref("&lt;length&gt;")}} in millimeters.                                                            |
    | `CSS_MS`         | The value is a {{cssxref("&lt;time&gt;")}} in milliseconds.                                                               |
    | `CSS_NUMBER`     | The value is a simple {{cssxref("&lt;number&gt;")}}.                                                                    |
    | `CSS_PC`         | The value is a {{cssxref("&lt;length&gt;")}} in picas.                                                                  |
    | `CSS_PERCENTAGE` | The value is a {{cssxref("&lt;percentage&gt;")}}.                                                                       |
    | `CSS_PT`         | The value is a {{cssxref("&lt;length&gt;")}} in points.                                                                 |
    | `CSS_PX`         | The value is a {{cssxref("&lt;length&gt;")}} in pixels.                                                                 |
    | `CSS_RAD`        | The value is an {{cssxref("&lt;angle&gt;")}} in radians.                                                                   |
    | `CSS_S`          | The value is a {{cssxref("&lt;time&gt;")}} in seconds.                                                                    |

### Return value

A `float` value in the specified unit.

### Exceptions

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col"><strong>Type</strong></th>
      <th scope="col"><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOMException</code></td>
      <td>
        An <code>INVALID_ACCESS_ERR</code> is raised if the CSS value doesn't
        contain a float value or if the float value can't be converted into the
        specified unit.
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("margin-top");
console.log(cssValue.getFloatValue(CSSPrimitiveValue.CSS_CM));
```

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}
