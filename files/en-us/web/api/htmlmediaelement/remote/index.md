---
title: "HTMLMediaElement: remote property"
short-title: remote
slug: Web/API/HTMLMediaElement/remote
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.remote
---

{{APIRef("Remote Playback API")}}

The **`remote`** read-only property of the {{domxref("HTMLMediaElement")}} interface return a {{domxref("RemotePlayback")}} object instance associated with the media element. This is the entry point of the {{domxref("Remote Playback API", "Remote Playback API", "", "nocode")}}.

## Value

A {{domxref("RemotePlayback")}} object instance.

## Example

```js
const el = document.createElement("audio");
const remotePlayback = el.remote;

remotePlayback.watchAvailability((availability) => {
  // do something when the availability changes
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
