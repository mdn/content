---
title: BaseAudioContext.listener
slug: Web/API/BaseAudioContext/listener
page-type: web-api-instance-property
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Property
  - Reference
  - Web Audio API
  - listener
  - spatialization
browser-compat: api.BaseAudioContext.listener
---
{{ APIRef("Web Audio API") }}

The `listener` property of the {{ domxref("BaseAudioContext") }} interface
returns an {{ domxref("AudioListener") }} object that can then be used for
implementing 3D audio spatialization.

## Value

An {{ domxref("AudioListener") }} object.

## Examples

> **Note:** for a full Web Audio spatialization example, see our [panner-node](https://github.com/mdn/webaudio-examples/tree/master/panner-node) demo.

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

const myListener = audioCtx.listener;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
