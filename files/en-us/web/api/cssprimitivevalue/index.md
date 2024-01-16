---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.CSSPrimitiveValue
---

{{APIRef("CSSOM")}}{{deprecated_header}}

The **`CSSPrimitiveValue`** interface derives from the {{DOMxRef("CSSValue")}} interface and represents the current computed value of a CSS property.

> **Note:** This interface was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
> not implement it.
>
> To achieve your purpose, you can use:
>
> - the untyped [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model), widely supported, or
> - the modern [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), less supported and considered experimental.

This interface represents a single CSS value. It may be used to determine the value of a specific style property currently set in a block or to set a specific style property explicitly within the block. An instance of this interface might be obtained from the {{DOMxRef("CSSStyleDeclaration.getPropertyCSSValue()", "getPropertyCSSValue()")}} method of the {{DOMxRef("CSSStyleDeclaration")}} interface. A `CSSPrimitiveValue` object only occurs in a context of a CSS property.

Conversions are allowed between absolute values (from millimeters to centimeters, from degrees to radians, and so on) but not between relative values. (For example, a pixel value cannot be converted to a centimeter value.) Percentage values can't be converted since they are relative to the parent value (or another property value). There is one exception for color percentage values: since a color percentage value is relative to the range 0-255, a color percentage value can be converted to a number (see also the {{DOMxRef("RGBColor")}} interface).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("CSSValue")}}_.

