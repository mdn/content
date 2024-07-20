---
title: "RTCRtpTransceiver: setCodecPreferences() method"
short-title: setCodecPreferences()
slug: Web/API/RTCRtpTransceiver/setCodecPreferences
page-type: web-api-instance-method
browser-compat: api.RTCRtpTransceiver.setCodecPreferences
---

{{APIRef("WebRTC")}}

The **`setCodecPreferences()`** method of the {{domxref("RTCRtpTransceiver")}} interface is used to set the codecs that the transceiver allows for decoding _received_ data, in order of decreasing preference.

The preferences set using this method influence what codecs are negotiated with the remote peer for encoding the data that it sends, including those used for retransmission, redundancy, and forward error correction.
Codecs that are not included in the preferences list will not be part of the negotiation.
Note that the preferences used by this transceiver for _sending_ content depend on the preferences of the remote peer.

The recommended way to set codec preferences is to first get the array of codecs that are actually supported for decoding received data, then reorder them your in decreasing preference order.
This ensures that the array is ordered as required, does not contain any unsupported codecs, and also that it also contains codecs that are needed for retransmission, redundancy, and forward error correction.

The specified set of codecs will be used for all future connections that include this transceiver until this method is called again.

When preparing to open an {{domxref("RTCPeerConnection")}} the codecs should be set using `setCodecParameters()` _before_ calling either {{domxref("RTCPeerConnection.createOffer()")}} or {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}}, as these initiate the negotiation (and will use codec parameters from the {{Glossary("user agent", "user agent's")}} default configuration by default).

The codecs can be changed when you have an ongoing communication, but you need to first call `setCodecParameters()` and then kick off a new negotiation.
A WebRTC application will already have code for this in the [`negotiationneeded` event handler](/en-US/docs/Web/API/RTCPeerConnection/negotiationneeded_event).
Note however that at time of writing the event is not automatically fired when you call `setCodecParameters()`, so you will have to call `onnegotiationneeded` yourself.

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

      - : A positive integer indicating the number of channels supported by the codec.
        For example, for audio codecs a value of 1 specifies monaural sound, while 2 indicates stereo.

    - `clockRate`

      - : A positive integer specifying the codec's clock rate in Hertz (Hz).
        The clock rate is the rate at which the codec's RTP timestamp advances.
        Most codecs have specific values or ranges of values they permit.
        The IANA maintains a [list of codecs and their parameters](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), including their clock rates.

    - `mimeType`

      - : A string indicating the codec's MIME media type and subtype, specified as a string of the form `"type/subtype"`.
        The MIME type strings used by RTP differ from those used elsewhere.
        IANA maintains a [registry of valid MIME types](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Also see [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs) for details about potential codecs that might be referenced here.

    - `sdpFmtpLine` {{optional_inline}}

      - : A string giving the format specific parameters field from the `a=fmtp` line in the {{Glossary("SDP")}} which corresponds to the codec, if the field is present.
        If there is no parameters field, this property is left out.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : The `codecs` list includes one or more codecs which are not supported by the {{domxref("RTCRtpReceiver")}} associated with the transceiver.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : The `codecs` list only contains entries for RTX, RED, FEC or Comfort Noise, or is an empty set.
    The codecs must always contain a codec for the media.

## Examples

### Creating the array of preferred codecs

The recommended way to set codec preferences is to first get the array of codecs that are actually supported for decoding received data, then reorder the list in decreasing preference order.

It is important to start with the list of codecs that are supported (and not a hard coded list of your preferred codecs), because you if you include any that aren't supported by the associated {{domxref("RTCRtpReceiver")}} the browser will throw an `InvalidAccessError` exception when you call the `setCodecPreferences()` method.
In addition, the array has to include appropriate codecs for retransmission, redundancy, and forward error correction, and starting with the list of supported codecs ensures that these are present.

You can get the codecs supported for decoding data using the {{domxref("RTCRtpReceiver.getCapabilities_static", "RTCRtpReceiver.getCapabilities()")}} static method as shown:

```js
const availReceiveCodecs = transceiver.receiver.getCapabilities("video").codecs;
```

To reorder the codecs array to our preferred order, we can use the sorting fuction below to sort on MIME type (this comes from [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) on blog.mozilla.org (2024)).

```js
function sortByMimeTypes(codecs, preferredOrder) {
  return codecs.sort((a, b) => {
    const indexA = preferredOrder.indexOf(a.mimeType);
    const indexB = preferredOrder.indexOf(b.mimeType);
    const orderA = indexA >= 0 ? indexA : Number.MAX_VALUE;
    const orderB = indexB >= 0 ? indexB : Number.MAX_VALUE;
    return orderA - orderB;
  });
}
```

The method takes the list of supported codecs, and an array containing the preferred MIME types, in decreasing order, and returns the array sorted in place.
The code below shows how this is used, assuming that you have already set up a peer connection (`peerConnection`):

```js
// Get supported codecs the sort using preferred codecs
const supportedCodecs = RTCRtpReceiver.getCapabilities("video").codecs;
const preferredCodecs = ["video/H264", "video/VP8", "video/VP9"];
const sortedCodecs = sortByMimeTypes(supportedCodecs, preferredCodecs);

// Get transceiver for connection and set the preferences
const [transceiver] = peerConnection.getTransceivers();
transceiver.setCodecPreferences(sortedCodecs); // <---
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [setCodecPreferences is now in all browsers!](https://blog.mozilla.org/webrtc/cross-browser-support-for-choosing-webrtc-codecs/) on blog.mozilla.org (2024)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [Web media technologies](/en-US/docs/Web/Media)
