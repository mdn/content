---
title: AudioEncoder.reset()
slug: Web/API/AudioEncoder/reset
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - reset
  - AudioEncoder
  - Experimental
browser-compat: api.AudioEncoder.reset
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`reset()`** method of the {{domxref("AudioEncoder")}} interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.

## Syntax

```js
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example resets the `AudioEncoder`.

```js
AudioEncoder.reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
