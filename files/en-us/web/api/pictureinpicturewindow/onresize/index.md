---
title: PictureInPictureWindow.onresize
slug: Web/API/PictureInPictureWindow/onresize
tags:
  - API
  - Interface
  - Media
  - Picture-in-Picture
  - Picture-in-Picture API
  - Video
  - pip
browser-compat: api.PictureInPictureWindow.onresize
---
{{ ApiRef() }}

The **`onresize`** property of the
{{domxref("PictureInPictureWindow")}} interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{domxref("PictureInPictureWindow.resize_event",
  "PictureInPictureWindow.resize")}} events.

The `resize` event fires after the floating video window has been resized.

## Syntax

```js
pictureInPictureWindow.onresize = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("FocusEvent")}} object as its sole
argument.

## Examples

### Window size logger

```html
<p>Resize the floating video window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
<video id="video" muted autoplay src=""></video>
```

```js
const video = document.querySelector('#video');
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize(evt) {
  heightOutput.textContent = evt.target.width;
  widthOutput.textContent = evt.target.width;
}

video.requestPictureInPicture()
  .then(pictureInPictureWindow => {
    pictureInPictureWindow.onresize = resize;
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Picture-in-Picture API](/en-US/docs/Web/API/Picture-in-Picture_API)
