---
title: FontFaceSetLoadEvent()
slug: Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent
tags:
  - API
  - CSSFontLoading
  - CSSOM
  - Constructor
  - Experimental
  - FontFaceLoadEvent
  - Fonts
  - Reference
browser-compat: api.FontFaceSetLoadEvent.FontFaceSetLoadEvent
---
{{APIRef("CSS Font Loading API")}}{{SeeCompatTable}}

The **`FontFaceSetLoadEvent()`** constructor creates a new
{{domxref("FontFaceLoadEvent")}} object which is fired whenever a
{{domxref("FontFaceSet")}} loads.

## Syntax

```js
var fontFaceSetLoadEvent = new FontFaceSetLoadEvent(type[, options])
```

### Parameters

- _type_
  - : The literal value `'Type'` (quotation marks included).
- _options_ {{optional_inline}}

  - : Options are as follows:

    - `fontfaces`: An array of {{domxref("FontFace")}} instances.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
