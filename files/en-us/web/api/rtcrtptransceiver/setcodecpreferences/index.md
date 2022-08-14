---
title: RTCRtpTransceiver.setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
page-type: web-api-instance-method
tags:
  - API
  - Codec
  - Codec Configuration
  - Codec Parameters
  - Codec Preferences
  - Media
  - Method
  - RTCRtpTransceiver
  - Reference
  - Settings
  - WebRTC
  - setCodecPreferences
browser-compat: api.RTCRtpTransceiver.setCodecPreferences
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpTransceiver")}} method
**`setCodecPreferences()`** configures the transceiver's
codecs given a list of {{domxref("RTCRtpCodecCapability")}} objects specifying the new
preferences for each {{Glossary("codec")}}.

The specified set of codecs and
configurations will be used for all future connections including this transceiver until
this method is called again.

When preparing to open an {{domxref("RTCPeerConnection")}}, you can change the codec
parameters from the {{Glossary("user agent", "user agent's")}} default configuration by
calling `setCodecParameters()` _before_ calling either
{{domxref("RTCPeerConnection.createOffer()")}} or
{{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}}.

A guide to codecs supported by WebRTC—and each codec's positive and negative
characteristics—can be found in [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs).

## Syntax

```js
setCodecPreferences(codecs)
```

### Parameters

- `codecs`

  - : An array of {{domxref("RTCRtpCodecCapability")}} objects, in order of preference,
    each providing the parameters for one of the transceiver's supported codecs. If
    `codecs` is empty, the codec configurations are all returned to the user
    agent's defaults.

    > **Note:** Any codecs not included in
    > `codecs` will not be considered during the process of negotiating a
    > connection. This lets you prevent the use of codecs you don't wish to use.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError`
  - : The `codecs` list includes one or more codecs which are not supported by
    the transceiver.

## Usage notes

### Getting a list of supported codecs

You can only include in the `codecs` list codecs which the transceiver
actually supports. That means that either the associated {{domxref("RTCRtpSender")}} or
the {{domxref("RTCRtpReceiver")}} needs to support every codec in the list. If any
unsupported codecs are listed, the browser will throw an `InvalidAccessError`
exception when you call this method.

A good approach to setting codec preferences is to first get the list of codecs that
are actually supported, then modify that list to match what you want. Pass the altered
list into `setCodecPreferences()` to specify your preferences.

To determine which codecs are supported by the transceiver, call the sender's
{{domxref("RTCRtpSender.getCapabilities", "getCapabilities()")}} and the receiver's
{{domxref("RTCRtpReceiver.getCapabilities", "getCapabilities()")}} methods and get the
{{domxref("RTCRtpCapabilities.codecs", "codecs")}} list from the results of each.

The following code snippet demonstrates how to get both the list of codecs supported by
the transceiver's {{domxref("RTCRtpSender")}} and {{domxref("RTCRtpReceiver")}}.

```js
const availSendCodecs = transceiver.sender.getCapabilities("video").codecs;
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [Web media technologies](/en-US/docs/Web/Media)
