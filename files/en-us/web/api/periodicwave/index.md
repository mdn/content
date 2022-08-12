---
title: PeriodicWave
slug: Web/API/PeriodicWave
page-type: web-api-interface
tags:
  - API
  - Audio
  - Interface
  - Media
  - PeriodicWave
  - Reference
  - Web Audio
  - Web Audio API
  - waveform
browser-compat: api.PeriodicWave
---
{{ APIRef("Web Audio API") }}

The **`PeriodicWave`** interface defines a periodic waveform that can be used to shape the output of an {{domxref("OscillatorNode")}}.

`PeriodicWave` has no inputs or outputs; it is used to define custom oscillators when calling {{domxref("OscillatorNode.setPeriodicWave()")}}. The `PeriodicWave` itself is created/returned by {{domxref("BaseAudioContext.createPeriodicWave")}}.

## Constructor

- {{domxref("PeriodicWave.PeriodicWave", "PeriodicWave()")}}
  - : Creates a new `PeriodicWave` object instance using the default values for all properties. If you wish to establish custom property values at the outset, use the {{domxref("BaseAudioContext.createPeriodicWave")}} factory method instead.

## Properties

_None; also, `PeriodicWave` doesn't inherit any properties._

## Methods

_None; also, `PeriodicWave` doesn't inherit any methods._

## Example

See {{domxref("BaseAudioContext.createPeriodicWave")}} for simple example code that shows how to create a `PeriodicWave` object containing a simple sine wave.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
