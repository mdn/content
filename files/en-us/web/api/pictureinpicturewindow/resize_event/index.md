---
title: "PictureInPictureWindow: resize event"
short-title: resize
slug: Web/API/PictureInPictureWindow/resize_event
page-type: web-api-event
browser-compat: api.PictureInPictureWindow.resize_event
---

{{APIRef("Picture-in-Picture API")}}

The **`resize`** event fires when the floating video window has been resized.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Event type

A {{domxref("PictureInPictureEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("PictureInPictureEvent.pictureInPictureWindow")}}
  - : Returns the {{domxref("PictureInPictureWindow")}} that is resized.

## Examples

### Window size logger

```html
<p>Resize the floating video window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
<video id="video" src="" muted autoplay></video>
```

```js
const video = document.querySelector("#video");
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resize(evt) {
  heightOutput.textContent = evt.target.height;
  widthOutput.textContent = evt.target.width;
}

video.requestPictureInPicture().then((pictureInPictureWindow) => {
  pictureInPictureWindow.onresize = resize;
  // or
  pictureInPictureWindow.addEventListener("resize", resize);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
