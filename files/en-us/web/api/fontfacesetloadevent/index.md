---
title: FontFaceSetLoadEvent
slug: Web/API/FontFaceSetLoadEvent
page-type: web-api-interface
tags:
  - API
  - CSSFontLoading
  - CSSOM
  - Event
  - FontFaceLoadEvent
  - Fonts
  - Interface
  - Reference
browser-compat: api.FontFaceSetLoadEvent
---
{{APIRef("CSS Font Loading API")}}

The **`FontFaceSetLoadEvent`** interface of the [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API) is fired whenever a {{domxref("FontFaceSet")}} loads.

{{InheritanceDiagram}}

## Constructor

- {{domxref("FontFaceSetLoadEvent.FontFaceSetLoadEvent","FontFaceSetLoadEvent()")}}
  - : Creates a new `FontFaceSetLoadEvent` object.

## Properties

- {{domxref("FontFaceSetLoadEvent.fontfaces")}} {{ReadOnlyInline}}
  - : Returns an array of {{domxref("FontFace")}} instances each of which represents a single usable font.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
