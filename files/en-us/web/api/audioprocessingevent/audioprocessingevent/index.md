---
title: "AudioProcessingEvent: AudioProcessingEvent() constructor"
short-title: AudioProcessingEvent()
slug: Web/API/AudioProcessingEvent/AudioProcessingEvent
page-type: web-api-constructor
status:
  - deprecated
browser-compat: api.AudioProcessingEvent.AudioProcessingEvent
---

{{APIRef}}{{Deprecated_header}}

The **`AudioProcessingEvent()`** constructor creates a new {{domxref("AudioProcessingEvent")}} object.

> [!NOTE]
> Usually, this constructor is not directly called by your code, as the browser creates these objects itself and provides them to the event handler.

## Syntax

```js-nolint
new AudioProcessingEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `audioprocess`.
- `options`
  - : An object that has the following properties:
    - `playbackTime`
      - : A number representing the time when the audio will be played.
    - `inputBuffer`
      - : An {{domxref("AudioBuffer")}} containing the input audio data.
    - `outputBuffer`
      - : An {{domxref("AudioBuffer")}} where the output audio data will be written.

### Return value

A new {{domxref("AudioProcessingEvent")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioProcessingEvent")}}
- {{domxref("ScriptProcessorNode")}}
