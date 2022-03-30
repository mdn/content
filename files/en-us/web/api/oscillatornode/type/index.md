---
title: OscillatorNode.type
slug: Web/API/OscillatorNode/type
tags:
  - API
  - OscillatorNode
  - Property
  - Reference
  - Type
  - Web Audio API
browser-compat: api.OscillatorNode.type
---
{{ APIRef("Web Audio API") }}

The **`type`** property of the {{ domxref("OscillatorNode")
    }} interface specifies what shape of {{interwiki("wikipedia", "waveform")}} the
oscillator will output. There are several common waveforms available, as well as an
option to specify a custom waveform shape. The shape of the waveform will affect the
tone that is produced.

## Syntax

```js
OscillatorNode.type = type;
```

### Value

A {{domxref("DOMString")}} specifying the shape of oscillator wave. The different
available values are:

- `sine`
  - : A {{interwiki("wikipedia", "sine wave")}}. This is the default value.
- `square`
  - : A {{interwiki("wikipedia", "square wave")}} with a {{interwiki("wikipedia", "duty
    cycle")}} of 0.5; that is, the signal is "high" for half of each period.
- `sawtooth`
  - : A {{interwiki("wikipedia", "sawtooth wave")}}.
- `triangle`
  - : A {{interwiki("wikipedia", "triangle wave")}}.
- `custom`
  - : A custom waveform. You never set `type` to `custom` manually;
    instead, use the {{domxref("OscillatorNode.setPeriodicWave", "setPeriodicWave()")}}
    method to provide the data representing the waveform. Doing so automatically sets the
    `type` to `custom`.

### Exceptions

- `InvalidStateError`  {{domxref("DOMException")}}
  - : Thrown if the value `custom` was specified. To set a custom waveform, just call
    {{domxref("OscillatorNode.setPeriodicWave", "setPeriodicWave()")}}. Doing so
    automatically sets the type for you.

## Example

The following example shows basic usage of an {{ domxref("AudioContext") }} to create
an oscillator node. For an applied example, check out our [Violent Theremin demo](https://mdn.github.io/violent-theremin/) ([see
app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js) for relevant code).

```js
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = 'square';
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
