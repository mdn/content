---
title: -webkit-prefixed CSS extensions
slug: Web/CSS/WebKit_Extensions
page-type: landing-page
status:
  - non-standard
---

{{CSSRef}}

User agents based on WebKit or Blink, such as Safari and Chrome, support several special extensions to [CSS](/en-US/docs/Web/CSS). These extensions are prefixed with `-webkit-`.

## -webkit-prefixed properties without standard equivalents

> [!NOTE]
> Avoid using on websites. These properties will only work in WebKit- or Blink-based browsers except where specified.

### A-C

- {{CSSxRef("-webkit-app-region")}}
- {{CSSxRef("-webkit-border-horizontal-spacing")}}
- {{CSSxRef("-webkit-border-vertical-spacing")}}
- {{CSSxRef("-webkit-box-reflect")}} (supported with `-webkit-` by every browser, for compatibility reasons)
- {{CSSxRef("-webkit-column-axis")}}
- {{CSSxRef("-webkit-column-progression")}}
- {{CSSxRef("-webkit-cursor-visibility")}}

### D-I

- {{CSSxRef("font-smooth", "-webkit-font-smoothing")}}
- {{CSSxRef("-webkit-hyphenate-limit-after")}}
- {{CSSxRef("-webkit-hyphenate-limit-before")}}
- {{CSSxRef("-webkit-hyphenate-limit-lines")}}

### L

- {{CSSxRef("-webkit-line-align")}}
- {{CSSxRef("-webkit-line-box-contain")}}
- {{CSSxRef("line-clamp", "-webkit-line-clamp")}}
- {{CSSxRef("-webkit-line-grid")}}
- {{CSSxRef("-webkit-line-snap")}}
- {{CSSxRef("-webkit-locale")}}
- {{CSSxRef("-webkit-logical-height")}}
- {{CSSxRef("-webkit-logical-width")}}

### M

- {{CSSxRef("-webkit-margin-after")}}
- {{CSSxRef("-webkit-margin-before")}}
- {{CSSxRef("-webkit-mask-box-image-outset")}}
- {{CSSxRef("-webkit-mask-box-image-repeat")}}
- {{CSSxRef("-webkit-mask-box-image-slice")}}
- {{CSSxRef("-webkit-mask-box-image-source")}}
- {{CSSxRef("-webkit-mask-box-image-width")}}
- {{CSSxRef("-webkit-mask-box-image")}}
- {{cssxref("-webkit-mask-composite")}}
- {{CSSxRef("-webkit-mask-position-x")}} (supported with `-webkit-` by every browser, for compatibility reasons)
- {{CSSxRef("-webkit-mask-position-y")}} (supported with `-webkit-` by every browser, for compatibility reasons)
- {{CSSxRef("-webkit-mask-repeat-x")}} (also supported without prefix)
- {{CSSxRef("-webkit-mask-repeat-y")}} (also supported without prefix)
- {{CSSxRef("-webkit-mask-source-type")}}
- {{CSSxRef("-webkit-max-logical-height")}}
- {{CSSxRef("-webkit-max-logical-width")}}
- {{CSSxRef("-webkit-min-logical-height")}}
- {{CSSxRef("-webkit-min-logical-width")}}

### N-R

- {{CSSxRef("-webkit-nbsp-mode")}}
- {{CSSxRef("-webkit-perspective-origin-x")}}
- {{CSSxRef("-webkit-perspective-origin-y")}}
- {{CSSxRef("-webkit-rtl-ordering")}}

### T

- {{CSSxRef("-webkit-tap-highlight-color")}}
- {{CSSxRef("-webkit-text-decoration-skip")}}
- {{CSSxRef("-webkit-text-decorations-in-effect")}}
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- {{CSSxRef("-webkit-text-stroke")}}
- {{CSSxRef("-webkit-text-zoom")}}
- {{cssxref("-webkit-touch-callout")}}
- {{CSSxRef("-webkit-transform-origin-x")}}
- {{CSSxRef("-webkit-transform-origin-y")}}
- {{CSSxRef("-webkit-transform-origin-z")}}

### U-Z

- {{CSSxRef("-webkit-user-drag")}}
- {{CSSxRef("-webkit-user-modify")}}

## -webkit-prefixed properties with standard equivalents

