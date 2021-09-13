---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
tags:
  - API
  - CSSFontLoading
  - CSSOM
  - Experimental
  - Fonts
  - NeedsContent
  - Reference
---
{{DefaultAPISidebar("CSS Font Loading API")}}{{SeeCompatTable}}

The CSS Font Loading API provides events and interfaces for dynamically loading font resources.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (`self.fonts` provides access to {{domxref('FontFaceSet')}}).

## Interfaces

- {{domxref('FontFace')}}
  - : Represents a single usable font face.
- {{domxref('FontFaceSet')}}
  - : An interface loading font faces and checking their download statuses.
- {{domxref('FontFaceSource')}}
  - : A {{Glossary("mixin")}} providing all of the fonts used in font-related operations, unless defined otherwise. It defines the {{domxref("FontFaceSources.fonts")}} property available to {{domxref("Document")}} and {{domxref("WorkerGlobalScope")}}.
- {{domxref('FontFaceSetLoadEvent')}}
  - : Fired whenever a {{domxref("FontFaceSet")}} loads.

## Specifications

{{Specifications("api.FontFace")}}

## Browser compatibility

### FontFace interface

{{Compat("api.FontFace")}}
