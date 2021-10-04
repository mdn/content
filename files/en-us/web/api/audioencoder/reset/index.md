---
title: AudioEncoder.reset()
slug: Web/API/AudioEncoder/reset
tags:
  - API
  - Method
  - Reference
  - reset
  - AudioEncoder
browser-compat: api.AudioEncoder.reset
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`reset()`** method of the {{domxref("AudioEncoder")}} interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.

## Syntax

```js
AudioEncoder.reset()
```

### Parameters

None.

### Return Value

{{jsxref("Undefined")}}.

## Examples

The following example resets the `AudioEncoder`.

```js
AudioEncoder.reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
