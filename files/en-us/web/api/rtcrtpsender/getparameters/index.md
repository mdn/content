---
title: RTCRtpSender.getParameters()
slug: Web/API/RTCRtpSender/getParameters
page-type: web-api-instance-method
browser-compat: api.RTCRtpSender.getParameters
---

{{DefaultAPISidebar("WebRTC")}}

The **`getParameters()`** method of the {{domxref("RTCRtpSender")}} interface returns an object describing the current configuration for the encoding and transmission of media on the sender's {{domxref("RTCRtpSender.track", "track")}}.

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
  - : An array of {{domxref("RTCRtpEncodingParameters")}} objects, each specifying the parameters and settings for a single codec that could be used to encode the track's media.

    In a connection in which there's only one remote peer, the `encodings` array will have just one object in it, describing the encoding to use when transmitting to that peer.
    For each peer you add the {{domxref("RTCRtpSender")}} to, another entry is added to `encodings` to describe its configuration.

- {{domxref("RTCRtpSendParameters.transactionId", "transactionId")}}
  - : A string containing a unique ID for the last set of parameters applied; this value is used to ensure that {{domxref("RTCRtpSender.setParameters", "setParameters()")}} can only be called to alter changes made by a specific previous call to {{domxref("RTCRtpSender.getParameters", "getParameters()")}}. Once this parameter is initially set, it cannot be changed.
<!-- spec defines following in RTCRtpParameters -->
- {{domxref("RTCRtpParameters.codecs", "codecs")}}
  - : An array of {{domxref("RTCRtpCodecParameters")}} objects describing the set of codecs from which the sender or receiver will choose. This parameter cannot be changed once initially set.
- {{domxref("RTCRtpParameters.headerExtensions", "headerExtensions")}}
  - : An array of zero or more RTP header extensions, each identifying an extension supported by the sender or receiver. Header extensions are described in {{RFC(3550, "", "5.3.1")}}. This parameter cannot be changed once initially set.
- {{domxref("RTCRtpParameters.rtcp", "rtcp")}}
  - : An {{domxref("RTCRtcpParameters")}} object providing the configuration parameters used for {{Glossary("RTCP")}} on the sender or receiver. This parameter cannot be changed once initially set.
- {{domxref("RTCRtpSendParameters.degradationPreference", "degradationPreference")}} {{deprecated_inline}} {{optional_inline}}
  - : Specifies the preferred way the WebRTC layer should handle optimizing bandwidth against quality in constrained-bandwidth situations; the possible values are `maintain-framerate`, `maintain-resolution`, or `balanced`. The default value is `balanced`.

## Examples

This example gets the sender's current transaction ID; the transaction ID uniquely identifies the current set of parameters, to ensure that calls to {{domxref("RTCRtpSender.setParameters", "setParameters()")}} are always handled in the correct order, avoiding inadvertently overwriting parameters with older parameters.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

In the same, way, this code gets the canonical name (CNAME) being used for {{Glossary("RTCP")}} on an {{domxref("RTCRtpSender")}}.

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
