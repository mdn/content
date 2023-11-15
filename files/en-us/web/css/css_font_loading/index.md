---
title: CSS font loading
slug: Web/CSS/CSS_font_loading
page-type: css-module
spec-urls: https://drafts.csswg.org/css-font-loading/
---

{{CSSRef}}

The **CSS font loading** module describes events and interfaces used for dynamically loading font resources.

## Reference

### Interfaces

- {{domxref("fontFace")}} interface
  - [`FontFace()`](/en-US/docs/Web/API/FontFace/FontFace) constructor
  - {{domxref("fontFace.family")}} property
  - {{domxref("fontFace.style")}} property
  - {{domxref("fontFace.weight")}} property
  - {{domxref("fontFace.stretch")}} property
  - {{domxref("fontFace.unicodeRange")}} property
  - {{domxref("fontFace.variant")}} property
  - {{domxref("fontFace.featureSettings")}} property
  - {{domxref("fontFace.variationSettings")}} property
  - {{domxref("fontFace.display")}} property
  - {{domxref("fontFace.ascentOverride")}} property
  - {{domxref("fontFace.descentOverride")}} property
  - {{domxref("fontFace.lineGapOverride")}} property
  - {{domxref("fontFace.load()")}} method (returns a promise)
- {{domxref("fontFaceSet")}} interface
- {{domxref("fontFaceSetLoadEvent")}} event

## Guides

- [CSS font loading API](/en-US/docs/Web/API/CSS_Font_Loading_API)
  - : Overview of the CSS Font Loading API, which provide events and interfaces for dynamically loading font resources.

## Related concepts

- CSS {{cssxref("@font-face")}} at-rule
- CSS {{cssxref("@font-feature-values")}} at-rule
- {{domxref("CSSFontFaceRule")}} interface
- Document {{domxref("document.fonts", "fonts")}} property (returns the {{domxref("FontFaceSet")}} object instance)
- WorkerGlobalScope {{domxref("WorkerGlobalScope.fonts", "fonts")}} property (returns the {{domxref("FontFaceSet")}} object instance)
- JavaScript {{jsxref("Promise")}} object

## Specifications

{{Specifications}}

## See also

- [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
