---
title: RTCRtpReceiveParameters
slug: Web/API/RTCRtpReceiveParameters
page-type: web-api-interface
tags:
  - API
  - Configuration
  - Dictionary
  - Media
  - Options
  - RTCRtpReceiveParameters
  - RTP
  - Reference
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - parameters
browser-compat: api.RTCRtpReceiveParameters
---
{{DefaultAPISidebar("WebRTC")}}

The **`RTCRtpReceiveParameters`** dictionary, based upon the {{domxref("RTCRtpParameters")}} dictionary, is returned by the {{domxref("RTCRtpReceiver")}} method {{domxref("RTCRtpReceiver.getParameters", "getParameters()")}}. It describes the parameters being used by the receiver's {{Glossary("RTP")}} connection to the remote peer.

## Properties

_This dictionary currently has no properties of its own; it exists for future expansion. It inherits all of the properties of its parent, {{domxref("RTCRtpParameters")}}._

## Examples

See [`RTCRtpReceiver.getParameters()`](/en-US/docs/Web/API/RTCRtpReceiver/getParameters#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpSendParameters")}} and {{domxref("RTCRtpSender.setParameters()")}}
