---
title: HTMLVideoElement.msStereo3DPackingMode
slug: Web/API/HTMLVideoElement/msStereo3DPackingMode
page-type: web-api-instance-property
tags:
  - msStereo3DPackingMode
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

**`msStereo3DPackingMode`** is a read/write property which gets
or sets the frame-packing mode for stereo 3-D video content.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
HTMLVideoElement.msStereo3DPackingMode(topbottom, sidebyside, none);
```

## Value

The following values return, or set, the stereo 3-D content packing as "topbottom",
"sidebyside", or "none" for regular 2-D video.

- `none (0)`: Specifies regular 2-D video.
- `topbottom (1)`: Specifies stereo 3-D content packing and that the views
  are packed side-by-side in a single frame.
- `sidebyside (2)`: Specifies sidebyside stereo 3-D content packing and
  that the views are packed top-to-bottom in a single frame.

## See also

- [HTMLVideoElement](/en-US/docs/Web/API/HTMLVideoElement)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
