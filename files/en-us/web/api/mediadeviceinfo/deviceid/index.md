---
title: MediaDeviceInfo.deviceId
slug: Web/API/MediaDeviceInfo/deviceId
tags:
  - API
  - Experimental
  - Media
  - MediaDevicesInfo
  - Property
  - deviceId
browser-compat: api.MediaDeviceInfo.deviceId
---
{{SeeCompatTable}}{{APIRef("Media Capture")}}

The **`deviceId`** readonly property
of the {{domxref("MediaDeviceInfo")}} interface returns a {{domxref("DOMString")}}
that is an identifier for the represented device and is persisted across
sessions.

It is un-guessable by other applications, and unique to the origin of
the calling application. It is reset when the user clears cookies. For private browsing,
a different identifier is used that is not persisted across sessions.

## Syntax

```js
var deviceID = MediaDeviceInfo.deviceId
```

### Value

A {{domxref("DOMString")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
