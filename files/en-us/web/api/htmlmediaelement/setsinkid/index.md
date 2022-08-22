---
title: HTMLMediaElement.setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - HTMLMediaElement
  - Media
  - Method
  - Reference
  - setSinkId
browser-compat: api.HTMLMediaElement.setSinkId
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.setSinkId()`** method sets the ID of
the audio device to use for output and returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
This only works when the application is authorized to use the specified device.

## Syntax

```js
setSinkId(sinkId)
```

### Parameters

- `sinkId`
  - : The {{domxref("MediaDeviceInfo.deviceId")}} of the audio output device.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if there is no permission to use the requested device.
- `NotFoundError` {{domxref("DOMException")}}
  - : Returned if the `deviceId` does not match any audio output device.
- `AbortError` {{domxref("DOMException")}}
  - : Returned if switching the audio output device to the new audio device failed.

## Examples

```js
const devices = await navigator.mediaDevices.enumerateDevices();
const audioDevice = devices.find((device) => device.kind === 'audiooutput');
const audio = document.createElement('audio');
await audio.setSinkId(audioDevice.deviceId);
console.log(`Audio is being played on ${audio.sinkId}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
