---
title: "Window: resize event"
short-title: resize
slug: Web/API/Window/resize_event
page-type: web-api-event
browser-compat: api.Window.resize_event
---

{{APIRef}}

The **`resize`** event fires when the document view (window) has been resized.

This event is not cancelable and does not bubble.

In some earlier browsers it was possible to register `resize` event handlers on any HTML element. It is still possible to set `onresize` attributes or use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to set a handler on any element. However, `resize` events are only fired on the {{domxref("Window", "window")}} object (i.e. returned by {{domxref("document.defaultView")}}). Only handlers registered on the `window` object will receive `resize` events.

While the `resize` event fires only for the window nowadays, you can get resize notifications for other elements using the [ResizeObserver](/en-US/docs/Web/API/ResizeObserver) API.

If the resize event is triggered too many times for your application, see [Optimizing window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html) to control the time after which the event fires.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Window size logger

The following example reports the window size each time it is resized.

#### HTML

```html
<p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
```

#### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
```

#### Result

{{EmbedLiveSample("Window_size_logger")}}

> **Note:** The example output here is in an {{HTMLElement("iframe")}}, so the reported width and height values are for the `<iframe>`, not the window that this page is in. In particular, it will be hard to adjust the window size so as to see a difference in the reported height.
>
> The effect is easier to see if you {{LiveSampleLink("Window_size_logger", "view the example in its own window")}}.

### addEventListener equivalent

You could set up the event handler using the [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener("resize", reportWindowSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
