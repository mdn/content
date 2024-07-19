---
title: "HTMLMediaElement: sinkId property"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.sinkId
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

The **`sinkId`** read-only property of the {{domxref("HTMLMediaElement")}} interface returns a string that is the unique ID of the device to be used for playing audio output.

This ID should be one of the {{domxref("MediaDeviceInfo.deviceId")}} values returned from {{domxref("MediaDevices.enumerateDevices()")}}, `id-multimedia`, or `id-communications`.
If the user agent default device is being used, it returns an empty string.

## Value

A string indicating the current audio output device, or the empty string if the default user agent output device is being used.

## Security requirements

Access to the property is subject to the following constraints:

- The property must be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Audio Output Devices API](/en-US/docs/Web/API/Audio_Output_Devices_API)
- {{domxref("MediaDevices.selectAudioOutput()")}}
- {{domxref("HTMLMediaElement.setSinkId()")}}
