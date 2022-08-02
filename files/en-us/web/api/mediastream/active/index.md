---
title: MediaStream.active
slug: Web/API/MediaStream/active
page-type: web-api-instance-property
tags:
  - API
  - Media Capture and Streams
  - Media Streams API
  - MediaStream
  - Property
  - Reference
  - active
browser-compat: api.MediaStream.active
---
{{APIRef("Media Capture and Streams")}}

The **`active`** read-only property of the
{{domxref("MediaStream")}} interface returns a Boolean value which is
`true` if the stream is currently active; otherwise, it returns
`false`. A stream is considered **active** if at least one of
its {{domxref("MediaStreamTrack")}}s does not have its property {{domxref("MediaStreamTrack.readyState")}}
set to `ended`. Once every track has ended, the stream's `active` property becomes
`false`.

## Value

A Boolean value which is `true` if the stream is currently active;
otherwise, the value is `false`.

## Examples

In this example, a new stream whose source is the user's local camera and microphone is
requested using {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}. When that
stream becomes available (that is, when the returned {{jsxref("Promise")}} is fulfilled,
a button on the page is updated based on whether or not the stream is currently active.

```js
const promise = navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
});

promise.then((stream) => {
  const startBtn = document.querySelector('#startBtn');
  startBtn.disabled = stream.active;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
