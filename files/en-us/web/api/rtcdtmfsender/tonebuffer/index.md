---
title: RTCDTMFSender.toneBuffer
slug: Web/API/RTCDTMFSender/toneBuffer
page-type: web-api-instance-property
tags:
  - Audio
  - DTMF
  - Media
  - Property
  - RTCDTMFSender
  - Reference
  - Telephony
  - Touch-tone
  - WebRTC
  - WebRTC API
  - toneBuffer
browser-compat: api.RTCDTMFSender.toneBuffer
---
{{APIRef("WebRTC")}}

The {{domxref("RTCDTMFSender")}} interface's toneBuffer property returns a string
containing a list of the {{Glossary("DTMF")}} tones currently queued for sending to the
remote peer over the {{domxref("RTCPeerConnection")}}. To place tones into the buffer,
call {{domxref("RTCDTMFSender.insertDTMF", "insertDTMF()")}}.

Tones are removed from the string as they're played, so only upcoming tones are listed.

## Value

A string listing the tones to be played. If the string is empty,
there are no tones pending.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if a character is not a DTMF tone character (0-9, A-D, # or ,).

### Tone buffer format

The tone buffer is a string which can contain any combination of the characters that
are permitted by the DTMF standard.

#### DTMF tone characters

- The digits 0-9
  - : These characters represent the digit keys on a telephone keypad.
- The letters A-D
  - : These characters represent the "A" through "D" keys which are part of the DTMF
    standard but not included on most telephones. These are *not* interpreted as
    digits. Lower-case "a"-"d" automatically gets converted to upper-case.
- The pound/hash sign ("#") and the asterisk ("\*")
  - : These correspond to the similarly-labeled keys which are typically on the bottom row
    of the telephone keypad.
- The comma (",")
  - : This character instructs the dialing process to pause for two seconds before sending
    the next character in the buffer.

> **Note:** All other characters are unrecognized and will cause
> {{domxref("RTCDTMFSender.insertDTMF", "insertDTMF()")}} to throw an
> `InvalidCharacterError` {{domxref("DOMException")}}.

#### Using tone buffer strings

For example, if you're writing code to control a voicemail system by sending DTMF
codes, you might use a string such as "\*,1,5555". In this example, we would send "\*" to
request access to the VM system, then, after a pause, send a "1" to start playback of
voicemail messages, then after a pause, dial "5555" as a PIN number to open the
messages.

Setting the tone buffer to an empty string (`""`) cancels any pending DTMF
codes.

## Example

tbd

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCDTMFSender.insertDTMF()")}}
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
