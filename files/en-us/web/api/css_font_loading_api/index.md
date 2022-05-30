---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
page-type: web-api-overview
tags:
  - API
  - CSSFontLoading
  - CSSOM
  - Fonts
  - NeedsContent
  - Reference
browser-compat: api.FontFace
---
{{DefaultAPISidebar("CSS Font Loading API")}}

The CSS Font Loading API provides events and interfaces for dynamically loading font resources.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (`self.fonts` provides access to {{domxref('FontFaceSet')}}).

## Interfaces

- {{domxref('FontFace')}}
  - : Represents a single usable font face.
- {{domxref('FontFaceSet')}}
  - : An interface loading font faces and checking their download statuses.
- {{domxref('FontFaceSetLoadEvent')}}
  - : Fired whenever a {{domxref("FontFaceSet")}} loads.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
