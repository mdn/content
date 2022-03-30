---
title: RTCDTMFToneChangeEvent()
slug: Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent
tags:
  - Constructor
  - DTMF
  - Media
  - RTCDTMFToneChangeEvent
  - Reference
  - WebRTC
  - WebRTC API
browser-compat: api.RTCDTMFToneChangeEvent.RTCDTMFToneChangeEvent
---
{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`RTCDTMFToneChangeEvent()`** constructor creates a new
{{domxref("RTCDTMFToneChangeEvent")}}.

## Syntax

```js
 new RTCDTMFToneChangeEvent(type, options);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} containing the name of the event. This is always
    `"tonechange"`.
- `options`

  - : A dictionary of type `RTCDTMFToneChangeEventInit`, which may contain one
    or more of the following fields:

    - `tone`
      - : A {{domxref("DOMString")}} containing a single DTMF tone character which has
        just begun to play, or an empty string (`""`) to indicate that the previous
        tone has stopped playing. See
        [Tone characters](/en-US/docs/Web/API/RTCDTMFSender/toneBuffer#tone_buffer_format)
        for details on what characters are permitted.

### Return value

A newly-created {{domxref("RTCDTMFToneChangeEvent")}}, configured as specified in the
provided options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- Its usual target: {{domxref("RTCDTMFSender")}}.
