---
title: "HTMLVideoElement: resize event"
short-title: resize
slug: Web/API/HTMLVideoElement/resize_event
page-type: web-api-event
browser-compat: api.HTMLVideoElement.resize_event
---

{{APIRef("HTML DOM")}}

The **`resize`** event of the {{domxref("HTMLVideoElement")}} interface fires when one or both of the {{domxref("HTMLVideoElement.videoWidth", "videoWidth")}} and {{domxref("HTMLVideoElement.videoHeight", "videoHeight")}} properties have just been updated.

This event is not cancelable but may bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("resize", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onresize = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```html
<video id="media" src="https://example.com/video.mp4"></video>
```

```js
const el = document.getElementById("media");
el.addEventListener("resize", () => {
  console.log("The size of the video element has changed!");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLVideoElement.videoHeight")}}
- {{domxref("HTMLVideoElement.videoWidth")}}
