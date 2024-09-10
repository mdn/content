---
title: "HTMLMediaElement: remote property"
short-title: remote
slug: Web/API/HTMLMediaElement/remote
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.remote
---

{{APIRef("Remote Playback API")}}

The **`remote`** read-only property of the {{domxref("HTMLMediaElement")}} interface returns the {{domxref("RemotePlayback")}} object associated with the media element. The `RemotePlayback` object allow the control of remote devices playing the media.

## Value

A {{domxref("RemotePlayback")}} object associated with the media element.

## Example

```js
const el = document.createElement("audio");
const remotePlayback = el.remote;

remotePlayback.watchAvailability((availability) => {
  // Do something when the availability changes
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
