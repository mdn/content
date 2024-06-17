---
title: "RTCRtpSender: getParameters() method"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
page-type: web-api-instance-method
browser-compat: api.RTCRtpSender.getParameters
---

{{DefaultAPISidebar("WebRTC")}}

The **`getParameters()`** method of the {{domxref("RTCRtpSender")}} interface returns an object describing the current configuration for how the sender's {{domxref("RTCRtpSender.track", "track")}} will be encoded and transmitted to a remote {{domxref("RTCRtpReceiver")}}.

## Syntax

```js-nolint
getParameters()
```

### Parameters

None.

### Return value

An object indicating the current configuration of the sender. <!-- RTCRtpSendParameters, derived from RTCRtpParameters -->

<!-- spec defines following in RTCRtpSendParameters -->

- `encodings`

  - : An array of objects, each specifying the parameters and settings for a single codec that could be used to encode the track's media.
    The properties of the objects include:

    - `active`

      - : `true` (the default) if the encoding is being sent, `false` if it is not being sent or used.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

      - : Only used for an {{domxref("RTCRtpSender")}} whose {{domxref("MediaStreamTrack.kind", "kind")}} is `audio`, this property indicates whether or not discontinuous transmission is being used (a feature by which a phone is turned off or the microphone muted automatically in the absence of voice activity).
        The value is taken either `enabled` or `disabled`.

    - `maxBitrate`

      - : A positive integer indicating the maximum number of bits per second that the user agent is allowed to grant to tracks encoded with this encoding.
        Other parameters may further constrain the bit rate, such as the value of `maxFramerate`, or the bandwidth available for the transport or physical network.

        The value is computed using the standard Transport Independent Application Specific Maximum (TIAS) bandwidth as defined by {{RFC(3890, "", "6.2.2")}}; this is the maximum bandwidth needed without considering protocol overheads from IP, TCP or UDP, and so forth.

        Note that the bitrate can be achieved in a number of ways, depending on the media and encoding.
        For example, for video a low bit rate might be achieved by dropping frames (a bitrate of zero might allow just one frame to be sent), while for audio the track might have to stop playing if the bitrate is too low for it to be sent.

    - `maxFramerate`
      - : A value specifying the maximum number of frames per second to allow for this encoding.
    - `priority`
      - : A string indicating the priority of the {{domxref("RTCRtpSender")}}, which may determine how the user agent allocates bandwidth between senders.
        Allowed values are `very-low`, `low` (default), `medium`, `high`.
    - `rid`
      - : A string which, if set, specifies an _RTP stream ID_ (_RID_) to be sent using the RID header extension.
        This parameter cannot be modified using {{domxref("RTCRtpSender.setParameters", "setParameters()")}}.
        Its value can only be set when the transceiver is first created.
    - `scaleResolutionDownBy`
      - : Only used for senders whose track's {{domxref("MediaStreamTrack.kind", "kind")}} is `video`, this is a floating-point value specifying a factor by which to scale down the video during encoding.
        The default value, 1.0, means that the video will be encoded at its original size.
        A value of 2.0 scales the video frames down by a factor of 2 in each dimension, resulting in a video 1/4 the size of the original.
        The value must not be less than 1.0 (attempting to scale the video to a larger size will throw a {{jsxref("RangeError")}}).

- `transactionId`
  - : A string containing a unique ID.
    This value is used to ensure that {{domxref("RTCRtpSender.setParameters", "setParameters()")}} can only be called to modify the parameters returned by a specific previous call to `getParameters()`.
    This parameter cannot be changed by the caller.
    <!-- spec defines following in RTCRtpParameters -->
- `codecs`

  - : An array of objects describing the [media codecs](/en-US/docs/Web/Media/Formats/WebRTC_codecs) that the sender has set as enabled, and is prepared to use.
    This parameter cannot be changed once initially set.

    Each codec object in the array may have the following properties: <!-- RTCRtpCodecParameters -->

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

    - `payloadType`

      - : The [RTP payload type](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1) used to identify this codec.

    - `sdpFmtpLine` {{optional_inline}}
      - : A string giving the format specific parameters provided by the local description.

- `headerExtensions`
  - : An array of zero or more RTP header extensions, each identifying an extension supported by the sender or receiver. Header extensions are described in {{RFC(3550, "", "5.3.1")}}.
    This parameter cannot be changed once initially set.
- `rtcp`
  - : An {{domxref("RTCRtcpParameters")}} object providing the configuration parameters used for {{Glossary("RTCP")}} on the sender or receiver.
    This parameter cannot be changed once initially set.
- `degradationPreference` {{deprecated_inline}} {{optional_inline}} <!-- removed from spec. May have been or be in chrome -->
  - : Specifies the preferred way the WebRTC layer should handle optimizing bandwidth against quality in constrained-bandwidth situations.
    The possible values are `maintain-framerate`, `maintain-resolution`, or `balanced`.
    The default value is `balanced`.

## Examples

This example gets the sender's current transaction ID; the transaction ID uniquely identifies the current set of parameters, to ensure that calls to {{domxref("RTCRtpSender.setParameters", "setParameters()")}} are always handled in the correct order, avoiding inadvertently overwriting parameters with older parameters.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

In the same way, this code gets the canonical name (CNAME) being used for {{Glossary("RTCP")}} on an {{domxref("RTCRtpSender")}}.

```js
function getRtpCNAME(sender) {
  let parameters = sender.getParameters();

  return parameters.rtcp.cname;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpSender.setParameters()")}}
- {{domxref("RTCRtpReceiver.getParameters()")}}
