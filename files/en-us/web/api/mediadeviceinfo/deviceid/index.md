---
title: "MediaDeviceInfo: deviceId property"
short-title: deviceId
slug: Web/API/MediaDeviceInfo/deviceId
page-type: web-api-instance-property
browser-compat: api.MediaDeviceInfo.deviceId
---

{{APIRef("Media Capture")}}

The **`deviceId`** readonly property
of the {{domxref("MediaDeviceInfo")}} interface returns a string
that is an identifier for the represented device and is persisted across
sessions.

It is un-guessable by other applications, and unique to the origin of
the calling application. It is reset when the user clears cookies. For private browsing,
a different identifier is used that is not persisted across sessions.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
