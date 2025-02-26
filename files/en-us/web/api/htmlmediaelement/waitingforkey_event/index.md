---
title: "HTMLMediaElement: waitingforkey event"
short-title: waitingforkey
slug: Web/API/HTMLMediaElement/waitingforkey_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.waitingforkey_event
---

{{APIRef("Encrypted Media Extensions")}}

The `waitingforkey` event is fired at a media element when it is first unable to play because it needs a key to decode the following data, and playback is stopped.

If the video frame and/or audio data for the current playback position have been decoded, {{domxref("HTMLMediaElement.readyState", "readyState")}} is set to [`HAVE_CURRENT_DATA`](/en-US/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_current_data).
Otherwise, including if the data was previously available but isn't anymore, the `readyState` is set to [`HAVE_METADATA`](/en-US/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_metadata).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("waitingforkey", (event) => {});

onwaitingforkey = (event) => {};
```

## Event type

An {{domxref("Event")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
