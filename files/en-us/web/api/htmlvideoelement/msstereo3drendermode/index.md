---
title: HTMLVideoElement.msStereo3DRenderMode
slug: Web/API/HTMLVideoElement/msStereo3DRenderMode
page-type: web-api-instance-property
tags:
  - msStereo3DRenderMode
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

**`msStereo3DRenderMode`** is a read/write property which gets
or sets whether the system display is set to stereo display (if stereo-capable).

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
HTMLVideoElement.msStereo3DRenderMode(mono, stereo);
```

## Value

The following values set the stereo display to mono or stereo. The default is mono.

- `mono (0)`: Specifies that stereo mode is disabled.
- `stereo (1)`: Specifies stereo mode is enabled.

## See also

- [HTMLVideoElement](/en-US/docs/Web/API/HTMLVideoElement)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
