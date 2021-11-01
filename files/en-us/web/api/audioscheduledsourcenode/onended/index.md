---
title: AudioScheduledSourceNode.onended
slug: Web/API/AudioScheduledSourceNode/onended
tags:
  - API
  - Audio
  - AudioBufferSourceNode
  - AudioScheduledSourceNode
  - ConstantSourceNode
  - Event Handler
  - Media
  - OscillatorNode
  - Property
  - Web Audio API
  - onended
browser-compat: api.AudioScheduledSourceNode.onended
---
{{APIRef("Web Audio API")}}

The `onended` event handler for the `AudioScheduledSourceNode`
interface specifies an [event handler](/en-US/docs/Web/Events/Event_handlers) to be executed when the
{{event("ended")}} event occurs on the node. This event is sent to the node when the
concrete interface (such as {{domxref("AudioBufferSourceNode")}},
{{domxref("OscillatorNode")}}, or {{domxref("ConstantSourceNode")}}) determines that it
has stopped playing.

> **Note:** The {{event("ended")}} event is only sent to a node configured to loop automatically
> when the node is stopped using its {{domxref("AudioScheduledSourceNode.stop",
    "stop()")}} method. This is the case, for example, when using an
> {{domxref("AudioBufferSourceNode")}} with its {{domxref("AudioBufferSourceNode.loop",
    "loop")}} property set to `true`.

## Syntax

```js
AudioScheduledSourceNode.onended = EventHandler;
```

### Value

A function which is called by the browser when the {{event("ended")}} event occurs on
the {{domxref("AudioScheduledSourceNode")}}. The function receives as input a single
parameter, which is an object of type {{domxref("Event")}} describing the event that
occurred.

## Example

The following example shows basic usage of an {{ domxref("AudioContext") }} to create an oscillator node. For an applied example, check out our [Violent Theremin demo](https://mdn.github.io/violent-theremin/) ([see app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js) for relevant code).

```js
// create web audio api context
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // create Oscillator node
  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.value = 440; // value in hertz
  oscillator.start(); // start the tone playing

  oscillator.stop(5); // the tone will stop again in 5 seconds.

  oscillator.onended = function() {
    console.log('Your tone has now stopped playing!');
  }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The
  [`ended`](/en-US/docs/Web/API/AudioScheduledSourceNode/ended_event)
  event and its type, {{domxref("Event")}}.
- {{domxref("AudioScheduledSourceNode")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
