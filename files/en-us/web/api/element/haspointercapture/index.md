---
title: Element.hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - PointerEvent
  - Reference
  - hasPointerCapture
browser-compat: api.Element.hasPointerCapture
---
{{APIRef("DOM")}}

The **`hasPointerCapture()`** method of the
{{domxref("Element")}} interface checks whether the element on which it is invoked has
pointer capture for the pointer identified by the given pointer ID.

## Syntax

```js
hasPointerCapture(pointerId)
```

### Parameters

- `pointerId`
  - : The {{domxref("PointerEvent.pointerId", "pointerId")}} of a
    {{domxref("PointerEvent")}} object.

### Return value

A boolean value — `true` if the element does have pointer
capture, `false` if it doesn't.

## Examples

```html
<html lang="en">
  <script>
    function downHandler(ev) {
      const el = document.getElementById("target");
      // Element 'target' will receive/capture further events
      el.setPointerCapture(ev.pointerId);

      // …

      // Check whether element still has pointer capture
      let pointerCap = el.hasPointerCapture(ev.pointerId);
      if (pointerCap) {
        // We've still got pointer capture
      } else {
        // oops, we've lost pointer capture!
      }
    }

    function init() {
      const el = document.getElementById("target");
      el.onpointerdown = downHandler;
    }
  </script>
  <body onload="init();">
    <div id="target">Touch this element with a pointer.</div>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Element.setPointerCapture()")}}
- {{ domxref("Element.releasePointerCapture()")}}
- {{ domxref("Pointer_events","Pointer Events") }}
