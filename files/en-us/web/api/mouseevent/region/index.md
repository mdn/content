---
title: MouseEvent.region
slug: Web/API/MouseEvent/region
tags:
  - API
  - Canvas
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.region
---
{{APIRef("DOM Events")}}

The **`MouseEvent.region`** read-only property returns the id of the [canvas hit region](/en-US/docs/Web/API/CanvasRenderingContext2D/addHitRegion) affected by the event.
If no hit region is affected, `null` is returned.

## Value

A {{domxref("DOMString")}} representing the id of the hit region.

## Example

Example of using the `event.region` combined with `CanvasRenderingContext2D.addHitRegion()` method.

```html
<canvas id="canvas"></canvas>

<script>
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.addHitRegion({id: "circle"});

canvas.addEventListener("mousemove", function(event){
  if(event.region) {
    console.log("hit region: " + event.region);
  }
});
</script>
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent")}}
- {{domxref("CanvasRenderingContext2D.addHitRegion()")}}
