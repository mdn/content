---
title: "HTMLMediaElement: setSinkId() method"
short-title: setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
page-type: web-api-instance-method
browser-compat: api.HTMLMediaElement.setSinkId
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.setSinkId()`** method of the [Audio Output Devices API](/en-US/docs/Web/API/Audio_Output_Devices_API) sets the ID of the audio device to use for output and returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

This only works when the application is permitted to use the specified device.
For more information see the [security requirements](#security_requirements) below.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameters

- `sinkId`
  - : The {{domxref("MediaDeviceInfo.deviceId")}} of the audio output device.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if a [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) is used to block use of audio outputs.
- `NotFoundError` {{domxref("DOMException")}}
  - : Returned if the `deviceId` does not match any audio output device.
- `AbortError` {{domxref("DOMException")}}
  - : Returned if switching the audio output device to the new audio device failed.

## Security requirements

Access to the API is subject to the following constraints:

- The method must be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
- Access may be gated by the [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- User permission is required to access a non-default device.
  The user grants permission by selecting the device associated with the ID in the prompt displayed by [`MediaDevices.selectAudioOutput()`](/en-US/docs/Web/API/MediaDevices/selectAudioOutput).

## Examples

This example shows how to select an audio output device from the array returned by [`MediaDevices.enumerateDevices()`](/en-US/docs/Web/API/MediaDevices/enumerateDevices), and set it as the sink for audio.
Note that the result of `enumerateDevices()` only includes devices for which user permission is not required or has already been been granted.

```js
const devices = await navigator.mediaDevices.enumerateDevices();
const audioDevice = devices.find((device) => device.kind === "audiooutput");
const audio = document.createElement("audio");
await audio.setSinkId(audioDevice.deviceId);
console.log(`Audio is being output on ${audio.sinkId}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[`HTMLMediaElement.sinkId`](/en-US/docs/Web/API/HTMLMediaElement/sinkId)
