---
title: RTCRtpReceiver.getContributingSources()
slug: Web/API/RTCRtpReceiver/getContributingSources
page-type: web-api-instance-method
tags:
  - API
  - CSRC
  - Contributing Sources
  - Media
  - Method
  - RTCRtpReceiver
  - Reference
  - WebRTC
  - getContributingSources
browser-compat: api.RTCRtpReceiver.getContributingSources
---
{{APIRef("WebRTC API")}}

The **`getContributingSources()`**
method of the {{domxref("RTCRtpReceiver")}} interface returns an array of
{{domxref("RTCRtpContributingSource")}} instances, each corresponding to one CSRC
(contributing source) identifier received by the current `RTCRtpReceiver`
in the last ten seconds.

## Syntax

```js
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
