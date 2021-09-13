---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
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

## Properties

_The list below includes the properties inherited from its parent, {{domxref("Event")}}_.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Property</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>target</code> {{ReadOnlyInline}}</td>
      <td>{{domxref("EventTarget")}}</td>
      <td>The event target (the topmost target in the DOM tree).</td>
    </tr>
    <tr>
      <td><code>type</code> {{ReadOnlyInline}}</td>
      <td>{{domxref("DOMString")}}</td>
      <td>The type of event.</td>
    </tr>
    <tr>
      <td><code>bubbles</code> {{ReadOnlyInline}}</td>
      <td><code>boolean</code></td>
      <td>Does the event normally bubble?</td>
    </tr>
    <tr>
      <td><code>cancelable</code> {{ReadOnlyInline}}</td>
      <td><code>boolean</code></td>
      <td>Is it possible to cancel the event?</td>
    </tr>
    <tr>
      <td><code>playbackTime</code> {{ReadOnlyInline}}</td>
      <td><code>double</code></td>
      <td>
        The time when the audio will be played, as defined by the time of
        {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}
      </td>
    </tr>
    <tr>
      <td><code>inputBuffer</code> {{ReadOnlyInline}}</td>
      <td>{{domxref("AudioBuffer")}}</td>
      <td>
        The buffer containing the input audio data to be processed. The number
        of channels is defined as a parameter,
        <code>numberOfInputChannels</code>, of the factory method
        {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}.
        Note the returned <code>AudioBuffer</code> is only valid in the scope of
        the <code>onaudioprocess</code> function.
      </td>
    </tr>
    <tr>
      <td><code>outputBuffer</code> {{ReadOnlyInline}}</td>
      <td>{{domxref("AudioBuffer")}}</td>
      <td>
        The buffer where the output audio data should be written. The number of
        channels is defined as a parameter, <code>numberOfOutputChannels</code>,
        of the factory method
        {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}.
        Note the returned <code>AudioBuffer</code> is only valid in the scope of
        the <code>onaudioprocess</code> function.
      </td>
    </tr>
  </tbody>
</table>

## Example

See [`BaseAudioContext.createScriptProcessor()`](/en-US/docs/Web/API/BaseAudioContext/createScriptProcessor#example) for example code that uses an `AudioProcessingEvent`.

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