- {{DOMxRef("CSSPrimitiveValue.primitiveType")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : An `unsigned short` representing the type of the value. Possible values are:

    | Constant         | Description                                                                                                                                                                  |
    | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_ATTR`       | The value is an {{CSSxRef("attr", "attr()")}} function. The value can be obtained by using the `getStringValue()` method.                                                    |
    | `CSS_CM`         | The value is a {{CSSxRef("&lt;length&gt;")}} in centimeters. The value can be obtained by using the `getFloatValue()` method.                                                |
    | `CSS_COUNTER`    | The value is a [counter or counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) function. The value can be obtained by using the `getCounterValue()` method. |
    | `CSS_DEG`        | The value is an {{CSSxRef("&lt;angle&gt;")}} in degrees. The value can be obtained by using the `getFloatValue()` method.                                                    |
    | `CSS_DIMENSION`  | The value is a {{CSSxRef("&lt;number&gt;")}} with an unknown dimension. The value can be obtained by using the `getFloatValue()` method.                                     |
    | `CSS_EMS`        | The value is a {{CSSxRef("&lt;length&gt;")}} in em units. The value can be obtained by using the `getFloatValue()` method.                                                   |
    | `CSS_EXS`        | The value is a {{CSSxRef("&lt;length&gt;")}} in ex units. The value can be obtained by using the `getFloatValue()` method.                                                   |
    | `CSS_GRAD`       | The value is an {{CSSxRef("&lt;angle&gt;")}} in grads. The value can be obtained by using the `getFloatValue()` method.                                                      |
    | `CSS_HZ`         | The value is a {{CSSxRef("&lt;frequency&gt;")}} in Hertz. The value can be obtained by using the getFloatValue method.                                                       |
    | `CSS_IDENT`      | The value is an identifier. The value can be obtained by using the `getStringValue()` method.                                                                                |
    | `CSS_IN`         | The value is a {{CSSxRef("&lt;length&gt;")}} in inches. The value can be obtained by using the `getFloatValue()` method.                                                     |
    | `CSS_KHZ`        | The value is a {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. The value can be obtained by using the `getFloatValue()` method.                                               |
    | `CSS_MM`         | The value is a {{CSSxRef("&lt;length&gt;")}} in millimeters. The value can be obtained by using the `getFloatValue()` method.                                                |
    | `CSS_MS`         | The value is a {{CSSxRef("&lt;time&gt;")}} in milliseconds. The value can be obtained by using the `getFloatValue()` method.                                                 |
    | `CSS_NUMBER`     | The value is a simple {{CSSxRef("&lt;number&gt;")}}. The value can be obtained by using the `getFloatValue()` method.                                                        |
    | `CSS_PC`         | The value is a {{CSSxRef("&lt;length&gt;")}} in picas. The value can be obtained by using the `getFloatValue()` method.                                                      |
    | `CSS_PERCENTAGE` | The value is a {{CSSxRef("&lt;percentage&gt;")}}. The value can be obtained by using the `getFloatValue()` method.                                                           |
    | `CSS_PT`         | The value is a {{CSSxRef("&lt;length&gt;")}} in points. The value can be obtained by using the `getFloatValue()` method.                                                     |
    | `CSS_PX`         | The value is a {{CSSxRef("&lt;length&gt;")}} in pixels. The value can be obtained by using the `getFloatValue()` method.                                                     |
    | `CSS_RAD`        | The value is an {{CSSxRef("&lt;angle&gt;")}} in radians. The value can be obtained by using the `getFloatValue()` method.                                                    |
    | `CSS_RECT`       | The value is a {{CSSxRef("shape", "rect()", "#Syntax")}} function. The value can be obtained by using the `getRectValue()` method.                                           |
    | `CSS_RGBCOLOR`   | The value is an {{CSSxRef("&lt;color&gt;")}}. The value can be obtained by using the `getRGBColorValue()` method.                                                            |
    | `CSS_S`          | The value is a {{CSSxRef("&lt;time&gt;")}} in seconds. The value can be obtained by using the `getFloatValue()` method.                                                      |
    | `CSS_STRING`     | The value is a {{CSSxRef("&lt;string&gt;")}}. The value can be obtained by using the `getStringValue()` method.                                                              |
    | `CSS_UNKNOWN`    | The value is not a recognized CSS2 value. The value can only be obtained by using the {{DOMxRef("CSSValue.cssText", "cssText")}} attribute.                                  |
    | `CSS_URI`        | The value is a {{CSSxRef("url", "url()")}}. The value can be obtained by using the `getStringValue()` method.                                                                |

## Instance methods

- {{DOMxRef("CSSPrimitiveValue.getCounterValue()")}} {{Deprecated_Inline}}
  - : This method is used to get the [counter](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) value. If this CSS value doesn't contain a counter value, a {{DOMxRef("DOMException")}} is raised. Modification to the corresponding style property can be achieved using the {{DOMxRef("Counter")}} interface.
- {{DOMxRef("CSSPrimitiveValue.getFloatValue()")}} {{Deprecated_Inline}}
  - : This method is used to get a float value in a specified unit. If this CSS value doesn't contain a float value or can't be converted into the specified unit, a {{DOMxRef("DOMException")}} is raised.
- {{DOMxRef("CSSPrimitiveValue.getRGBColorValue()")}} {{Deprecated_Inline}}
  - : This method is used to get the RGB color. If this CSS value doesn't contain a RGB color value, a {{DOMxRef("DOMException")}} is raised. Modification to the corresponding style property can be achieved using the {{DOMxRef("RGBColor")}} interface.
- {{DOMxRef("CSSPrimitiveValue.getRectValue()")}} {{Deprecated_Inline}}
  - : This method is used to get the Rect value. If this CSS value doesn't contain a rect value, a {{DOMxRef("DOMException")}} is raised. Modification to the corresponding style property can be achieved using the {{DOMxRef("Rect")}} interface.
- {{DOMxRef("CSSPrimitiveValue.getStringValue()")}} {{Deprecated_Inline}}
  - : This method is used to get the string value. If the CSS value doesn't contain a string value, a {{DOMxRef("DOMException")}} is raised.
- {{DOMxRef("CSSPrimitiveValue.setFloatValue()")}} {{Deprecated_Inline}}
  - : A method to set the float value with a specified unit. If the property attached with this value can not accept the specified unit or the float value, the value will be unchanged and a {{DOMxRef("DOMException")}} will be raised.
- {{DOMxRef("CSSPrimitiveValue.setStringValue()")}} {{Deprecated_Inline}}
  - : A method to set the string value with the specified unit. If the property attached to this value can't accept the specified unit or the string value, the value will be unchanged and a {{DOMxRef("DOMException")}} will be raised.

## Specifications

This feature was originally defined in the [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) specification, but has been dropped from any
standardization effort since then.

It has been superseded by a modern, but incompatible, [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) that is now on the standard track.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("CSSValue")}}
- {{DOMxRef("CSSValueList")}}
