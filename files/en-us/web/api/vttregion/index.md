---
title: VTTRegion
slug: Web/API/VTTRegion
page-type: web-api-interface
tags:
  - API
  - VTTRegion
  - WebVTT
browser-compat: api.VTTRegion
---
{{APIRef("WebVTT")}}

The `VTTRegion` interface—part of the API for handling WebVTT (text tracks on media presentations)—describes a portion of the video to render a {{domxref("VTTCue")}} onto.

## Constructor

- {{domxref("VTTRegion.VTTRegion", "VTTRegion()")}}
  - : Returns a newly created `VTTRegion` object.

## Properties

- {{domxref("VTTRegion.id")}}
  - : A string that identifies the region.
- {{domxref("VTTRegion.width")}}
  - : A `double` representing the width of the region, as a percentage of the video.
- {{domxref("VTTRegion.lines")}}
  - : A `double` representing the height of the region, in number of lines.
- {{domxref("VTTRegion.regionAnchorX")}}
  - : A `double` representing the region anchor X offset, as a percentage of the region.
- {{domxref("VTTRegion.regionAnchorY")}}
  - : A `double` representing the region anchor Y offset, as a percentage of the region.
- {{domxref("VTTRegion.viewportAnchorX")}}
  - : A `double` representing the viewport anchor X offset, as a percentage of the video.
- {{domxref("VTTRegion.viewportAnchorY")}}
  - : A `double` representing the viewport anchor Y offset, as a percentage of the video.
- {{domxref("VTTRegion.scroll")}}
  - : An enum representing how adding new cues will move existing cues.

## Examples

```js
const region = new VTTRegion();
region.width = 50;  // Use 50% of the video width
region.lines = 4;  // Use 4 lines of height.
region.viewportAnchorX = 25;  // Have the region start at 25% from the left.
const cue = new VTTCue(2, 3, 'Cool text to be displayed');
cue.region = region;  // This cue will be drawn only within this region.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
