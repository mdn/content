---
title: AudioData.clone()
slug: Web/API/AudioData/clone
tags:
  - API
  - Method
  - Reference
  - clone
  - AudioData
browser-compat: api.AudioData.clone
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`clone()`** method of the {{domxref("AudioData")}} interface creates a new `AudioData` object with reference to the same media resource as the original.

## Syntax

```js
AudioData.clone()
```

### Parameters

None.

### Return Value

The cloned {{domxref("AudioData")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `AudioData` object has been {{domxref("Transferable","transfered")}}.

## Examples

The following example clones a copy of `AudioData` as `audioData2`.

```js
let audioData2 = AudioData.clone();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

