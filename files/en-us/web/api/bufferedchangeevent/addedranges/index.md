---
title: "BufferedChangeEvent: addedRanges property"
short-title: addedRanges
slug: Web/API/BufferedChangeEvent/addedRanges
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BufferedChangeEvent.addedRanges
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

The **`addedRanges`** read-only property of the {{domxref("BufferedChangeEvent")}} interface returns a {{domxref("TimeRanges")}} object representing the time ranges that were added to the associated {{domxref("ManagedSourceBuffer")}}. These are the ranges added between the last `updatestart` and `updateend` events, during the most recent run of the coded frame processing algorithm.

## Value

A {{domxref("TimeRanges")}} object.

## Examples

See the main {{domxref("BufferedChangeEvent")}} page for an example showing the use of `addedRanges`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BufferedChangeEvent.removedRanges")}}
- {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} event
- {{domxref("ManagedSourceBuffer")}}
- {{domxref("TimeRanges")}}
