---
title: HTMLAnchorElement.download
slug: Web/API/HTMLAnchorElement/download
tags:
  - API
  - HTML DOM
  - HTMLAnchorElement
  - Property
  - Reference
  - download
browser-compat: api.HTMLAnchorElement.download
---
{{APIRef("HTML DOM")}}

The **`HTMLAnchorElement.download`** property is a
{{domxref("DOMString")}} indicating that the linked resource is intended to be
downloaded rather than displayed in the browser. The value, if any, specifies the
default file name for use in labeling the resource in a local file system. If the name
is not a valid file name in the underlying OS, the browser will adjust it.

> **Note:** This value might not be used for download. This value cannot
> be used to determine whether the download will occur.

## Syntax

```js
var dnload = anchorElt.download;
anchorElt.download = dnload;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
