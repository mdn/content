---
title: VideoTrack.selected
slug: Web/API/VideoTrack/selected
page-type: web-api-instance-property
tags:
  - HTML DOM
  - Media
  - Media Controls
  - Media Track
  - Property
  - Reference
  - Video
  - VideoTrack
  - selected
  - track
browser-compat: api.VideoTrack.selected
---
{{APIRef("HTML DOM")}}

The **{{domxref("VideoTrack")}}** property
**`selected`** controls whether or not a particular video
track is active.

## Value

The `selected` property is a Boolean whose value is `true` if the
track is active. Only a single video track can be active at any given time, so setting
this property to `true` for one track while another track is active will make
that other track inactive.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
