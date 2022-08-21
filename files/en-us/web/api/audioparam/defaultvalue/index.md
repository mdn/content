---
title: AudioParam.defaultValue
slug: Web/API/AudioParam/defaultValue
page-type: web-api-instance-property
tags:
  - API
  - AudioParam
  - Property
  - Reference
  - Web Audio API
  - defaultValue
browser-compat: api.AudioParam.defaultValue
---
{{APIRef("Web Audio API")}}

The **`defaultValue`**
read-only property of the {{ domxref("AudioParam") }} interface represents the initial
value of the attributes as defined by the specific {{domxref("AudioNode")}} creating
the `AudioParam`.

## Value

A floating-point {{jsxref("Number")}}.

## Examples

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const defaultVal = gainNode.gain.defaultValue;
console.log(defaultVal); // 1
console.log(defaultVal === gainNode.gain.value); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
