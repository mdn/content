---
title: "HTMLVideoElement: height property"
short-title: height
slug: Web/API/HTMLVideoElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLVideoElement.height
---

{{APIRef("HTML DOM")}}

The **`height`** property of the {{domxref("HTMLVideoElement")}} interface indicates the width at which a video is drawn in {{Glossary("CSS pixel", "CSS pixels")}} if it's being drawn or rendered to any visual medium such as a screen or printer. Otherwise, it's the natural, pixel density-corrected width of the video.

## Value

An integer value indicating the height of the video. The terms in which the height is defined depends on whether the video is being rendered to a visual medium or not.

- If the video is being rendered to a visual medium such as a screen or printer, the
  height is expressed in {{Glossary("CSS pixels")}}.
- Otherwise, the video's height is represented using its natural (intrinsic) height,
  adjusted for the display density as indicated by the {{domxref("HTMLVideoElement.naturalHeight", "naturalHeight")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
