---
title: "AudioData: close() method"
short-title: close()
slug: Web/API/AudioData/close
page-type: web-api-instance-method
browser-compat: api.AudioData.close
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`close()`** method of the {{domxref("AudioData")}} interface clears all states and releases the reference to the media resource.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

Undefined.

## Examples

The following example shows the `AudioData` object being closed.

```js
AudioData.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
