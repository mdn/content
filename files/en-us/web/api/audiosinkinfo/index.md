---
title: AudioSinkInfo
slug: Web/API/AudioSinkInfo
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioSinkInfo
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The **`AudioSinkInfo`** interface of the {{domxref("Web Audio API", "Web Audio API", "", "nocode")}} represents information describing an {{domxref("AudioContext")}}'s sink ID, retrieved via {{domxref("AudioContext.sinkId")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("AudioSinkInfo.type", "type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the type of the audio output device.

## Examples

If a new {{domxref("AudioContext")}} is created with a `sinkId` value of `{ type: 'none' }`, calling {{domxref("AudioContext.sinkId")}} later in the code will return a `AudioSinkInfo` object containing `type: 'none'`. This is currently the only value available.

```js
audioCtx = new window.AudioContext({
  sinkId: { type: "none" },
});

// …

audioCtx.sinkId;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SetSinkId test example](https://set-sink-id.glitch.me/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext.sinkId")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}
