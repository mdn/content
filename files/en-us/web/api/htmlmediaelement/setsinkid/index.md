---
title: HTMLMediaElement.setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
tags:
  - API
  - Audio
  - Experimental
  - HTMLMediaElement
  - Media
  - Method
  - Reference
  - setSinkId
browser-compat: api.HTMLMediaElement.setSinkId
---
{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`HTMLMediaElement.setSinkId()`** method sets the ID of
the audio device to use for output and returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.").
This only works when the application is authorized to use the specified device.

## Syntax

```js
HTMLMediaElement.setSinkId(sinkId).then(function() { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

### Parameters

- sinkId
  - : The {{domxref("MediaDeviceInfo.deviceId")}} of the audio output device.

### Exceptions

| Exception                            | Explanation                               |
| ------------------------------------ | ----------------------------------------- |
| {{domxref("DOMException")}} | No permission to use the requested device |

## Examples

```js
const devices = await navigator.mediaDevices.enumerateDevices();
const audioDevices = devices.filter(device => device.kind === 'audiooutput');
const audio = document.createElement('audio');
await audio.setSinkId(audioDevices[0].deviceId);
console.log('Audio is being played on ' + audio.sinkId);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
