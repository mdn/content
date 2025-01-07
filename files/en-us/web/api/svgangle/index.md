---
title: SVGAngle
slug: Web/API/SVGAngle
page-type: web-api-interface
browser-compat: api.SVGAngle
---

{{APIRef("SVG")}}

The `SVGAngle` interface is used to represent a value that can be an {{cssxref("&lt;angle&gt;")}} or {{cssxref("&lt;number&gt;")}} value.

The `SVGAngle` returned from {{domxref("SVGAnimatedAngle.animVal")}} and {{domxref("SVGAnimatedAngle.baseVal")}} is read only, but the `SVGAngle` returned from {{domxref("SVGSVGElement.createSVGAngle()")}} is writable. When designated as read only, attempts to modify the object will result in an exception being thrown.

An `SVGAngle` object can be associated with a particular element. The associated element is used to determine which element's content attribute to update if the object reflects an attribute. Unless otherwise described, an `SVGAngle` object is not associated with any element.

Every `SVGAngle` object operates in one of two modes:

1. **_Reflect the base value_** of a reflected animatable attribute (being exposed through the {{domxref("SVGAnimatedAngle.baseVal", "baseVal")}} member of an {{domxref("SVGAnimatedAngle")}}),
2. **_Be detached_,** which is the case for `SVGAngle` objects created with {{domxref("SVGSVGElement.createSVGAngle()")}}.

## Constants

- `SVG_ANGLETYPE_UNKNOWN`
  - : Some unknown type of value. Represented as the numeric value `0`.
- `SVG_ANGLETYPE_UNSPECIFIED`
  - : A unitless {{cssxref("&lt;number&gt;")}} interpreted as a value in degrees. Represented as the numeric value `1`.
- `SVG_ANGLETYPE_DEG`
  - : An {{cssxref("&lt;angle&gt;")}} with a `deg` unit. Represented as the numeric value `2`.
- `SVG_ANGLETYPE_RAD`
  - : An {{cssxref("&lt;angle&gt;")}} with a `rad` unit. Represented as the numeric value `3`.
- `SVG_ANGLETYPE_GRAD`
  - : An {{cssxref("&lt;angle&gt;")}} with a `grad` unit. Represented as the numeric value `4`.

## Instance properties

- {{domxref("SVGAngle.unitType")}}

  - : The type of the value as specified by one of the `SVG_ANGLETYPE_*` constants defined on this interface.

- {{domxref("SVGAngle.value")}}

  - : The value as a floating point value, in user units. Setting this attribute will cause `valueInSpecifiedUnits` and `valueAsString` to be updated automatically to reflect this setting.

    **Exceptions on setting:** A {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is raised when the length corresponds to a read-only attribute, or when the object itself is read-only.

- {{domxref("SVGAngle.valueInSpecifiedUnits")}}

  - : The value as a floating point value, in the units expressed by `unitType`. Setting this attribute will cause `value` and `valueAsString` to be updated automatically to reflect this setting.

    **Exceptions on setting:** A {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is raised when the length corresponds to a read-only attribute, or when the object itself is read-only.

- {{domxref("SVGAngle.valueAsString")}}

  - : The value as a string value, in the units expressed by `unitType`. Setting this attribute will cause `value`, `valueInSpecifiedUnits`, and `unitType` to be updated automatically to reflect this setting.

    **Exceptions on setting:**

    A {{domxref("DOMException")}} with code `SYNTAX_ERR` is raised if the assigned string cannot be parsed as a valid {{cssxref("&lt;angle&gt;")}}.

    A {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is raised when the length corresponds to a read-only attribute, or when the object itself is read-only.

## Instance methods

- {{domxref("SVGAngle.newValueSpecifiedUnits")}}

  - : Reset the value as a number with an associated unitType, thereby replacing the values for all of the attributes on the object.

    **Exceptions:**

    - A {{domxref("DOMException")}} with code `NOT_SUPPORTED_ERR` is raised if `unitType` is `SVG_ANGLETYPE_UNKNOWN` or not a valid unit type constant (one of the other `SVG_ANGLETYPE_*` constants defined on this interface).
    - A {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is raised when the length corresponds to a read only attribute or when the object itself is read only.

- {{domxref("SVGAngle.convertToSpecifiedUnits")}}

  - : Preserve the same underlying stored value, but reset the stored unit identifier to the given `unitType`. Object attributes `unitType`, `valueInSpecifiedUnits`, and `valueAsString` might be modified as a result of this method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
