---
title: Coordinate systems
slug: Web/CSS/CSSOM_view/Coordinate_systems
page-type: guide
---

{{CSSRef}}

When specifying the location of a pixel in a graphics context (just like when specifying coordinate systems in [algebra](https://en.wikipedia.org/wiki/Algebra)), its position is defined relative to a fixed point in the context. This fixed point is called the [origin](<https://en.wikipedia.org/wiki/Origin_(mathematics)>). The position is specified as the number of pixels offset from the origin along each dimension of the context.

This guide describes the standard coordinate systems used by the CSS object model. These are generally only different in terms of where their origin is located.

## Dimensions

In the coordinate systems used by web technologies, convention dictates that the horizontal offset is called the _x-coordinate_, where a negative value indicates a position to the left of the origin and a positive value is to the right of the origin. The _y-coordinate_ specifies the vertical offset, with a negative value being above the origin and a positive value being below the origin.

On the web, the default origin is the _top_-left corner of a given context (with positive y-coordinate values being below the origin). Note that this is unlike most mathematical models, where the origin is at the _bottom_-left corner, with positive y-coordinate values being above the origin.

When using the third dimension to layer objects from front to back, we use the z-axis. The z-axis runs from the viewer to the screen's surface. The CSS z-index attribute affects where positioned elements sit on this axis, giving the effect of moving away from or toward the viewer.

> **Note:** It's actually possible to change the definitions and orientations of these coordinate systems using CSS properties such as {{cssxref("transform")}}. However, we'll only talk about the standard coordinate system for now.

## Standard CSSOM coordinate systems

There are four standard coordinate systems used by the CSS object model, as described below.

### Offset

Coordinates specified using the "offset" model use the top-left corner of the element being examined, or on which an event has occurred.

For example, when a {{domxref("MouseEvent", "mouse event", "", 1)}} occurs, the position of the mouse as specified in the event's {{domxref("MouseEvent.offsetX", "offsetX")}} and {{domxref("MouseEvent.offsetY", "offsetY")}} properties are given relative to the top-left corner of the node to which the event has been delivered. The origin is inset by the distances specified by {{cssxref("padding-left")}} and {{cssxref("padding-top")}}.

### Client

The "client" coordinate system uses as its origin the top-left corner of the viewport or browsing context in which the event occurred. This is the entire viewing area in which the document is presented. Scrolling is not a factor.

On a desktop computer, for example, the {{domxref("MouseEvent.clientX")}} and {{domxref("MouseEvent.clientY")}} properties indicate the position of the mouse cursor at the moment the event occurred, relative to the top-left corner of the browser window. The top-left corner of the window is always (0, 0), regardless of the content of the document or any scrolling that may have been done. In other words, scrolling the document will change the client coordinates of a given position within the document.

### Page

The "page" coordinate system gives the position of a pixel relative to the top-left corner of the entire {{domxref("Document")}} in which the pixel is located. That means that a given point in an element within the document will keep the same coordinates in the page model unless the element moves (either directly by changing its position or indirectly by adding or resizing other content).

Mouse events' {{domxref("MouseEvent.pageX", "pageX")}} and {{domxref("MouseEvent.pageY", "pageY")}} properties provide the position of the mouse at the time the event was generated, given relative to the top-left corner of the document.

### Screen

Finally, we come to the "screen" model. It's probably fairly obvious what this is: it's the coordinate system where the origin is located at the top-left corner of the user's entire screen space. This means that the position of a given point within a document will change if the containing window is moved, for example, or if the user's screen geometry changes (by changing display resolution or by adding or removing monitors to their system).

The {{domxref("MouseEvent.screenX")}} and {{domxref("MouseEvent.screenY")}} properties give the coordinates of a mouse event's position relative to the screen's origin.

## Example

Let's take a look at an example. This simple example creates a set of nested boxes. Whenever the mouse enters, moves around inside, or exits the inner box, the corresponding event is handled by updating a set of informational messages within the box, listing out the current mouse coordinates in each of the four available coordinate systems.

### JavaScript

Let's look at the script in two sections. First, the code that logs the coordinates to the screen. This code will be called by the event handler for the various mouse events we watch.

#### Displaying the coordinates

As we'll see in the HTML, the inner box (the one we're watching for events on) contains several paragraphs; one for each of the four coordinate systems we'll be reporting on.

```js
let inner = document.querySelector(".inner");
let log = document.querySelector(".log");

function setCoords(e, type) {
  const idX = `${type}X`;
  const idY = `${type}Y`;

  document.getElementById(idX).innerText = e[idX];
  document.getElementById(idY).innerText = e[idY];
}
```

A reference to the {{HTMLElement("div")}} inside the inner box which contains the paragraphs that will show the coordinate information is fetched into `log`.

The `setCoords()` function is designed to accept as input a {{domxref("MouseEvent")}} and the name of the origin to use when obtaining the coordinates. The implementation is then quite simple. The variables `idX` and `idY` are set to strings with the names of the properties corresponding to the coordinates in the given coordinate system. For example, if the value of `type` is `"page"`, then `idX` is `"pageX"` and `idY` is `"pageY"`.

#### Handling the mouse events

`setCoords()` is called by the event handler for the various mouse events, named `update()`; this is shown below.

```js
function update(e) {
  setCoords(e, "offset");
  setCoords(e, "client");
  setCoords(e, "page");
  setCoords(e, "screen");
}

inner.addEventListener("mouseenter", update, false);
inner.addEventListener("mousemove", update, false);
inner.addEventListener("mouseleave", update, false);
```

The event handler is in the `update()` method. It calls `setCoords()` once for each coordinate system, passing in the event that occurred.

Our main code sets up the event handlers on the inner box by calling {{domxref("EventTarget.addEventListener", "addEventListener()")}} for each of the types {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mousemove_event", "mousemove")}}, and {{domxref("Element/mouseleave_event", "mouseleave")}}.

### HTML

The HTML for our example is below. Note that within the `<div>` with the ID `"log"`, we have a paragraph for each coordinate system, with {{HTMLElement("span")}} used for each of the elements to receive and display the coordinates in each model.

```html
<div class="outer">
  <div class="inner">
    <div class="log">
      <p>
        Offset-relative: <span id="offsetX">0</span>,
        <span id="offsetY">0</span>
      </p>
      <p>
        Client-relative: <span id="clientX">0</span>,
        <span id="clientY">0</span>
      </p>
      <p>
        Page-relative: <span id="pageX">0</span>,
        <span id="pageY">0</span>
      </p>
      <p>
        Screen-relative: <span id="screenX">0</span>,
        <span id="screenY">0</span>
      </p>
    </div>
  </div>
</div>
```

### CSS

The CSS is pretty much just for appearances here. The class `"outer"` is used for the containing box, which is intentionally too wide to show in the MDN window, to allow you to scroll it horizontally. The `"inner"` box is the one that we track events in and in which we show the mouse coordinates.

```css
.outer {
  width: 1000px;
  height: 200px;
  background-color: red;
}

.inner {
  position: relative;
  width: 500px;
  height: 150px;
  top: 25px;
  left: 100px;
  background-color: blue;
  color: white;
  cursor: crosshair;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}

.log {
  position: relative;
  width: 100%;
  text-align: center;
}
```

### Result

Here you can see the results in action. As you mouse in and around the blue box, watch the values of the mouse's X and Y coordinates change in the various coordinate systems in which you can obtain the values. Note also the effect of scrolling the example horizontally upon the values returned and how the value of `clientX` doesn't change.

{{EmbedLiveSample("Example", 600, 250)}}

## See also

- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms): how to alter a coordinate system
- Coordinates of a mouse event:

  - {{domxref("MouseEvent.offsetX")}} and {{domxref("MouseEvent.offsetY")}}
  - {{domxref("MouseEvent.clientX")}} and {{domxref("MouseEvent.clientY")}}
  - {{domxref("MouseEvent.pageX")}} and {{domxref("MouseEvent.pageY")}}
  - {{domxref("MouseEvent.screenX")}} and {{domxref("MouseEvent.screenY")}}
