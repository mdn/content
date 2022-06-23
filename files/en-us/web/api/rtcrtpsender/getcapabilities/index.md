---
title: RTCRtpSender.getCapabilities() static function
slug: Web/API/RTCRtpSender/getCapabilities
page-type: web-api-static-method
tags:
  - API
  - Audio
  - Codecs
  - Media
  - Method
  - RTCRtpSender
  - Reference
  - Static Function
  - Video
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - capabilities
  - getCapabilities
browser-compat: api.RTCRtpSender.getCapabilities
---
{{DefaultAPISidebar("WebRTC")}}

The _static function_
**`RTCRtpSender.getCapabilities()`** returns
an {{domxref("RTCRtpCapabilities")}} object describing the codecs and capabilities
supported by the {{domxref("RTCRtpSender")}}.

You can, similarly, obtain the capabilities of {{domxref("RTCRtpReceiver")}}s by
calling the static function {{domxref("RTCRtpReceiver.getCapabilities()")}}.

## Syntax

```js
getCapabilities(kind) //static function
```

### Parameters

- `kind`
  - : A string indicating the type of media for which you wish to get
    the sender's capability to receive. All browsers support the primary media kinds:
    `audio` and `video`.

### Return value

An {{domxref("RTCRtpCapabilities")}} object stating what capabilities the browser has
for sending the specified media kind over an {{domxref("RTCPeerConnection")}}. If the
browser doesn't have any support for the given media kind, the returned value is
`null`.

## Description

As a static function, this is always called using the form:

```js
capabilities = RTCRtpSender.getCapabilities("audio");
```

The returned set of capabilities is the most optimistic possible list. It is entirely
possible that certain combinations of options may fail to work when you actually try to
use them.

Calling `RTCRtpSender.getCapabilities()` doesn't prime the browser in any
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
sending H.264 video on an {{domxref("RTCRtpSender")}}.

> **Note:** Since `RTCRtpSender.getCapabilities()` actually only indicates
> _probable_ support, H.264 support might still fail even after getting a
> positive response from this function.

```js
function canSendH264() {
  let capabilities = RTCRtpSender.getCapabilities("video");

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