Several old `-webkit-` prefixed properties have standard equivalents. Even if the name and syntax may be different, they shouldn't be used anymore at all.

For each of them, use the standard equivalent provided.

### A-B

- `-webkit-border-after`
  - : Use the standard {{CSSxRef("border-block-end")}} property instead.
- `-webkit-border-after-color`
  - : Use the standard {{CSSxRef("border-block-end-color")}} property instead.
- `-webkit-border-after-style`
  - : Use the standard {{CSSxRef("border-block-end-style")}} property instead.
- `-webkit-border-after-width`
  - : Use the standard {{CSSxRef("border-block-end-width")}} property instead.
- `-webkit-border-before`
  - : Use the standard {{CSSxRef("border-block-start")}} property instead.
- `-webkit-border-before-color`
  - : Use the standard {{CSSxRef("border-block-start-color")}} property instead.
- `-webkit-border-before-style`
  - : Use the standard {{CSSxRef("border-block-start-style")}} property instead.
- `-webkit-border-before-width`
  - : Use the standard {{CSSxRef("border-block-start-width")}} property instead.
- `-webkit-border-end`
  - : Use the standard {{CSSxRef("border-inline-end")}} property instead.
- `-webkit-border-end-color`
  - : Use the standard {{CSSxRef("border-inline-end-color")}} property instead.
- `-webkit-border-end-style`
  - : Use the standard {{CSSxRef("border-inline-end-style")}} property instead.
- `-webkit-border-end-width`
  - : Use the standard {{CSSxRef("border-inline-end-width")}} property instead.
- `-webkit-border-start`
  - : Use the standard {{CSSxRef("border-inline-start")}} property instead.
- `-webkit-border-start-color`
  - : Use the standard {{CSSxRef("border-inline-start-color")}} property instead.
- `-webkit-border-start-style`
  - : Use the standard {{CSSxRef("border-inline-start-style")}} property instead.
- `-webkit-border-start-width`
  - : Use the standard {{CSSxRef("border-inline-start-width")}} property instead.
- `-webkit-box-align`
  - : Use the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with the standard {{CSSxRef("align-items")}} property instead.
- `-webkit-box-direction`
  - : Use the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with the standard {{CSSxRef("flex-direction")}} property instead.
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}
  - : Use the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with the standard {{cssxref("flex-basis")}}, {{cssxref("flex-grow")}}, and {{cssxref("flex-shrink")}} properties instead.
- `-webkit-box-flex`
  - : Use the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with the standard {{CSSxRef("flex-grow")}} property instead.
- `-webkit-box-lines`
  - : Use the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with the standard {{CSSxRef("flex-flow")}} property instead.
- `-webkit-box-ordinal-group`
  - : Use the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with the standard {{CSSxRef("order")}} property instead.
- `-webkit-box-orient`
  - : Use the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with the standard {{CSSxRef("flex-direction")}} property instead.
- `-webkit-box-pack`
  - : Use the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with the standard {{CSSxRef("justify-content")}} property instead.

### C-I

- `-webkit-column-break-after`
  - : Use the [CSS multicolumn layout](/en-US/docs/Web/CSS/CSS_multicol_layout) with the standard {{cssxref("break-after")}} property instead.
- `-webkit-column-break-before`
  - : Use the [CSS multicolumn layout](/en-US/docs/Web/CSS/CSS_multicol_layout) with the standard {{cssxref("break-before")}} property instead.
- `-webkit-column-break-inside`
  - : Use the [CSS multicolumn layout](/en-US/docs/Web/CSS/CSS_multicol_layout) with the standard {{cssxref("break-inside")}} property instead.
- `-webkit-font-feature-settings`
  - : Use the [`font-feature-settings`](/en-US/docs/Web/CSS/font-feature-settings) property instead.
- `-webkit-hyphenate-character`
  - : Use the standard {{cssxref("hyphenate-character")}} property instead.
- `-webkit-initial-letter`
  - : Use the standard {{cssxref("initial-letter")}} property instead.

### J-Z

- `-webkit-margin-end`
  - : Use the standard {{CSSxRef("margin-block-end")}} property instead.
- `-webkit-margin-start`
  - : Use the standard {{CSSxRef("margin-block-start")}} property instead.
