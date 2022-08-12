---
title: BlobEvent.timecode
slug: Web/API/BlobEvent/timecode
page-type: web-api-instance-property
tags:
  - API
  - BlobEvent
  - Media
  - Media Recorder API
  - Property
  - Reference
browser-compat: api.BlobEvent.timecode
---
{{APIRef("Media Recorder API")}}

The **`timecode`** read only property of the {{domxref("BlobEvent")}} interface indicates the difference between the timestamp of the first chunk of data, and the timestamp of the first chunk in the first `BlobEvent` produced by this recorder.

Note that the `timecode` in the first produced `BlobEvent` does not need to be zero.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
