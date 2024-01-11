---
title: "HTMLVideoElement: width property"
short-title: width
slug: Web/API/HTMLVideoElement/width
page-type: web-api-instance-property
browser-compat: api.HTMLVideoElement.width
---

{{APIRef("HTML DOM")}}

The **`width`** property of the {{domxref("HTMLVideoElement")}} interface indicates the width at which an video is drawn in {{Glossary("CSS pixel", "CSS pixels")}} if it's being drawn or rendered to any visual medium such as a screen or printer. Otherwise, it's the natural, pixel density-corrected width of the video.

## Value

An integer value indicating the width of the video. The way the width is defined depends on whether or not the video is being rendered to a visual medium, such as a screen or printer:

- If the video is being rendered to a visual medium, the width is expressed in {{Glossary("CSS pixel", "CSS pixels")}}.
- If the video is not being rendered to a visual medium, its width is represented using the video's natural (intrinsic) width, adjusted for the display density as indicated by {{domxref("HTMLVideoElement.naturalWidth", "naturalWidth")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
