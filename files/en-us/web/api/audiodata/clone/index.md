---
title: AudioData.clone()
slug: Web/API/AudioData/clone
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - clone
  - AudioData
  - Experimental
browser-compat: api.AudioData.clone
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`clone()`** method of the {{domxref("AudioData")}} interface creates a new `AudioData` object with reference to the same media resource as the original.

## Syntax

```js
clone()
```

### Parameters

None.

### Return value

The cloned {{domxref("AudioData")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `AudioData` object has been {{Glossary("Transferable Objects","transferred")}}.

## Examples

The following example clones a copy of `AudioData` as `audioData2`.

```js
let audioData2 = AudioData.clone();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
