---
title: "Navigator: mediaDevices property"
short-title: mediaDevices
slug: Web/API/Navigator/mediaDevices
page-type: web-api-instance-property
browser-compat: api.Navigator.mediaDevices
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

The **`Navigator.mediaDevices`** read-only property returns a
{{domxref("MediaDevices")}} object, which provides access to connected media input
devices like cameras and microphones, as well as screen sharing.

## Syntax

```js-nolint
navigator.mediaDevices
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

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API):
  The entry point to the documentation about the entire Media Capture and Streams API.
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API): Documentation about the
  WebRTC API, which is closely related.
