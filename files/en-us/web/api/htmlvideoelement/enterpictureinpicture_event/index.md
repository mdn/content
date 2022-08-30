---
title: 'HTMLVideoElement: enterpictureinpicture event'
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
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
browser-compat: api.HTMLVideoElement.enterpictureinpicture_event
---
{{APIRef("HTMLVideoElement")}}

The `enterpictureinpicture` event is fired when the {{DOMxRef("HTMLVideoElement")}} enters picture-in-picture mode successfully.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('enterpictureinpicture', (event) => { });

onenterpictureinpicture = (event) => { };
```

## Event type

A {{domxref("PictureInPictureEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Event properties

This interface also inherits properties from its parent {{domxref("Event")}}.

## Examples

These examples add an event listener for the HTMLVideoElement's `enterpictureinpicture` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.addEventListener('enterpictureinpicture', onEnterPip, false);

button.onclick = () => {
  video.requestPictureInPicture();
}
```

Using the `onenterpictureinpicture` event handler property:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = () => {
  video.requestPictureInPicture();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLVideoElement")}}
- {{domxref("Picture-in-Picture_API")}}
