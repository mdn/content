---
title: HTMLVideoElement.onleavepictureinpicture
slug: Web/API/HTMLVideoElement/onleavepictureinpicture
tags:
  - API
  - Event Handler
  - Interface
  - Picture-in-Picture
  - Picture-in-Picture API
  - Property
  - Reference
  - Video
  - events
  - pip
browser-compat: api.HTMLVideoElement.onleavepictureinpicture
---
{{ ApiRef() }}

The **`onleavepictureinpicture`** property of the
{{domxref("HTMLVideoElement")}} interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{domxref("HTMLVideoElement.leavepictureinpicture_event",
  "HTMLVideoElement.leavepictureinpicture")}} events.

The `leavepictureinpicture` event fires after the video has successfully
returned to its original container from the picture-in-picture mode.

## Syntax

```js
video.onleavepictureinpicture = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("FocusEvent")}} object as its sole
argument.

## Examples

### Window size logger

```html
<button id="button>Exit Picture-in-Picture</button>
<video id="video" muted autoplay src=""></video>
```

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.onleavepictureinpicture = onExitPip;

button.onclick = function() => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Picture-in-Picture API](/en-US/docs/Web/API/Picture-in-Picture_API)
- {{DOMxRef("HTMLVideoElement")}}
