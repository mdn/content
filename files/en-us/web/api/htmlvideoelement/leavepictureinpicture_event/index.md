---
title: 'HTMLVideoElement: leavepictureinpicture event'
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
page-type: web-api-event
tags:
  - API
  - Event
  - Interface
  - Media
  - Picture-in-Picture
  - Picture-in-Picture API
  - Video
  - pip
browser-compat: api.HTMLVideoElement.leavepictureinpicture_event
---
{{APIRef("HTMLVideoElement")}}

The `leavepictureinpicture` event is fired when the {{DOMxRef("HTMLVideoElement")}} leaves picture-in-picture mode successfully.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('leavepictureinpicture', (event) => { });

onleavepictureinpicture = (event) => { };
```

## Event type

A {{domxref("PictureInPictureEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Event properties

This interface also inherits properties from its parent {{domxref("Event")}}.

## Examples

These examples add an event listener for the HTMLVideoElement's `leavepictureinpicture` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.addEventListener("leavepictureinpicture", onExitPip, false);

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
}
```

Using the `onleavepictureinpicture` event handler property:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.onleavepictureinpicture = onExitPip;

button.onclick = () => {
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

- {{domxref("HTMLVideoElement")}}
- {{domxref("Picture-in-Picture_API")}}
