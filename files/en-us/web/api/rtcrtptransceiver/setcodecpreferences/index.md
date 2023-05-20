---
title: "RTCRtpTransceiver: setCodecPreferences() method"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
page-type: web-api-instance-method
browser-compat: api.RTCRtpTransceiver.setCodecPreferences
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpTransceiver")}} method **`setCodecPreferences()`** configures the transceiver's preferred list of codecs.

The specified set of codecs will be used for all future connections that include this transceiver until this method is called again.

When preparing to open an {{domxref("RTCPeerConnection")}}, you can change the codec parameters from the {{Glossary("user agent", "user agent's")}} default configuration by calling `setCodecParameters()` _before_ calling either {{domxref("RTCPeerConnection.createOffer()")}} or {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}}.

A guide to codecs supported by WebRTC—and each codec's positive and negative characteristics—can be found in [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs).

## Syntax

```js-nolint
setCodecPreferences(codecs)
```

### Parameters

- `codecs`

  - : An array of objects, each providing the parameters for one of the transceiver's supported [media codecs](/en-US/docs/Web/Media/Formats/WebRTC_codecs), ordered by preference.
    If `codecs` is empty, the codec configurations are all returned to the user agent's defaults.

    > **Note:** Any codecs not included in `codecs` will not be considered during the process of negotiating a connection.
    > This lets you prevent the use of codecs you don't wish to use.

    Each codec object in the array has the following properties:

    - `channels` {{optional_inline}}
      - : A positive integer value indicating the maximum number of channels supported by the codec; for example, a codec that supports only mono sound would have a value of 1; stereo codecs would have a 2, etc.
    - `clockRate`
      - : A positive integer specifying the codec's clock rate in Hertz (Hz).
        The IANA maintains a [list of codecs and their parameters](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), including their clock rates.
    - `mimeType`
      - : A string indicating the codec's MIME media type and subtype.
        The MIME type strings used by RTP differ from those used elsewhere.
        See {{RFC(3555, "", 4)}} for the complete IANA registry of these types.
        Also see [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs) for details about potential codecs that might be referenced here.
    - `sdpFmtpLine` {{optional_inline}}
      - : A string giving the format specific parameters field from the `a=fmtp` line in the SDP which corresponds to the codec, if such a line exists.
        If there is no parameters field, this property is left out.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : The `codecs` list includes one or more codecs which are not supported by the transceiver.

## Usage notes

### Getting a list of supported codecs

You can only include in the `codecs` list codecs which the transceiver actually supports.
That means that either the associated {{domxref("RTCRtpSender")}} or the {{domxref("RTCRtpReceiver")}} needs to support every codec in the list.
If any unsupported codecs are listed, the browser will throw an `InvalidAccessError` exception when you call this method.

A good approach to setting codec preferences is to first get the list of codecs that are actually supported, then modify that list to match what you want.
Pass the altered list into `setCodecPreferences()` to specify your preferences.

To determine which codecs are supported by the transceiver, call the sender's {{domxref("RTCRtpSender.getCapabilities", "getCapabilities()")}} and the receiver's {{domxref("RTCRtpReceiver.getCapabilities", "getCapabilities()")}} methods and get the `codecs` array from the results of each.

The following code snippet demonstrates how to get both the list of codecs supported by the transceiver's {{domxref("RTCRtpSender")}} and {{domxref("RTCRtpReceiver")}}.

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
