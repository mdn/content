---
title: SVGLength
slug: Web/API/SVGLength
page-type: web-api-interface
browser-compat: api.SVGLength
---

{{APIRef("SVG")}}

The **`SVGLength`** interface correspond to the [\<length>](/en-US/docs/Web/SVG/Guides/Content_type#length) basic data type.

An `SVGLength` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

## Instance properties

- {{domxref("SVGLength.unitType", "unitType")}}
  - : The type of the value as specified by one of the `SVG_LENGTHTYPE_*` constants defined on this interface.
- {{domxref("SVGLength.value", "value")}}
  - : The value as a floating point value, in user units.
- {{domxref("SVGLength.valueAsString", "valueAsString")}}
  - : The value as a string value, in the units expressed by `unitType`.
- {{domxref("SVGLength.valueInSpecifiedUnits", "valueInSpecifiedUnits")}}
  - : The value as a floating point value, in the units expressed by `unitType`.

## Instance methods

- {{domxref("SVGLength.convertToSpecifiedUnits", "convertToSpecifiedUnits()")}}
  - : Preserve the same underlying stored value, but reset the stored unit identifier to the given `unitType`.
- {{domxref("SVGLength.newValueSpecifiedUnits", "newValueSpecifiedUnits()")}}
  - : Reset the value as a number with an associated `unitType`, thereby replacing the values for all of the attributes on the object.

## Static properties

- `SVG_LENGTHTYPE_UNKNOWN` (0)
  - : The unit type is not one of predefined unit types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_LENGTHTYPE_NUMBER` (1)
  - : No unit type was provided (i.e., a unitless value was specified), which indicates a value in user units.
- `SVG_LENGTHTYPE_PERCENTAGE` (2)
  - : A percentage value was specified.
- `SVG_LENGTHTYPE_EMS` (3)
  - : A value was specified using the `em` units.
- `SVG_LENGTHTYPE_EXS` (4)
  - : A value was specified using the `ex` units.
- `SVG_LENGTHTYPE_PX` (5)
  - : A value was specified using the `px` units.
- `SVG_LENGTHTYPE_CM` (6)
  - : A value was specified using the `cm` units.
- `SVG_LENGTHTYPE_MM` (7)
  - : A value was specified using the `mm` units.
- `SVG_LENGTHTYPE_IN` (8)
  - : A value was specified using the `in` units.
- `SVG_LENGTHTYPE_PT` (9)
  - : A value was specified using the `pt` units.
- `SVG_LENGTHTYPE_PC` (10)
  - : A value was specified using the `pc` units.

## Example

```xml
<svg height="200" onload="start();" version="1.1" width="200" xmlns="http://www.w3.org/2000/svg">
  <script><![CDATA[
function start() {
  const rect = document.getElementById("myRect");
  const val = rect.x.baseVal;

  // read x in pixel and cm units
  console.log(
    `value: ${val.value}, valueInSpecifiedUnits: ${val.valueInSpecifiedUnits} (${val.unitType}), valueAsString: ${val.valueAsString}`,
  );

  // set x = 20pt and read it out in pixel and pt units
  val.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PT, 20);
  console.log(
    `value: ${val.value}, valueInSpecifiedUnits: ${val.valueInSpecifiedUnits} (${val.unitType}), valueAsString: ${val.valueAsString}`,
  );

  // convert x = 20pt to inches and read out in pixel and inch units
  val.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_IN);
  console.log(
    `value: ${val.value}, valueInSpecifiedUnits: ${val.valueInSpecifiedUnits} (${val.unitType}), valueAsString: ${val.valueAsString}`,
  );
}
]]></script>
  <rect id="myRect"
        x="1cm" y="1cm"
        fill="green" stroke="black" stroke-width="1"
        width="1cm" height="1cm"
  />
</svg>
```

Results on a desktop monitor (pixel units will be dpi-dependent):

```plain
value: 37.7952766418457, valueInSpecifiedUnits: 6: 1, valueAsString: 1cm
value: 26.66666603088379, valueInSpecifiedUnits 9: 20, valueAsString: 20pt
value: 26.66666603088379, valueInSpecifiedUnits 8: 0.277777761220932, valueAsString: 0.277778in
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
