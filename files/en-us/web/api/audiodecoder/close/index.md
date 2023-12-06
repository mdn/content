---
title: "AudioDecoder: close() method"
short-title: close()
slug: Web/API/AudioDecoder/close
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.AudioDecoder.close
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`close()`** method of the {{domxref("AudioDecoder")}} interface ends all pending work and releases system resources.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example closes the `AudioDecoder`.

```js
AudioDecoder.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
