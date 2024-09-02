---
title: "RTCDTMFSender: insertDTMF() method"
short-title: insertDTMF()
slug: Web/API/RTCDTMFSender/insertDTMF
page-type: web-api-instance-method
browser-compat: api.RTCDTMFSender.insertDTMF
---

{{APIRef("WebRTC")}}

The **`insertDTMF()`** method of the {{domxref("RTCDTMFSender")}} interface sends {{Glossary("DTMF")}} tones to the remote peer over the {{domxref("RTCPeerConnection")}}.

Tones are sent asynchronously. Every time a tone starts or ends, a [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event is sent to the `RTCDTMFSender`.

You can call `insertDTMF()` at any time while the connection is active. Each call to `insertDTMF()` replaces any pending tones in the `toneBuffer`.
You can abort sending queued tones by specifying an empty string (`""`) as the set of tones to play.
Since `insertDTMF()` replaces the tone buffer, in order to add to the DTMF tones being played, it is necessary to call `insertDTMF()` with a string containing both the remaining tones (stored in the `toneBuffer`) and the new tones appended together.

## Syntax

```js-nolint
insertDTMF(tones)
insertDTMF(tones, duration)
insertDTMF(tones, duration, interToneGap)
```

### Parameters

- `tones`
  - : A string containing the DTMF codes to be transmitted to the recipient.
    Specifying an empty string as the `tones` parameter clears the tone buffer, aborting any currently queued tones.
    A comma character `,` in the string inserts a two-second delay. For example `"12,34"` will send tones for `1` and `2`, pause for two seconds, and then send `3` and `4`. Multiple commas add a longer delay, so `,,` will add four seconds.
- `duration` {{optional_inline}}
  - : The amount of time, in milliseconds, that each DTMF tone should last.
    This value must be between 40 ms and 6000 ms (6 seconds), inclusive. The default is 100 ms.
- `interToneGap` {{optional_inline}}
  - : The length of time, in milliseconds, to wait between tones.
    The browser will enforce a minimum value of 30 ms (that is, if you specify a lower value, 30 ms will be used instead). The default is 70 ms.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the DTMF tones cannot be sent because the track has been stopped or is in a read-only or inactive state.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if one or more of the characters in `tones` is not valid DTMF (`0-9`, `A-Z`, `#`, or `,`).

## Examples

### Using insertDTMF to send DTMF tones

This example shows how to use the `insertDTMF()` method to send tones over a WebRTC connection.

The code first checks if the `canInsertDTMF` property is defined, and if so, uses it to check whether inserting DTMF tones is supported.
If the feature is supported, `insertDTMF()` is called to insert a tone.

```js
if (sender.dtmf.canInsertDTMF) {
  const duration = 500;
  sender.dtmf.insertDTMF("1234", duration);
} else {
  console.log("DTMF function not available");
}
```

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
