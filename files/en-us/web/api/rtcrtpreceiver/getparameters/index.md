---
title: "RTCRtpReceiver: getParameters() method"
short-title: getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
page-type: web-api-instance-method
browser-compat: api.RTCRtpReceiver.getParameters
---

{{APIRef("WebRTC API")}}

The **`getParameters()`** method of the {{domxref("RTCRtpReceiver")}} interface returns an object describing the current configuration for how the receiver's {{domxref("RTCRtpReceiver.track", "track")}} is decoded.

## Syntax

```js-nolint
getParameters()
```

### Parameters

None.

### Return value

An object indicating the current configuration of the receiver.

<!-- Spec defines as RTCRtpReceiveParameters, which is just a RTCRtpParameters -->

- `codecs`

  - : An array of objects describing the [media codecs](/en-US/docs/Web/Media/Formats/WebRTC_codecs) that the receiver is ready to use.
    This is the subset of codecs that the receiver has indicated it prefers and that the remote endpoint has indicated it is prepared to send.
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
      - : A string giving the format specific parameters field from the `a=fmtp` line in the {{Glossary("SDP")}} which corresponds to the codec {{Glossary("SDP")}} from the remote peer, if the field is present.
        If there is no parameters field, this property is left out.
        See [section 5.8 of the IETF specification for JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8) for more information.

- `headerExtensions`
  - : An array of zero or more RTP header extensions, each identifying an extension supported by the sender or receiver.
    Header extensions are described in {{RFC(3550, "", "5.3.1")}}. This parameter cannot be changed once initially set.
- `rtcp`
  - : An {{domxref("RTCRtcpParameters")}} object providing the configuration parameters used for {{Glossary("RTCP")}} on the sender or receiver.
    This parameter cannot be changed once initially set.

## Examples

This example obtains the canonical name (CNAME) being used for {{Glossary("RTCP")}} on an {{domxref("RTCRtpReceiver")}}.

```js
function getRtcpCNAME(receiver) {
  let parameters = receiver.getParameters();

  return parameters.rtcp.cname;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
