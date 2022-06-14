---
title: HTMLVideoElement.msIsStereo3D
slug: Web/API/HTMLVideoElement/msIsStereo3D
page-type: web-api-instance-property
tags:
  - API
  - API:Microsoft Extensions
  - Non-standard
  - Property
  - Reference
  - msIsStereo3D
browser-compat: api.HTMLVideoElement.msIsStereo3D
---
{{APIRef("Microsoft Extensions")}}{{Non-standard_Header}}

**`msIsStereo3D`** is a read-only property which determines
whether the system considers the loaded video source to be stereo 3-D or not.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Value

{{JSxRef("Boolean")}} value set to _true_ indicates that the video source is
stereo 3D.

This uses metadata set in MP4 or MPEG-2 file containers and H.264 Supplemental
enhancement information (SEI) messages to determine the stereo capability of the source.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLVideoElement")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
