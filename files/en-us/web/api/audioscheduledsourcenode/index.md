---
title: AudioScheduledSourceNode
slug: Web/API/AudioScheduledSourceNode
page-type: web-api-interface
browser-compat: api.AudioScheduledSourceNode
---

{{APIRef("Web Audio API")}}

The `AudioScheduledSourceNode` interface—part of the Web Audio API—is a parent interface for several types of audio source node interfaces which share the ability to be started and stopped, optionally at specified times. Specifically, this interface defines the {{domxref("AudioScheduledSourceNode.start", "start()")}} and {{domxref("AudioScheduledSourceNode.stop", "stop()")}} methods, as well as the {{domxref("AudioScheduledSourceNode.ended_event", "ended")}} event.

> **Note:** You can't create an `AudioScheduledSourceNode` object directly. Instead, use an interface which extends it, such as {{domxref("AudioBufferSourceNode")}}, {{domxref("OscillatorNode")}} or {{domxref("ConstantSourceNode")}}.

Unless stated otherwise, nodes based upon `AudioScheduledSourceNode` output silence when not playing (that is, before `start()` is called and after `stop()` is called). Silence is represented, as always, by a stream of samples with the value zero (0).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent interface, {{domxref("AudioNode")}}._

## Instance methods

_Inherits methods from its parent interface, {{domxref("AudioNode")}}, and adds the following methods:_

- {{domxref("AudioScheduledSourceNode.start", "start()")}}
  - : Schedules the node to begin playing the constant sound at the specified time. If no time is specified, the node begins playing immediately.
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
  - : Schedules the node to stop playing at the specified time. If no time is specified, the node stops playing at once.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface:

- [`ended`](/en-US/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Fired when the source node has stopped playing, either because it's reached a predetermined stop time, the full duration of the audio has been performed, or because the entire buffer has been played.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioNode")}}
