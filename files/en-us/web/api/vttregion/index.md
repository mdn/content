---
title: VTTRegion
slug: Web/API/VTTRegion
page-type: web-api-interface
browser-compat: api.VTTRegion
---

{{APIRef("WebVTT")}}

The `VTTRegion` interface of the [WebVTT API](/en-US/docs/Web/API/WebVTT_API) describes a portion of the video to render a {{domxref("VTTCue")}} onto.

## Constructor

- {{domxref("VTTRegion.VTTRegion", "VTTRegion()")}}
  - : Creates a new `VTTRegion` object instance.

## Instance properties

- {{domxref("VTTRegion.id")}}
  - : A string that identifies the region.
- {{domxref("VTTRegion.width")}}
  - : Represents the width of the region, as a percentage of the video's width.
- {{domxref("VTTRegion.lines")}}
  - : Represents the height of the region, in number of lines.
- {{domxref("VTTRegion.regionAnchorX")}}
  - : Represents the region anchor X offset, as a percentage of the region's width.
- {{domxref("VTTRegion.regionAnchorY")}}
  - : Represents the region anchor Y offset, as a percentage of the region's height.
- {{domxref("VTTRegion.viewportAnchorX")}}
  - : Represents the viewport anchor X offset, as a percentage of the video's width.
- {{domxref("VTTRegion.viewportAnchorY")}}
  - : Represents the viewport anchor Y offset, as a percentage of the video's height.
- {{domxref("VTTRegion.scroll")}}
  - : An enumerated value indicating how existing cues in the region move when a new cue is added.

## Examples

```js
const region = new VTTRegion();
region.width = 50; // Set the region to 50% of the video's width
region.lines = 4; // Render cues in 4 lines
region.viewportAnchorX = 25; // Place the region 25% from the left edge of the video
const cue = new VTTCue(2, 3, "Cool text to be displayed");
cue.region = region; // This cue will be drawn only within this region.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
