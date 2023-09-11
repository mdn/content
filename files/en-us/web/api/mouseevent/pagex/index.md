---
title: "MouseEvent: pageX property"
short-title: pageX
slug: Web/API/MouseEvent/pageX
page-type: web-api-instance-property
browser-compat: api.MouseEvent.pageX
---

{{APIRef("UI Events")}}

The **`pageX`** read-only property of the {{domxref("MouseEvent")}} interface returns the X (horizontal) coordinate (in pixels) at which the mouse was clicked, relative to the left edge of the entire document.
This includes any portion of the document not currently visible.

Being based on the edge of the document as it is, this property takes into account any horizontal scrolling of the page.
For example, if the page is scrolled such that 200 pixels of the left side of the document are scrolled out of view, and the mouse is clicked 100 pixels inward from the left edge of the view, the value returned by `pageX` will be 300.

Originally, this property was defined as a `long` integer. The [CSSOM View Module](/en-US/docs/Web/CSS/CSSOM_view) redefined it as a
`double` float. See the [Browser compatibility](#browser_compatibility) section for
details.

See [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems#page) for additional information about coordinates specified in this fashion.

## Value

A floating-point number of pixels from the left edge of the _document_ at which the mouse was clicked, regardless of any scrolling or viewport positioning that may be in effect.

This property was originally specified in the Touch Events specification as a long integer, but was redefined in the CSSOM View Module to be a double-precision
floating-point number to allow for subpixel precision.
Even though numeric types both are represented by `Number` in JavaScript, they may be handled differently internally in the browser's code, resulting in potential behavior differences.

See [Browser compatibility](#browser_compatibility) to learn which browsers have been updated to use the revised data type.

## Examples

### Showing the mouse position relative to page origin

Let's take a look at a simple example that shows you the mouse's position relative to the page's origin.
Since this example is presented in an {{HTMLElement("iframe")}}, that top-left corner is the top-left corner of the frame, not the browser window.

#### HTML

```html
<div class="box">
  <p>Move the mouse around in this box to watch its coordinates change.</p>
  <p><code>pageX</code>: <span id="x">n/a</span></p>
  <p><code>pageY</code>: <span id="y">n/a</span></p>
</div>
```

The HTML is simple; the box we'll be watching for mouse events on is given the class `"box"`.
It has two `<span>` elements, one with the ID `"x"` and one with the ID `"y"`.
Those will be updated each time an event occurs to contain the latest mouse coordinates relative to the page.

#### CSS

The CSS used for this example is shown below.

```css
.box {
  width: 400px;
  height: 250px;
  border: 2px solid darkblue;
  background-color: blue;
  color: white;
  font:
    16px "Zilla",
    "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

#### JavaScript

```js
const box = document.querySelector(".box");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
}

box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);
```

The JavaScript code uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to register the function `updateDisplay()` as the event handler for the {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, and {{domxref("Element/mouseleave_event", "mouseleave")}} events.

`updateDisplay()` replaces the contents of the {{HTMLElement("span")}} elements meant to contain the X and Y coordinates with the values of `pageX`
and {{domxref("MouseEvent.pageY", "pageY")}}.

#### Result

Try this out here:

{{EmbedLiveSample("Showing_the_mouse_position_relative_to_page_origin", 500, 300)}}

### More examples

You can also see an example that demonstrates [how to access the mouse position](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems#example) information in every available coordinate system.

## Specifications

{{Specifications}}

Prior to being added to the CSSOM View specification, `pageX` and `pageY` were available on the {{domxref("UIEvent")}} interface in a limited subset of browsers for a short time.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent.pageY")}}
