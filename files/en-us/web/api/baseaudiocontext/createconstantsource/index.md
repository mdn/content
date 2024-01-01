---
title: "BaseAudioContext: createConstantSource() method"
short-title: createConstantSource()
slug: Web/API/BaseAudioContext/createConstantSource
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createConstantSource
---

{{APIRef("Web Audio API")}}

The **`createConstantSource()`**
property of the {{domxref("BaseAudioContext")}} interface creates a
{{domxref("ConstantSourceNode")}} object, which is an audio source that continuously
outputs a monaural (one-channel) sound signal whose samples all have the same
value.

> **Note:** The {{domxref("ConstantSourceNode.ConstantSourceNode", "ConstantSourceNode()")}}
> constructor is the recommended way to create a {{domxref("ConstantSourceNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createConstantSource()
```

### Parameters

None.

### Return value

A {{domxref('ConstantSourceNode')}} instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
