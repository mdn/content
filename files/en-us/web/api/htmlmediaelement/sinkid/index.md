---
title: "HTMLMediaElement: sinkId property"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.sinkId
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.sinkId`** read-only property returns a string that is the unique ID of the audio device delivering output.
If it is using the user agent default, it returns an empty string.
This ID should be one of the {{domxref("MediaDeviceInfo.deviceId")}} values returned from {{domxref("MediaDevices.enumerateDevices()")}}, `id-multimedia`, or `id-communications`.

## Value

A string.

## Security requirements

Access to the property is subject to the following constraints:

- The property must be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[`HTMLMediaElement.setSinkId()`](/en-US/docs/Web/API/HTMLMediaElement/setSinkId)
