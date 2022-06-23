---
title: TimeRanges
slug: Web/API/TimeRanges
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Media
  - NeedsExample
  - Reference
browser-compat: api.TimeRanges
---
{{APIRef("DOM")}}

When loading a media resource for use by an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element, the **`TimeRanges`** interface is used for representing the time ranges of the media resource that have been buffered, the time ranges that have been played, and the time ranges that are seekable.

A `TimeRanges` object includes one or more ranges of time, each specified by a starting time offset and an ending time offset. You reference each time range by using the `start()` and `end()` methods, passing the index number of the time range you want to retrieve.

## Normalized TimeRanges objects

Several members of {{domxref("HTMLMediaElement")}} objects return a **normalized TimeRanges object** — which [the spec describes](https://html.spec.whatwg.org/multipage/media.html#normalised-timeranges-object) as having the following characteristics:

_The ranges in such an object are ordered, don't overlap, and don't touch (adjacent ranges are folded into one bigger range). A range can be empty (referencing just a single moment in time)._

## Properties

- {{domxref("TimeRanges.length")}} {{ReadOnlyInline}}
  - : Returns an `unsigned long` representing the number of time ranges represented by the time range object.

## Methods

- {{domxref("TimeRanges.start()")}}
  - : Returns the time for the start of the range with the specified index.
- {{domxref("TimeRanges.end()")}}
  - : Returns the time for the end of the specified range.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
