---
title: RTCDTMFToneChangeEvent
slug: Web/API/RTCDTMFToneChangeEvent
page-type: web-api-interface
browser-compat: api.RTCDTMFToneChangeEvent
---

{{APIRef("WebRTC")}}

The **`RTCDTMFToneChangeEvent`** interface represents events sent to indicate that {{Glossary("DTMF")}} tones have started or finished playing. This interface is used by the [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event.

{{InheritanceDiagram}}

## Instance properties

_In addition to the properties of {{domxref("Event")}}, this interface offers the following:_

- {{domxref("RTCDTMFToneChangeEvent.tone")}} {{ReadOnlyInline}}
  - : A string specifying the tone which has begun playing, or an empty string (`""`) if the previous tone has finished playing.

## Constructors

- {{domxref("RTCDTMFToneChangeEvent.RTCDTMFToneChangeEvent()", "RTCDTMFToneChangeEvent()")}}
  - : Returns a new `RTCDTMFToneChangeEvent`. It takes two parameters, the first being a string representing the type of the event (always `"tonechange"`); the second a dictionary containing the initial state of the properties of the event.

## Instance methods

_Supports the methods defined in {{domxref("Event")}}. There are no additional methods._

## Examples

This snippet is derived loosely from the full, working example you'll find in the section on [When a tone finishes playing](/en-US/docs/Web/API/WebRTC_API/Using_DTMF#when_a_tone_finishes_playing). It appends each tone to a display box as it's played, and, once all tones have been sent, re-enabled a previously-disabled "Send" button, allowing the next DMTF string to be entered.

```js
dtmfSender.addEventListener(
  "change",
  (event) => {
    if (event.tone !== "") {
      dialStringBox.innerText += event.tone;
    } else {
      sendDTMFButton.disabled = false;
    }
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- Its usual target: {{domxref("RTCDTMFSender")}}.
