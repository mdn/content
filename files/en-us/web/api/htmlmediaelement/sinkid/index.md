---
title: HTMLMediaElement.sinkId
slug: Web/API/HTMLMediaElement/sinkId
tags:
  - API
  - Audio
  - Experimental
  - Extensions
  - HTMLMediaElement
  - Media
  - Property
  - Reference
browser-compat: api.HTMLMediaElement.sinkId
---
{{SeeCompatTable}}{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.sinkId`** read-only property returns a
{{domxref("DOMString")}} that is the unique ID of the audio device delivering output. If
it is using the user agent default, it returns an empty string. This ID should be one of
the {{domxref("MediaDeviceInfo.deviceId")}} values returned from
{{domxref("MediaDevices.enumerateDevices()")}}, `id-multimedia`, or
`id-communications`.

## Syntax

```js
var sinkId = HTMLMediaElement.sinkId
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
