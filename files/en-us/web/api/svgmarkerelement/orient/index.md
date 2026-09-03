---
title: "SVGMarkerElement: orient property"
short-title: orient
slug: Web/API/SVGMarkerElement/orient
page-type: web-api-instance-property
browser-compat: api.SVGMarkerElement.orient
---

{{APIRef("SVG")}}

The **`orient`** property of the {{domxref("SVGMarkerElement")}} interface defines how the marker is rotated when it is placed at its position on the shape. It reflects the {{SVGAttr("orient")}} attribute value of the corresponding {{SVGElement("marker")}} element.

Unlike {{domxref("SVGMarkerElement.orientType")}} and {{domxref("SVGMarkerElement.orientAngle")}}, which provide read-only access to the orientation and angle, respectively, the `orient` property allows you to get and set the `orient` attribute directly as a string.

## Value

A string. Possible values are:

- `"auto"`
  - : The marker is automatically rotated to follow the direction of the path at the point where it is placed.
- `"auto-start-reverse"`
  - : If placed by {{SVGAttr("marker-start")}}, the marker is oriented at an angle 180° from the orientation that would be used if `auto` were specified. For all other markers, `auto-start-reverse` means the same as `auto`.
- An [`<angle>`](/en-US/docs/Web/SVG/Guides/Content_type#angle) value (e.g., `"45deg"`)
  - : The marker is rotated by the specified angle, measured from the horizontal.
- A [`<number>`](/en-US/docs/Web/SVG/Guides/Content_type#number) value (e.g., `"45"`)
  - : The marker is oriented at the specified angle in degrees.

## Examples

### Accessing the `orient` property

```html
<svg
  viewBox="0 0 100 100"
  width="300"
  height="300"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="12"
      markerHeight="12"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
  <polyline
    points="10,90 50,10 90,90"
    fill="none"
    stroke="black"
    marker-start="url(#arrow)"
    marker-mid="url(#arrow)"
    marker-end="url(#arrow)" />
</svg>
<output></output>
```

```css hidden
body {
  font-family: system-ui;
}

output {
  display: block;
  font: inherit;
  white-space: pre;
}
```

We can read the `orient` property and then set it to a new value:

```js
const marker = document.querySelector("marker");
const log = document.querySelector("output");

if ("orient" in marker) {
  // Read the current orient value
  log.textContent = `orient: "${marker.orient}"\n`; // "auto-start-reverse"

  // Set a new orient value
  marker.orient = "90deg";
  log.textContent += `after setting "90deg": "${marker.orient}"`;
} else {
  log.textContent = "orient is not supported in this browser";
}
```

{{EmbedLiveSample("Examples", "", "340")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGMarkerElement.orientType")}}
- {{domxref("SVGMarkerElement.orientAngle")}}
- {{domxref("SVGMarkerElement.setOrientToAuto()")}}
- {{domxref("SVGMarkerElement.setOrientToAngle()")}}
- {{SVGAttr("orient")}}
