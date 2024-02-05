---
title: "AudioEncoder: close() method"
short-title: close()
slug: Web/API/AudioEncoder/close
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.AudioEncoder.close
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`close()`** method of the {{domxref("AudioEncoder")}} interface ends all pending work and releases system resources.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example closes the `AudioEncoder`.

```js
AudioEncoder.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
