---
title: "RTCDTMFToneChangeEvent: RTCDTMFToneChangeEvent() constructor"
short-title: RTCDTMFToneChangeEvent()
slug: Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent
page-type: web-api-constructor
browser-compat: api.RTCDTMFToneChangeEvent.RTCDTMFToneChangeEvent
---

{{APIRef("WebRTC")}}

The **`RTCDTMFToneChangeEvent()`** constructor creates a new
{{domxref("RTCDTMFToneChangeEvent")}} object.

## Syntax

```js-nolint
new RTCDTMFToneChangeEvent(type)
new RTCDTMFToneChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `tonechange`.
- `options` {{optional_inline}}

  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:

    - `tone` {{optional_inline}}
      - : A string containing a single DTMF tone character which has
        just begun to play, or an empty string (`""`) to indicate that the previous
        tone has stopped playing. It defaults to `""`.
        See [Tone characters](/en-US/docs/Web/API/RTCDTMFSender/toneBuffer#tone_buffer_format)
        for details on what characters are permitted.

### Return value

A new {{domxref("RTCDTMFToneChangeEvent")}} object, configured as specified in the
provided options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- Its usual target: {{domxref("RTCDTMFSender")}}.
