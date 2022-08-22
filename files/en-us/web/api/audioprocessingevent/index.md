---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
page-type: web-api-interface
tags:
  - API
  - Deprecated
  - Interface
  - Internationalization
  - Reference
  - Web Audio API
browser-compat: api.AudioProcessingEvent
---
{{APIRef("Web Audio API")}}{{deprecated_header}}

The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) `AudioProcessingEvent` represents events that occur when a {{domxref("ScriptProcessorNode")}} input buffer is ready to be processed.

> **Note:** As of the August 29 2014 Web Audio API spec publication, this feature has been marked as deprecated, and is soon to be replaced by [AudioWorklet](https://webaudio.github.io/web-audio-api/#audioworklet).

{{InheritanceDiagram}}

## Constructor

- `AudioProcessingEvent()` {{Deprecated_Inline}}
  - : Creates a new `AudioProcessingEvent` object.

## Properties

_Also implements the properties inherited from its parent, {{domxref("Event")}}_.

- `playbackTime` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : A double representing the time when the audio will be played,
    as defined by the time of {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}.
- `inputBuffer` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : An {{domxref("AudioBuffer")}} that is the buffer containing the input audio data to be processed.
    The number of channels is defined as a parameter `numberOfInputChannels`,
    of the factory method {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}.
    Note that the returned <code>AudioBuffer</code> is only valid in the scope of the event handler.
- `outputBuffer` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : An {{domxref("AudioBuffer")}} that is the buffer where the output audio data should be written.
    The number of channels is defined as a parameter, <code>numberOfOutputChannels</code>,
    of the factory method {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}.
    Note that the returned <code>AudioBuffer</code> is only valid in the scope of the event handler.

## Example

See [`BaseAudioContext.createScriptProcessor()`](/en-US/docs/Web/API/BaseAudioContext/createScriptProcessor#example) for example code that uses an `AudioProcessingEvent`.

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
