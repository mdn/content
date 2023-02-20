---
title: HTMLMediaElement.sinkId
slug: Web/API/HTMLMediaElement/sinkId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLMediaElement.sinkId
---

{{SeeCompatTable}}{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.sinkId`** read-only property returns a
string that is the unique ID of the audio device delivering output. If
it is using the user agent default, it returns an empty string. This ID should be one of
the {{domxref("MediaDeviceInfo.deviceId")}} values returned from
{{domxref("MediaDevices.enumerateDevices()")}}, `id-multimedia`, or
`id-communications`.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
