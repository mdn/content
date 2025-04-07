---
title: WebKit (-webkit-) vendor-prefixed CSS extensions
slug: Web/CSS/WebKit_Extensions
page-type: landing-page
status:
  - non-standard
---

{{CSSRef}}

A {{glossary("vendor prefix")}} is used to indicate that a feature is specific to a certain browser.
User agents based on WebKit or Blink (such as Safari and Chrome) support several extensions to [CSS](/en-US/docs/Web/CSS), which are prefixed with `-webkit-`.

## -webkit-prefixed properties without standard equivalents

> [!NOTE]
> These properties work in WebKit- or Blink-based browsers except where support notes say otherwise.
> You should avoid using them on production websites.

### A-C

- `-webkit-app-region` {{deprecated_inline}}: No longer supported in Safari.
- `-webkit-border-horizontal-spacing`
- `-webkit-border-vertical-spacing`
- {{CSSxRef("-webkit-box-reflect")}}: Supported with `-webkit-` by every browser, for compatibility reasons.
- `-webkit-column-axis`: Not supported in Chrome.
- `-webkit-column-progression`: Not supported in Chrome.
- `-webkit-cursor-visibility`: Not supported in Chrome.

### D-L

- `-webkit-font-smoothing`: See {{CSSxRef("font-smooth")}}.
- `-webkit-hyphenate-limit-after`: Not supported in Chrome.
- `-webkit-hyphenate-limit-before`: Not supported in Chrome.
- `-webkit-hyphenate-limit-lines`: Not supported in Chrome.
- `-webkit-line-align`: Not supported in Chrome.
- `-webkit-line-box-contain`: Not supported in Chrome.
- `-webkit-line-grid`: Not supported in Chrome.
- `-webkit-line-snap`: Not supported in Chrome.
- `-webkit-locale`
- `-webkit-logical-height`
- `-webkit-logical-width`

### M

- `-webkit-margin-after`
- `-webkit-margin-before`
- {{CSSxRef("-webkit-mask-box-image")}}: See {{cssxref("mask-border")}} and {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-outset")}}: See {{cssxref("mask-border")}} and {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-repeat")}}: See {{cssxref("mask-border")}} and {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-slice")}}: See {{cssxref("mask-border")}} and {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-source")}}: See {{cssxref("mask-border")}} and {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-width")}}: See {{cssxref("mask-border")}} and {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-composite")}}: See {{cssxref("mask-border")}} and {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-position-x")}}: Supported with `-webkit-` by every browser for compatibility reasons.
- {{CSSxRef("-webkit-mask-position-y")}}: Supported with `-webkit-` by every browser for compatibility reasons.
- {{CSSxRef("-webkit-mask-repeat-x")}} {{deprecated_inline}}: No longer supported; see {{CSSxRef("mask-repeat")}}.
- {{CSSxRef("-webkit-mask-repeat-y")}} {{deprecated_inline}}: No longer supported; see {{CSSxRef("mask-repeat")}}.
- `-webkit-mask-source-type`: Not supported in Chrome.
- `-webkit-max-logical-height`
- `-webkit-max-logical-width`
- `-webkit-min-logical-height`
- `-webkit-min-logical-width`

### N-Z

- `-webkit-nbsp-mode`: Not supported in Chrome.
- `-webkit-perspective-origin-x`
- `-webkit-perspective-origin-y`
- `-webkit-rtl-ordering`
- {{CSSxRef("-webkit-tap-highlight-color")}}: Only supported in Safari on iOS.
- `-webkit-text-decoration-skip`: Not supported in Chrome.
- `-webkit-text-decorations-in-effect`
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke")}}
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- `-webkit-text-zoom`: Not supported in Chrome.
- {{CSSxRef("-webkit-touch-callout")}} {{deprecated_inline}}: Only supported in Safari on iOS.
- `-webkit-transform-origin-x`
- `-webkit-transform-origin-y`
- `-webkit-transform-origin-z`
- `-webkit-user-drag`
- `-webkit-user-modify`

## -webkit-prefixed properties with standard equivalents

Several `-webkit-` prefixed properties have standard equivalents.
Even if the name and syntax may be different, they shouldn't be used any more.
For each of the properties below, use the standard equivalents.

### A-B

- `-webkit-border-after`: Use {{CSSxRef("border-block-end")}}.
- `-webkit-border-after-color`: Use {{CSSxRef("border-block-end-color")}}.
- `-webkit-border-after-style`: Use {{CSSxRef("border-block-end-style")}}.
- `-webkit-border-after-width`: Use {{CSSxRef("border-block-end-width")}}.
- {{CSSxRef("-webkit-border-before")}}: Use {{CSSxRef("border-block-start")}}.
- `-webkit-border-before-color`: Use {{CSSxRef("border-block-start-color")}}.
- `-webkit-border-before-style`: Use {{CSSxRef("border-block-start-style")}}.
- `-webkit-border-before-width`: Use {{CSSxRef("border-block-start-width")}}.
- `-webkit-border-end`: Use {{CSSxRef("border-inline-end")}}.
- `-webkit-border-end-color`: Use {{CSSxRef("border-inline-end-color")}}.
- `-webkit-border-end-style`: Use {{CSSxRef("border-inline-end-style")}}.
- `-webkit-border-end-width`: Use {{CSSxRef("border-inline-end-width")}}.
- `-webkit-border-start`: Use {{CSSxRef("border-inline-start")}}.
- `-webkit-border-start-color`: Use {{CSSxRef("border-inline-start-color")}}
- `-webkit-border-start-style`: Use {{CSSxRef("border-inline-start-style")}}.
- `-webkit-border-start-width`: Use {{CSSxRef("border-inline-start-width")}}.
- `-webkit-box-align`: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("align-items")}}.
- `-webkit-box-direction`: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-direction")}}.
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-basis")}}, {{CSSxRef("flex-grow")}}, and {{CSSxRef("flex-shrink")}}.
- `-webkit-box-flex`: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-grow")}}.
- `-webkit-box-lines`: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-flow")}}.
- `-webkit-box-ordinal-group`: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("order")}}.
- `-webkit-box-orient`: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-direction")}}.
- `-webkit-box-pack`: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("justify-content")}}.
- {{CSSxRef("-webkit-box-reflect")}}: Use the CSS {{CSSxRef("element", "element()")}} function.

