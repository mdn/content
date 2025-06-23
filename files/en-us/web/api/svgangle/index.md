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

## Instance properties

- {{domxref("SVGAngle.unitType")}}
  - : The type of the value as specified by one of the `SVG_ANGLETYPE_*` constants defined on this interface.
- {{domxref("SVGAngle.value")}}
  - : The value as a floating point value, in user units. Setting this attribute will cause `valueInSpecifiedUnits` and `valueAsString` to be updated automatically to reflect this setting.
- {{domxref("SVGAngle.valueInSpecifiedUnits")}}
  - : The value as a floating point value, in the units expressed by `unitType`. Setting this attribute will cause `value` and `valueAsString` to be updated automatically to reflect this setting.
- {{domxref("SVGAngle.valueAsString")}}
  - : The value as a string value, in the units expressed by `unitType`. Setting this attribute will cause `value`, `valueInSpecifiedUnits`, and `unitType` to be updated automatically to reflect this setting.

## Instance methods

- {{domxref("SVGAngle.convertToSpecifiedUnits()")}}
  - : Preserve the same underlying stored value, but reset the stored unit identifier to the given `unitType`. Object attributes `unitType`, `valueInSpecifiedUnits`, and `valueAsString` might be modified as a result of this method.
- {{domxref("SVGAngle.newValueSpecifiedUnits()")}}
  - : Reset the value as a number with an associated unitType, thereby replacing the values for all of the attributes on the object.

## Static properties

- `SVG_ANGLETYPE_UNKNOWN` (0)
  - : Some unknown type of value.
- `SVG_ANGLETYPE_UNSPECIFIED` (1)
  - : A unitless {{cssxref("&lt;number&gt;")}} interpreted as a value in degrees.
- `SVG_ANGLETYPE_DEG` (2)
  - : An {{cssxref("&lt;angle&gt;")}} with a `deg` unit.
- `SVG_ANGLETYPE_RAD` (3)
  - : An {{cssxref("&lt;angle&gt;")}} with a `rad` unit.
- `SVG_ANGLETYPE_GRAD` (4)
  - : An {{cssxref("&lt;angle&gt;")}} with a `grad` unit.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
