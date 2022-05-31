---
title: BlobEvent.timecode
slug: Web/API/BlobEvent/timecode
page-type: web-api-instance-property
tags:
  - API
  - BlobEvent
  - Media
  - Media Stream Recording
  - Property
  - Reference
browser-compat: api.BlobEvent.timecode
---
{{SeeCompatTable}}{{APIRef("Media Capture and Streams")}}

The **`timecode`** readonlyinline
property of the {{domxref("BlobEvent")}} interface a
{{domxref("DOMHighResTimeStamp")}} indicating the difference between the timestamp of
the first chunk in data, and the timestamp of the first chunk in the first BlobEvent
produced by this recorder.

Note that the timecode in the first produced
BlobEvent does not need to be zero.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
