---
title: "AudioData: clone() method"
short-title: clone()
slug: Web/API/AudioData/clone
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.AudioData.clone
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`clone()`** method of the {{domxref("AudioData")}} interface creates a new `AudioData` object with reference to the same media resource as the original.

## Syntax

```js-nolint
clone()
```

### Parameters

None.

### Return value

The cloned {{domxref("AudioData")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `AudioData` object has been [transferred](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

## Examples

The following example clones a copy of `AudioData` as `audioData2`.

```js
let audioData2 = AudioData.clone();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