- `-webkit-padding-after`
  - : Use the standard {{CSSxRef("padding-block-end")}} property instead.
- `-webkit-padding-before`
  - : Use the standard {{CSSxRef("padding-block-start")}} property instead.
- `-webkit-padding-end`
  - : Use the standard {{CSSxRef("padding-inline-end")}} property instead.
- `-webkit-padding-start`
  - : Use the standard {{CSSxRef("padding-inline-start")}} property instead.

## -webkit-prefixed property values

- `-webkit-fill-available`
  - : Used with sizing properties like {{CSSxRef("width")}} and {{CSSxRef("height")}}, to allow elements to take up all the available space within their parent container. The flexbox `stretch` value (see for example {{CSSxRef("align-items")}} and {{CSSxRef("justify-items")}}) provides a standard replacement.

## Pseudo-classes

- {{CSSxRef(":animating-full-screen-transition", ":-webkit-animating-full-screen-transition")}}
- {{CSSxRef(":is", ":-webkit-any()")}}
- {{CSSxRef(":any-link", ":-webkit-any-link")}}\*
- {{CSSxRef(":autofill",":-webkit-autofill")}}
- {{CSSxRef(":autofill-strong-password",":-webkit-autofill-strong-password")}}
- {{CSSxRef(":drag",":-webkit-drag")}}
- {{CSSxRef(":full-page-media",":-webkit-full-page-media")}}
- {{CSSxRef(":full-screen", ":-webkit-full-screen")}}\*
- {{CSSxRef(":full-screen-ancestor",":-webkit-full-screen-ancestor")}}
- {{CSSxRef(":full-screen-document",":-webkit-full-screen-document")}}
- {{CSSxRef(":full-screen-controls-hidden",":-webkit-full-screen-controls-hidden")}}

\* Now standard.

> [!NOTE]
> If there is an invalid pseudo-class within in a chain or group of selectors, the whole selector list is invalid.

## Pseudo-elements

For web-compatibility reasons, Blink, WebKit, and Gecko browsers treat all pseudo-elements starting with `::-webkit-` as valid.

- {{CSSxRef("::file-selector-button","::-webkit-file-upload-button")}}\*
- {{CSSxRef("::-webkit-inner-spin-button", "::-webkit-inner-spin-button")}}
- {{CSSxRef("::placeholder", "::-webkit-input-placeholder")}}
- {{CSSxRef("::-webkit-meter-bar", "::-webkit-meter-bar")}}
- {{CSSxRef("::-webkit-meter-even-less-good-value", "::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-inner-element", "::-webkit-meter-inner-element")}}
- {{CSSxRef("::-webkit-meter-optimum-value", "::-webkit-meter-optimum-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value", "::-webkit-meter-suboptimum-value")}}
- {{CSSxRef("::-webkit-progress-bar", "::-webkit-progress-bar")}}
- {{CSSxRef("::-webkit-progress-inner-element", "::-webkit-progress-inner-element")}}
- {{CSSxRef("::-webkit-progress-value", "::-webkit-progress-value")}}
- {{CSSxRef("::-webkit-search-cancel-button", "::-webkit-search-cancel-button")}}
- {{CSSxRef("::-webkit-search-results-button", "::-webkit-search-results-button")}}
- {{CSSxRef("::-webkit-slider-runnable-track", "::-webkit-slider-runnable-track")}}
- {{CSSxRef("::-webkit-slider-thumb", "::-webkit-slider-thumb")}}

\* Now standard.

> [!NOTE]
> Generally, if there is an invalid pseudo-element or pseudo-class within in a chain or group of selectors, the whole selector list is invalid. If a pseudo-element (but not pseudo-class) has a -webkit- prefix, As of Firefox 63, Blink, WebKit and Gecko browsers assume it is valid, not invalidating the selector list.

## Media features

- {{CSSxRef("@media/-webkit-animation", "-webkit-animation")}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
- {{CSSxRef("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{CSSxRef("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{CSSxRef("@media/-webkit-transition", "-webkit-transition")}}

## See also

- [Vendor Prefix](/en-US/docs/Glossary/Vendor_Prefix) glossary entry
- [Mozilla vendor-prefixed CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- [Styling Form Controls on the WebKit Trac](https://trac.webkit.org/wiki/Styling%20Form%20Controls)
