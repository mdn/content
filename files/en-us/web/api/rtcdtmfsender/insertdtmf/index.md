---
title: RTCDTMFSender.insertDTMF()
slug: Web/API/RTCDTMFSender/insertDTMF
page-type: web-api-instance-method
tags:
  - API
  - DTMF
  - Media
  - Method
  - RTCDTMFSender
  - Reference
  - Telephony
  - Touch-tone
  - WebRTC
  - WebRTC API
  - insertDTMF
browser-compat: api.RTCDTMFSender.insertDTMF
---
{{APIRef("WebRTC")}}

The **`insertDTMF()`** method on the {{domxref("RTCDTMFSender")}} interface
starts sending {{Glossary("DTMF")}} tones to the remote peer over the
{{domxref("RTCPeerConnection")}}.

Sending of the tones is performed asynchronously,
with [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) events sent to the `RTCDTMFSender` every time
a tone starts or ends.

As long as the connection is active, you can send tones at any time. Calling
`insertDTMF()` replaces any already-pending tones from the `toneBuffer`.
You can abort sending queued tones by specifying an empty string (`""`) as the set of tones to play.
Since `insertDTMF()` replaces the tone buffer, in order to add to the DTMF tones being played, it is necessary to call
`insertDTMF` with a string containing both the remaining tones (stored in the `toneBuffer`) and the new tones appended together.

## Syntax

```js
insertDTMF(tones)
insertDTMF(tones, duration)
insertDTMF(tones, duration, interToneGap)
```

### Parameters

- `tones`
  - : A string containing the DTMF codes to be transmitted to the
    recipient. Specifying an empty string as the `tones` parameter clears the
    tone buffer, aborting any currently queued tones. A "," character inserts a two second
    delay.
- `duration` {{optional_inline}}
  - : The amount of time, in milliseconds, that each DTMF tone should last. This value
    must be between 40 ms and 6000 ms (6 seconds), inclusive. The default is 100 ms.
- `interToneGap` {{optional_inline}}
  - : The length of time, in milliseconds, to wait between tones. The browser will enforce
    a minimum value of 30 ms (that is, if you specify a lower value, 30 ms will be used
    instead); the default is 70 ms.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the DTMF tones couldn't be sent because the track has been stopped or is in a
    read-only or inactive state.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if one or more of the characters in `tones` is not valid DTMF (0-9, A-Z, # or ,).

## Examples

tbd

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
