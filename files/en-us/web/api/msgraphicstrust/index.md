---
title: MSGraphicsTrust
slug: Web/API/MSGraphicsTrust
page-type: web-api-interface
tags:
  - msGraphicsTrust
  - Interface
  - Non-standard
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`msGraphicsTrust()`** interface represents an object
that provides properties for info on protected video playback.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Properties

- `constrictionActive` {{ReadOnlyInline}}
  - : A read-only property which is _true_ when protected media is forced to play in a lower resolution.
- `status` {{ReadOnlyInline}}
  - : A string with the driver status when playing protected content.

## Example

```js
const trustObject = media.msGraphicsTrustStatus;
```

## See also

- {{domxref("HTMLMediaElement.msGraphicsTrust")}}
