---
title: Touch.pageY
slug: Web/API/Touch/pageY
tags:
  - API
  - Property
  - Read-only
  - Reference
  - touch
browser-compat: api.Touch.pageY
---
{{ APIRef("Touch Events") }}

The **`Touch.pageY`** read-only property returns the Y
coordinate of the touch point relative to the viewport, including any scroll offset.

## Syntax

```js
touchItem.pageY;
```

### Return value

A `long` value that representes the Y coordinate of the touch point relative
to the viewport, including any scroll offset.

## Example

This example illustrates how to access the {{domxref("Touch")}} object's
{{domxref("Touch.pageX")}} and {{domxref("Touch.pageY")}} properties. The
{{domxref("Touch.pageX")}} property is the horizontal coordinate of a touch point
relative to the viewport (in CSS pixels), including any scroll offset. The
{{domxref("Touch.pageY")}} property is the vertical coordinate of a touch point relative
to the viewport (in CSS pixels), including any scroll offset.

In following simple code snippet, we assume the user initiates one or more touch
contacts on the `source` element, moves the touch points and then releases
all contacts with the surface. When the {{event("touchmove")}} event handler is invoked,
each touch point's {{domxref("Touch.pageX")}} and {{domxref("Touch.pageY")}} coordinates
are accessed via the event's {{domxref("TouchEvent.changedTouches")}} list.

```js
// Register a touchmove listeners for the 'source' element
var src = document.getElementById("source");

src.addEventListener('touchmove', function(e) {
  // Iterate through the touch points that have moved and log each
  // of the pageX/Y coordinates. The unit of each coordinate is CSS pixels.
  var i;
  for (i=0; i < e.changedTouches.length; i++) {
    console.log("touchpoint[" + i + "].pageX = " + e.changedTouches[i].pageX);
    console.log("touchpoint[" + i + "].pageY = " + e.changedTouches[i].pageY);
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
