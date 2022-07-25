---
title: SVGMarkerElement
slug: Web/API/SVGMarkerElement
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - SVGMarkerElement
browser-compat: api.SVGMarkerElement
---
{{APIRef("SVG")}}

The **`SVGMarkerElement`** interface provides access to the properties of {{SVGElement("marker")}} elements, as well as methods to manipulate them. The {{SVGElement("marker")}} element defines the graphics used for drawing marks on a shape.

{{InheritanceDiagram}}

The following properties and methods all return, or act on the attributes of the {{SVGElement("marker")}} element represented by `SVGMarkerElement`.

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGMarkerElement.markerUnits")}} {{ReadOnlyInline}}

  - : Returns an {{domxref("SVGAnimatedEnumeration")}} object, with one of the following values:

    - 0
      - : `SVG_MARKERUNITS_UNKNOWN` which means that the {{SVGattr("markerUnits")}} attribute has a value other than the two predefined keywords.
    - 1
      - : `SVG_MARKERUNITS_USERSPACEONUSE` which means that the {{SVGattr("markerUnits")}} attribute has the keyword value `userSpaceOnUse`.
    - 2
      - : `SVG_MARKERUNITS_STROKEWIDTH` which means that the {{SVGattr("markerUnits")}} attribute has the keyword value `strokeWidth`.

- {{domxref("SVGMarkerElement.markerWidth")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} object containing the width of the {{SVGElement("marker")}} viewport.
- {{domxref("SVGMarkerElement.markerHeight")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} object containing the height of the {{SVGElement("marker")}} viewport.
- {{domxref("SVGMarkerElement.orientType")}} {{ReadOnlyInline}}

  - : Returns an {{domxref("SVGAnimatedEnumeration")}} object, with one of the following values:

    - 0
      - : `SVG_MARKER_ORIENT_UNKNOWN` which means that the {{SVGattr("orient")}} attribute has a value other than the two predefined keywords.
    - 1
      - : `SVG_MARKERUNITS_ORIENT_AUTO` which means that the {{SVGattr("orient")}} attribute has the keyword value `auto`.
    - 2
      - : `SVG_MARKERUNITS_ORIENT_ANGLE` which means that the {{SVGattr("orient")}} attribute has an {{cssxref("angle")}} or {{cssxref("number")}} value indicating the angle.

- {{domxref("SVGMarkerElement.orientAngle")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedAngle")}} object containing the angle of the {{SVGattr("orient")}} attribute.
- {{domxref("SVGMarkerElement.refX")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} object containing the value of the {{SVGattr("refX")}} attribute of the {{SVGElement("marker")}}.
- {{domxref("SVGMarkerElement.refY")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} object containing the value of the {{SVGattr("refY")}} attribute of the {{SVGElement("marker")}}.
- {{domxref("SVGMarkerElement.viewBox")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedRect")}} object containing an {{domxref("SVGRect")}} which contains the values set by the {{SVGattr("viewBox")}} attribute on the {{SVGElement("marker")}}.
- {{domxref("SVGMarkerElement.preserveAspectRatio")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGPreserveAspectRatio")}} object which contains the values set by the {{SVGattr("preserveAspectRatio")}} attribute on the {{SVGElement("marker")}} viewport.

## Methods

_This interface also inherits methods from its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGMarkerElement.setOrientToAuto()")}}
  - : Sets the value of the {{SVGattr("orient")}} attribute to `auto`.
- {{domxref("SVGMarkerElement.setOrientToAngle()")}}
  - : Sets the value of the {{SVGattr("orient")}} attribute to a specific angle value.

## Examples

The following SVG will be referenced in the examples.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="90">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

### Finding the Width of the Marker

The `markerWidth` property returns an {{domxref("SVGAnimatedLength")}} which contains an {{domxref("SVGLength")}} with the value of the {{SVGattr("markerWidth")}} attribute.

```js
let marker = document.getElementById("arrow");
console.log(marker.markerWidth.baseVal.value); // 6
```

### Updating the Orientation Angle

In the following example the value of the `orient` attribute is updated using `setOrientToAngle()` using an {{domxref("SVGAngle")}} created using {{domxref("SVGElement.createSVGAngle()")}}.

```js
let svg = document.getElementById("svg");
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value); // value in SVG above - 90
let angle = svg.createSVGAngle();
angle.value = "110";
marker.setOrientToAngle(angle);
console.log(marker.orientAngle.baseVal.value); // new value - 110
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
