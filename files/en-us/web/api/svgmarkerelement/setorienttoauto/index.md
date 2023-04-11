---
title: "SVGMarkerElement: setOrientToAuto() method"
short-title: setOrientToAuto()
slug: Web/API/SVGMarkerElement/setOrientToAuto
page-type: web-api-instance-method
browser-compat: api.SVGMarkerElement.setOrientToAuto
---

{{APIRef("SVG")}}

The **`setOrientToAuto()`** method of the {{domxref("SVGMarkerElement")}} interface sets the value of the `orient` attribute to `auto`.

## Syntax

```js-nolint
setOrientToAuto()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the following example the value of the `orient` attribute is updated using `setOrientToAuto()`.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="90">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value);
marker.setOrientToAuto();
console.log(marker.orientAngle.baseVal.value);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
