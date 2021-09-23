---
title: RTCDTMFSender.ontonechange
slug: Web/API/RTCDTMFSender/ontonechange
tags:
  - DTMF
  - Event Handler
  - Property
  - RTCDTMFSender
  - Reference
  - Touch-tone
  - WebRTC
  - WebRTC API
  - ontonechange
browser-compat: api.RTCDTMFSender.ontonechange
---
{{ APIRef("WebRTC") }}{{draft}}

The **`ontonechange`** property of the {{
  domxref("RTCDTMFSender") }} interface is used to set the event handler for the
{{event("tonechange")}} event, which is sent to the `RTCDTMFSender` each time
a tone begins or ends. The event handler receives as input a single parameter of type
{{domxref("RTCDTMFToneChangeEvent")}}, which describes the change.

## Syntax

```js
RTCDTMFSender.ontonechange = toneChangeHandlerFunction;
```

### Value

A function which is called when a {{event("tonechange")}} event is sent to the
`RTCDTMFSender`, indicating that a DTMF tone has either started playing, or
if all tones have finished playing.

## Example

tbd

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCDTMFSender")}}