### C-I

- `-webkit-column-break-after`: Use [CSS multicolumn layout](/en-US/docs/Web/CSS/CSS_multicol_layout) with {{CSSxRef("break-after")}}.
- `-webkit-column-break-before`: Use [CSS multicolumn layout](/en-US/docs/Web/CSS/CSS_multicol_layout) with {{CSSxRef("break-before")}}.
- `-webkit-column-break-inside`: Use [CSS multicolumn layout](/en-US/docs/Web/CSS/CSS_multicol_layout) with {{CSSxRef("break-inside")}}.
- `-webkit-font-feature-settings`: Use {{CSSxRef("font-feature-settings")}} (the prefixed version not supported in Safari).
- `-webkit-hyphenate-character`: Use {{CSSxRef("hyphenate-character")}}.
- `-webkit-initial-letter`: Use {{CSSxRef("initial-letter")}}.

### J-Z

- `-webkit-line-clamp`: Use {{CSSxRef("line-clamp")}}.
- `-webkit-margin-end`: Use {{CSSxRef("margin-block-end")}}.
- `-webkit-margin-start`: Use {{CSSxRef("margin-block-start")}}.
- `-webkit-padding-after`: Use {{CSSxRef("padding-block-end")}}.
- `-webkit-padding-before`: Use {{CSSxRef("padding-block-start")}}.
- `-webkit-padding-end`: Use {{CSSxRef("padding-inline-end")}}.
- `-webkit-padding-start`: Use {{CSSxRef("padding-inline-start")}}.

## Pseudo-classes

> [!NOTE]
> If there is an invalid pseudo-class within in a chain or group of selectors, the whole selector list is invalid.

- `:-webkit-any()`: Use {{CSSxRef(":is")}}
- `:-webkit-any-link`: Use {{CSSxRef(":any-link")}}
- `:-webkit-autofill`: Use {{CSSxRef(":autofill")}}
- `:-webkit-autofill-strong-password`: Use {{CSSxRef(":autofill")}}
- `:-webkit-drag`
- `:-webkit-full-page-media`: Use {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen`: Use {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-ancestor`: Use {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-document`: Use {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-controls-hidden`: Use {{CSSxRef(":fullscreen")}}

## Pseudo-elements

For web-compatibility reasons, Blink, WebKit, and Gecko browsers treat all pseudo-elements starting with `::-webkit-` as valid.
If there is an invalid pseudo-element or pseudo-class within in a chain or group of selectors, the whole selector list is invalid.
If a pseudo-element (but not pseudo-class) has a `-webkit-` prefix, Blink, WebKit and Gecko browsers assume it is valid, not invalidating the selector list.

- `::-webkit-file-upload-button`: Use {{CSSxRef("::file-selector-button")}}
- {{CSSxRef("::-webkit-inner-spin-button")}}
- `::-webkit-input-placeholder`: Use {{CSSxRef("::placeholder")}}
- {{CSSxRef("::-webkit-meter-bar")}} {{deprecated_inline}}
- {{CSSxRef("::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-inner-element")}}
- {{CSSxRef("::-webkit-meter-optimum-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value")}}
- {{CSSxRef("::-webkit-progress-bar")}}
- {{CSSxRef("::-webkit-progress-inner-element")}}
- {{CSSxRef("::-webkit-progress-value")}}
- {{CSSxRef("::-webkit-search-cancel-button")}}
- {{CSSxRef("::-webkit-search-results-button")}}
- {{CSSxRef("::-webkit-slider-runnable-track")}}
- {{CSSxRef("::-webkit-slider-thumb")}}

## Media features

- {{CSSxRef("@media/-webkit-animation")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio")}}: Supported cross-browser
- {{CSSxRef("@media/-webkit-transform-2d")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-transform-3d")}}: Supported cross-browser
- {{CSSxRef("@media/-webkit-transition")}} {{deprecated_inline}}

## See also

- [Mozilla (-moz-) vendor-prefixed CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- {{glossary("Vendor Prefix")}} glossary entry
- [Styling Form Controls on the WebKit Trac](https://trac.webkit.org/wiki/Styling%20Form%20Controls)
