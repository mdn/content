---
title: Navigator.mediaDevices
slug: Web/API/Navigator/mediaDevices
tags:
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Navigator
  - Property
  - Read-only
  - Reference
  - Web
browser-compat: api.Navigator.mediaDevices
---
{{APIRef("Media Capture and Streams")}}

The **`Navigator.mediaDevices`** read-only property returns a
{{domxref("MediaDevices")}} object, which provides access to connected media input
devices like cameras and microphones, as well as screen sharing.

## Syntax

```js
var mediaDevices = navigator.mediaDevices;
```

### Return value

The {{domxref("MediaDevices")}} singleton object. Usually, you just use this object's
members directly, such as by calling
{{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API):
  The entry point to the documentation about the entire media stream API.
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API): Documentation about the
  WebRTC API, which is closely related.
