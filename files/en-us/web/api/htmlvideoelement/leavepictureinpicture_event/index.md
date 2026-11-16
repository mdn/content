---
title: "HTMLVideoElement: leavepictureinpicture event"
short-title: leavepictureinpicture
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
page-type: web-api-event
browser-compat: api.HTMLVideoElement.leavepictureinpicture_event
---

{{APIRef("Picture-in-Picture API")}}

The `leavepictureinpicture` event is fired when the {{DOMxRef("HTMLVideoElement")}} leaves picture-in-picture mode successfully.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("leavepictureinpicture", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onleavepictureinpicture = (event) => { }
```

## Event type

A {{domxref("PictureInPictureEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Examples

These examples add an event listener for the HTMLVideoElement's `leavepictureinpicture` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.addEventListener("leavepictureinpicture", onExitPip);

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

Using the `onleavepictureinpicture` event handler property (but note that this replaces other event listeners added using `onleavepictureinpicture`, if any):

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.onleavepictureinpicture = onExitPip;

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLVideoElement")}}
- [Picture-in-Picture API](/en-US/docs/Web/API/Picture-in-Picture_API)
