---
title: "Element: setCapture() method"
short-title: setCapture()
slug: Web/API/Element/setCapture
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Element.setCapture
---

{{Deprecated_Header}}{{non-standard_header}}{{ APIRef("DOM") }}

Call this method during the handling of a mousedown event to retarget all mouse events
to this element until the mouse button is released or {{
  domxref("document.releaseCapture()") }} is called.

> **Warning:** This interface never had much cross-browser
> support and you probably looking for {{domxref("element.setPointerCapture")}} instead,
> from the Pointer Events API.

## Syntax

```js-nolint
setCapture(retargetToElement)
```

### Parameters

- `retargetToElement`
  - : If `true`, all events are targeted directly to this element; if
    `false`, events can also fire at descendants of this element.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In this example, the current mouse coordinates are drawn while you mouse around after
clicking and holding down on an element.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Mouse Capture Example</title>
    <style>
      #myButton {
        border: solid black 1px;
        color: black;
        padding: 2px;
        box-shadow: black 2px 2px;
      }
    </style>

    <script>
      function init() {
        const btn = document.getElementById("myButton");
        if (btn.setCapture) {
          btn.addEventListener("mousedown", mouseDown, false);
          btn.addEventListener("mouseup", mouseUp, false);
        } else {
          document.getElementById("output").textContent =
            "Sorry, there appears to be no setCapture support on this browser";
        }
      }

      function mouseDown(e) {
        e.target.setCapture();
        e.target.addEventListener("mousemove", mouseMoved, false);
      }

      function mouseUp(e) {
        e.target.removeEventListener("mousemove", mouseMoved, false);
      }

      function mouseMoved(e) {
        const output = document.getElementById("output");
        output.textContent = `Position: ${e.clientX}, ${e.clientY}`;
      }
    </script>
  </head>
  <body onload="init()">
    <p>
      This is an example of how to use mouse capture on elements in Gecko 2.0.
    </p>
    <p><a id="myButton" href="#">Test Me</a></p>
    <div id="output">No events yet</div>
  </body>
</html>
```

[View Live Examples](https://mdn.dev/archives/media/samples/domref/mousecapture.html)

## Notes

The element may not be scrolled completely to the top or bottom, depending on the
layout of other elements.

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("document.releaseCapture()") }}
- {{domxref("element.setPointerCapture")}}
