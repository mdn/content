---
title: "RTCRtpReceiver: getContributingSources() method"
short-title: getContributingSources()
slug: Web/API/RTCRtpReceiver/getContributingSources
page-type: web-api-instance-method
browser-compat: api.RTCRtpReceiver.getContributingSources
---

{{APIRef("WebRTC API")}}

The **`getContributingSources()`**
method of the {{domxref("RTCRtpReceiver")}} interface returns an array of
{{domxref("RTCRtpContributingSource")}} instances, each corresponding to one CSRC
(contributing source) identifier received by the current `RTCRtpReceiver`
in the last ten seconds.

## Syntax

```js-nolint
getContributingSources()
```

### Parameters

None.

### Return value

An array of {{domxref("RTCRtpContributingSource")}} instances. Each instance describes
one of the contributing sources that provided data to the incoming stream in the past
ten seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
