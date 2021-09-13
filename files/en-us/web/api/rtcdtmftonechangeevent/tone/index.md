---
title: RTCDTMFToneChangeEvent.tone
slug: Web/API/RTCDTMFToneChangeEvent/tone
tags:
  - Media
  - Property
  - RTCDTMFToneChangeEvent
  - Reference
  - Touch-
  - WebRTC
  - WebRTC API
  - tone
browser-compat: api.RTCDTMFToneChangeEvent.tone
---
{{APIRef("WebRTC")}}

The read-only property **`RTCDTMFToneChangeEvent.tone`**
returns the DTMF character which has just begun to play, or an empty string
(`""`). if all queued tones have finished playing (that is,
{{domxref("RTCDTMFSender.toneBuffer")}} is empty).

## Syntax

```js
 var tone = dtmfToneChangeEvent.tone;
```

## Example

This example establishes a handler for the {{event("tonechange")}} event which updates
an element to display the currently playing tone in its content, or, if all tones have
played, the string "\<none>".

```js
dtmfSender.ontonechange = function( ev ) {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&lt;none&gt;"
  }

  document.getElementById("playingTone").innerText = tone;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- {{event("toneevent")}}
- {{domxref("RTCDTMFToneChangeEvent")}}
