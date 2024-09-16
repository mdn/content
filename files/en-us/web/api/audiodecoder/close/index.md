---
title: "AudioDecoder: close() method"
short-title: close()
slug: Web/API/AudioDecoder/close
page-type: web-api-instance-method
browser-compat: api.AudioDecoder.close
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

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
