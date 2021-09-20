---
title: AudioNode.channelInterpretation
slug: Web/API/AudioNode/channelInterpretation
tags:
  - API
  - AudioNode
  - Property
  - Reference
  - Web Audio API
  - channelInterpretation
browser-compat: api.AudioNode.channelInterpretation
---
{{ APIRef("Web Audio API") }}

The **`channelInterpretation`** property of the {{domxref("AudioNode")}} interface represents an enumerated value describing how input channels are mapped to output channels when the number of inputs/outputs is different. For example, this setting defines how a mono input will be up-mixed to a stereo or 5.1 channel output, or how a quad channel input will be down-mixed to a stereo or mono output.

The property has two options: `speakers` and `discrete`. These are documented in [Basic concepts behind Web Audio API > up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing).

## Syntax

```js
var oscillator = audioCtx.createOscillator();
oscillator.channelInterpretation = 'discrete';
```

### Value

The values are documented in [Basic concepts behind Web Audio API > up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing).

In summary:

- `speakers`
  - : Use set of "standard" mappings for combinations of common speaker input and outputs setups (mono, stereo, quad, 5.1). For example, with this setting a mono channel input will output to both channels of a stereo output.
- `discrete`
  - : Input channels are mapped to output channels in order. If there are more inputs that outputs the additional inputs are dropped; if there are fewer then the unused outputs are silent.

## Example

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelInterpretation = 'discrete';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
