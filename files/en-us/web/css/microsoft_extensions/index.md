---
title: Microsoft CSS extensions
slug: Web/CSS/Microsoft_Extensions
page-type: landing-page
status:
  - non-standard
---

{{CSSRef}}

Microsoft applications such as Edge and Internet Explorer support a number of special **Microsoft extensions to [CSS](/en-US/docs/Web/CSS)**. These extensions are prefixed with `-ms-`.

## Microsoft-only properties (avoid using on websites)

> **Note:** These properties will only work in Internet Explorer and Microsoft applications based on the same engine, and are not on a standards track.

- `-ms-accelerator`
- `-ms-block-progression`
- `-ms-content-zoom-chaining`
- `-ms-content-zooming`
- `-ms-content-zoom-limit`
- `-ms-content-zoom-limit-max`
- `-ms-content-zoom-limit-min`
- `-ms-content-zoom-snap`
- `-ms-content-zoom-snap-points`
- `-ms-content-zoom-snap-type`
- `-ms-filter` {{deprecated_inline}}
- `-ms-flow-from`
- `-ms-flow-into`
- `-ms-high-contrast-adjust`
- `-ms-hyphenate-limit-chars`
- `-ms-hyphenate-limit-lines`
- `-ms-hyphenate-limit-zone`
- `-ms-ime-align`
- `-ms-overflow-style`
- `-ms-scrollbar-3dlight-color` {{deprecated_inline}}
- `-ms-scrollbar-arrow-color` {{deprecated_inline}}
- `-ms-scrollbar-base-color` {{deprecated_inline}}
- `-ms-scrollbar-darkshadow-color` {{deprecated_inline}}
- `-ms-scrollbar-face-color` {{deprecated_inline}}
- `-ms-scrollbar-highlight-color` {{deprecated_inline}}
- `-ms-scrollbar-shadow-color` {{deprecated_inline}}
- `-ms-scrollbar-track-color` {{deprecated_inline}}
- `-ms-scroll-chaining`
- `-ms-scroll-limit`
- `-ms-scroll-limit-x-max`
- `-ms-scroll-limit-x-min`
- `-ms-scroll-limit-y-max`
- `-ms-scroll-limit-y-min`
- `-ms-scroll-rails`
- `-ms-scroll-snap-points-x`
- `-ms-scroll-snap-points-y`
- `-ms-scroll-snap-x`
- `-ms-scroll-snap-y`
- `-ms-scroll-translation`
- `-ms-text-autospace`
- `-ms-touch-select`
- `-ms-wrap-flow`
- `-ms-wrap-margin`
- `-ms-wrap-through`
- {{CSSxRef("zoom")}}

## Pseudo-elements

- {{CSSxRef("::file-selector-button","::-ms-browse")}}\*
- `::-ms-check`
- `::-ms-clear`
- `::-ms-expand`
- `::-ms-fill`
- `::-ms-fill-lower`
- `::-ms-fill-upper`
- `::-ms-reveal`
- `::-ms-thumb`
- `::-ms-ticks-after`
- `::-ms-ticks-before`
- `::-ms-tooltip`
- `::-ms-track`
- `::-ms-value`

\* Now standard.

## Media features

- {{CSSxRef("@media/-ms-high-contrast","-ms-high-contrast")}}

## CSS-related DOM APIs

- `msContentZoomFactor`
- {{DOMxRef("CSSStyleDeclaration.msGetPropertyEnabled")}}
- {{DOMxRef("Element.msGetRegionContent")}}
- {{DOMxRef("Element.msRegionOverflow")}}

## See also

- [Mozilla CSS Extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- [WebKit CSS Extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
- [Microsoft API Extensions](/en-US/docs/Web/API/Microsoft_Extensions)
