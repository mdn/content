---
title: PresentationConnection.binaryType
slug: Web/API/PresentationConnection/binaryType
tags:
  - API
  - NeedsBrowserCompatibility
  - NeedsContent
  - NeedsExample
  - NeedsMarkupWork
  - Presentation
  - Presentation API
  - PresentationConnection
  - Property
  - Reference
  - binaryType
browser-compat: api.PresentationConnection.binaryType
---
{{APIRef("Presentation API")}}

When a {{DOMxRef("PresentationConnection")}} object is created, its `binaryType` IDL attribute _MUST_ be set to the string `"arraybuffer"`. Upon getting, the attribute *MUST* return its most recent value (the value it was last set as). Upon setting, the user agent _MUST_ set the IDL attribute to the new value.

> **Note:** The `binaryType` attribute allows authors to control how binary data is exposed to scripts. By setting the attribute to _`"blob"`_, binary data is returned in `Blob` form; by setting it to _`"arraybuffer"`_, it is returned in {{JSxRef("ArrayBuffer")}} form. The attribute defaults to `"arraybuffer"`. This attribute has no effect on data sent in a string form.

## Browser compatibility

{{Compat}}
