---
title: HTMLVideoElement.videoWidth
slug: Web/API/HTMLVideoElement/videoWidth
page-type: web-api-instance-property
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLVideoElement
  - Intrinsic Width
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - size
  - videoWidth
  - width
browser-compat: api.HTMLVideoElement.videoWidth
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLVideoElement")}} interface's read-only **`videoWidth`** property indicates the [intrinsic width](/en-US/docs/Web/API/HTMLVideoElement/videoHeight#about_intrinsic_width_and_height) of the video, expressed in CSS pixels.
In simple terms, this is the width of the media in its natural size.

See [`HTMLVideoElement.videoHeight` > About intrinsic width and height](/en-US/docs/Web/API/HTMLVideoElement/videoHeight#about_intrinsic_width_and_height) for more details.

## Value

An integer value specifying the intrinsic width of the video in CSS pixels.
If the element's {{domxref("HTMLMediaElement.readyState", "readyState")}} is `HTMLMediaElement.HAVE_NOTHING`, then the value of this property is 0, because neither video nor poster frame size information is yet available.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
