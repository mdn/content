---
title: TrackDefaultList
slug: Web/API/TrackDefaultList
tags:
  - API
  - Audio
  - Experimental
  - Extensions
  - Interface
  - MSE
  - Media
  - Reference
  - TrackDefaultList
  - Video
  - source
browser-compat: api.TrackDefaultList
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`TrackDefaultList`** interface represents a simple container list for multiple {{domxref("TrackDefault")}} objects.

The `TrackDefaultList` associated with a particular `SourceBuffer` can be retrieved using the {{domxref("SourceBuffer.trackDefaults")}} property.

The individual `TrackDefault` objects can be accessed using the [array operator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements) `[]`.

## Constructor

- {{domxref("TrackDefaultList.TrackDefaultList", "TrackDefaultList()")}}
  - : Constructs and returns a new `TrackDefaultList` object.

## Properties

_Inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("TrackDefaultList.length")}} {{readonlyInline}}
  - : Returns the number of {{domxref("TrackDefault")}} objects in the list.

## Methods

_Inherits properties from its parent interface, {{domxref("EventTarget")}}._

## Examples

TBD.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
- {{domxref("TrackDefaultList")}}
