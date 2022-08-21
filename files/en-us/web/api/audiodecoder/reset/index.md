---
title: AudioDecoder.reset()
slug: Web/API/AudioDecoder/reset
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - reset
  - AudioDecoder
  - Experimental
browser-compat: api.AudioDecoder.reset
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`reset()`** method of the {{domxref("AudioDecoder")}} interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.

## Syntax

```js
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example resets the `AudioDecoder`.

```js
AudioDecoder.reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
