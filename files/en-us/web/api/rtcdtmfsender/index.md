---
title: RTCDTMFSender
slug: Web/API/RTCDTMFSender
page-type: web-api-interface
tags:
  - Audio
  - DTMF
  - Interface
  - Media
  - PSTN
  - RTCDTMFSender
  - Reference
  - Telephony
  - Touch-tone
  - WebRTC
  - WebRTC API
browser-compat: api.RTCDTMFSender
---
{{APIRef("WebRTC")}}

The **`RTCDTMFSender`** interface provides a mechanism for transmitting {{Glossary("DTMF")}} codes on a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}. You gain access to the connection's `RTCDTMFSender` through the {{domxref("RTCRtpSender.dtmf")}} property on the audio track you wish to send DTMF with.

The primary purpose for WebRTC's DTMF support is to allow WebRTC-based communication clients to be connected to a [public-switched telephone network (PSTN)](https://en.wikipedia.org/wiki/Public_switched_telephone_network) or other legacy telephone service, including extant voice over IP (VoIP) services. For that reason, DTMF can't be used between two WebRTC-based devices, because there is no mechanism provided by WebRTC for receiving DTMF codes.

{{InheritanceDiagram}}

## Properties

- {{domxref("RTCDTMFSender.toneBuffer")}} {{ReadOnlyInline}}
  - : A string which contains the list of DTMF tones currently in the queue to be transmitted (tones which have already been played are no longer included in the string). See {{domxref("RTCDTMFSender.toneBuffer", "toneBuffer")}} for details on the format of the tone buffer.

## Methods

- {{domxref("RTCDTMFSender.insertDTMF()")}}
  - : Given a string describing a set of DTMF codes and, optionally, the duration of and inter-tone gap between the tones, `insertDTMF()` starts sending the specified tones. Calling `insertDTMF()` replaces any already-pending tones from the `toneBuffer`. You can abort sending queued tones by specifying an empty string (`""`) as the set of tones to play.

## Events

Listen to these events using {{domxref("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}}
  - : The `tonechange` event is sent to the `RTCDTMFSender` instance's event handler to indicate that a tone has either started or stopped playing.

## Example

See the article [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF) for a full example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCRtpSender.dtmf")}}
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCRtpSender")}}
