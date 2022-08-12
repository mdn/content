---
title: RTCRtpSender.getParameters()
slug: Web/API/RTCRtpSender/getParameters
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - Method
  - RTCRtpSender
  - Reference
  - Video
  - WebRTC
  - WebRTC API
  - getParameters()
browser-compat: api.RTCRtpSender.getParameters
---
{{DefaultAPISidebar("WebRTC")}}

The **`getParameters()`** method of
the {{domxref("RTCRtpSender")}} interface returns an
{{domxref("RTCRtpSendParameters")}} object describing the current configuration for
the encoding and transmission of media on the sender's {{domxref("RTCRtpSender.track",
    "track")}}.

## Syntax

```js
getParameters()
```

### Parameters

None.

### Return value

An {{domxref("RTCRtpSendParameters")}} object indicating the current configuration of
the sender.

## Examples

This example gets the sender's current transaction ID; the transaction ID uniquely
identifies the current set of parameters, to ensure that calls to
{{domxref("RTCRtpSender.setParameters", "setParameters()")}} are always handled in the
correct order, avoiding inadvertently overwriting parameters with older parameters.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
