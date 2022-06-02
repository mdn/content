---
title: RTCRtpReceiver.getCapabilities() static function
slug: Web/API/RTCRtpReceiver/getCapabilities
page-type: web-api-static-method
tags:
  - API
  - Audio
  - Codecs
  - Compatibility
  - Media
  - Method
  - Negotiation
  - RTCRtpReceiver
  - Reference
  - Static
  - Static Function
  - Video
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - capabilities
  - getCapabilities
browser-compat: api.RTCRtpReceiver.getCapabilities
---
{{DefaultAPISidebar("WebRTC")}}

The _static function_
**`RTCRtpReceiver.getCapabilities()`** returns
an {{domxref("RTCRtpCapabilities")}} object describing the codecs and capabilities
supported by {{domxref("RTCRtpReceiver")}}s on the current device.

You can, similarly, obtain the capabilities of {{domxref("RTCRtpSender")}}s by calling
the static function {{domxref("RTCRtpSender.getCapabilities()")}}.

## Syntax

```js
getCapabilities(kind) //static function
```

### Parameters

- `kind`
  - : A string indicating the type of media for which you wish to get
    the device's capability to receive. All browsers support the primary media kinds:
    `audio` and `video`.

### Return value

An {{domxref("RTCRtpCapabilities")}} object stating what capabilities the browser has
for receiving the specified media kind over an {{domxref("RTCPeerConnection")}}. If the
browser doesn't have any support for the given media kind, the returned value is
`null`.

## Description

As a static function, this is always called using the form:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

The returned set of capabilities is the most optimistic possible list. It is entirely
possible that certain combinations of options may fail to work when you actually try to
use them.

Calling `RTCRtpReceiver.getCapabilities()` doesn't prime the browser in any
way to handle media. Nothing is loaded, fetched, or otherwise prepared. It's a means of
determining what might be usable before starting to try to access media.

Because the set of capabilities available tend to be stable for a length of time
(people don't install and uninstall codecs and the like very often), the media
capabilities can in whole or in part provide a cross-origin method for identifying a
user. For that reason, in privacy-sensitive contexts, the browser may choose to obscure
the capabilities; this might be done, for example, by leaving out rarely-used codec
configurations.

## Examples

The function below returns a Boolean indicating whether or not the device supports
receiving H.264 video on a WebRTC connection.

> **Note:** Since `RTCRtpReceiver.getCapabilities()` actually only indicates
> _probable_ support, attempting to receive H.264 video might still fail even
> after getting a positive response from this function.

```js
function canReceiveH264() {
  let capabilities = RTCRtpReceiver.getCapabilities("video");

  capabilities.codecs.forEach((codec) => {
    if (codec.mimeType === "video/H264") {
      return true;
    }
  });
  return false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
