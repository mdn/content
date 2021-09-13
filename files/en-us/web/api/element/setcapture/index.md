---
title: Element.setCapture()
slug: Web/API/Element/setCapture
tags:
  - API
  - DOM
  - Element
  - Method
  - Non-standard
  - Reference
  - Deprecated
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

```js
element.setCapture(retargetToElement);
```

- `retargetToElement`
  - : If `true`, all events are targeted directly to this element; if
    `false`, events can also fire at descendants of this element.

## Example

In this example, the current mouse coordinates are drawn while you mouse around after
clicking and holding down on an element.

```html
<html>
<head>
  <title>Mouse Capture Example</title>
  <style type="text/css">
    #myButton {
      border: solid black 1px;
      color: black;
      padding: 2px;
      box-shadow: black 2px 2px;
    }
  </style>

  <script type="text/javascript">
    function init() {
      var btn = document.getElementById("myButton");
      if (btn.setCapture) {
        btn.addEventListener("mousedown", mouseDown, false);
        btn.addEventListener("mouseup", mouseUp, false);
      } else {
        document.getElementById("output").textContent
          = "Sorry, there appears to be no setCapture support on this browser";
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
      var output = document.getElementById("output");
      output.textContent = `Position: ${e.clientX}, ${e.clientY}`;
    }
  </script>
</head>
<body onload="init()">
  <p>This is an example of how to use mouse capture on elements in Gecko 2.0.</p>
  <p><a id="myButton" href="#">Test Me</a></p>
  <div id="output">No events yet</div>
</body>
</html>
```

[View Live Examples](https://media.prod.mdn.mozit.cloud/samples/domref/mousecapture.html)

## Notes

The element may not be scrolled completely to the top or bottom, depending on the
layout of other elements.

## Specifications

Based on Internet Explorer's implementation.

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("document.releaseCapture()") }}
- {{domxref("element.setPointerCapture")}}
