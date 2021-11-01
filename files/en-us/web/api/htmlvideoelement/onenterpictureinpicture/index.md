---
title: HTMLVideoElement.onenterpictureinpicture
slug: Web/API/HTMLVideoElement/onenterpictureinpicture
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
browser-compat: api.HTMLVideoElement.onenterpictureinpicture
---
{{ ApiRef() }}

The **`onenterpictureinpicture`** property of the
{{domxref("HTMLVideoElement")}} interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{domxref("HTMLVideoElement.enterpictureinpicture_event",
  "HTMLVideoElement.enterpictureinpicture")}} events.

The `enterpictureinpicture` event fires after the video has successfully
entered picture-in-picture mode.

## Syntax

```js
video.onenterpictureinpicture = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("FocusEvent")}} object as its sole
argument.

## Examples

### Window size logger

```html
<button id="button>Enter Picture-in-Picture</button>
<video id="video" muted autoplay src=""></video>
```

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = function() => {
  video.requestPictureInPicture();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Picture-in-Picture_API")}}
- {{DOMxRef("HTMLVideoElement")}}
