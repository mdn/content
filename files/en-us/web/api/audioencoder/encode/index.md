---
title: AudioEncoder.encode()
slug: Web/API/AudioEncoder/encode
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - encode
  - AudioEncoder
  - Experimental
browser-compat: api.AudioEncoder.encode
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`encode()`** method of the {{domxref("AudioEncoder")}} interface enqueues a control message to encode a given {{domxref("AudioData")}} object.

## Syntax

```js
encode(data)
```

### Parameters

- `data`
  - : An {{domxref("AudioData")}} object.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("AudioEncoder.state","state")}} is not `"configured"`.
- {{jsxref("TypeError")}}
  - : Thrown if the `AudioData` object has been {{Glossary("Transferable Objects","transferred")}}.

## Examples

In the following example `encode` is passed an `AudioData` object.

```js
encoder.encode(data);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
