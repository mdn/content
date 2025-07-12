---
title: Firefox (-moz-) vendor-prefixed CSS extensions
slug: Web/CSS/Mozilla_Extensions
page-type: landing-page
status:
  - non-standard
---

{{CSSRef}}

A {{glossary("vendor prefix")}} is used to indicate that a feature is specific to a certain browser.
Firefox supports several extensions to [CSS](/en-US/docs/Web/CSS), which are prefixed with `-moz-`.

## -moz-prefixed properties without standard equivalents

> [!NOTE]
> These extensions are mostly experimental or deprecated but kept for backward compatibility.
> You should avoid using them on production websites.

- {{CSSxRef("-moz-float-edge")}} {{deprecated_inline}}
- {{CSSxRef("-moz-force-broken-image-icon")}} {{deprecated_inline}}: Use `alt` text instead.
- {{CSSxRef("-moz-orient")}}
- `-moz-osx-font-smoothing`: A similar {{CSSxRef("font-smooth")}} equivalent exists.
- {{CSSxRef("-moz-user-focus")}} {{deprecated_inline}}
- {{CSSxRef("-moz-user-input")}} {{deprecated_inline}}
- `-moz-user-modify`: A non-prefixed {{CSSxRef("user-modify")}} equivalent exists, but the HTML [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute is recommended instead.

## -moz-prefixed properties with standard equivalents

The following properties were implemented first using the `-moz-` vendor prefix, but are now supported in Firefox using the standard (non-prefixed) syntax.
Support for the prefixed version is typically dropped eventually, so use the standard property instead.

### A

- {{CSSxRef("animation", "-moz-animation")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("animation-timing-function", "-moz-animation-timing-function")}} {{deprecated_inline}}: Prefixed version still supported.
- `-moz-appearance`: The prefixed version of {{CSSxRef("appearance")}} is still supported.

### B

- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{deprecated_inline}}: Prefixed version still supported.
- `-moz-background-clip` {{deprecated_inline}}: Not supported; use {{CSSxRef("background-clip")}}.
- `-moz-background-origin` {{deprecated_inline}}: Not supported; use {{CSSxRef("background-origin")}}.
- `-moz-box-align` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("align-items")}}.
- `-moz-background-inline-policy` {{deprecated_inline}}: Not supported; use {{CSSxRef("box-decoration-break")}}.
- `-moz-box-direction` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-direction")}}.
- `-moz-box-flex` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-grow")}}.
- `-moz-box-ordinal-group` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("order")}}.
- `-moz-box-orient` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-direction")}}.
- `-moz-box-pack` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("justify-content")}}.
- `-moz-background-size` {{deprecated_inline}}: Not supported; use {{CSSxRef("background-size")}}.
- `-moz-border-end` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end")}}.
- `-moz-border-end-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end-color")}}.
- `-moz-border-end-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end-style")}}.
- `-moz-border-end-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end-width")}}.
- `-moz-border-image` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end-width")}}.
- `-moz-border-start` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-start")}}.
- `-moz-border-start-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-start-color")}}.
- `-moz-border-start-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-start-style")}}.
- `-moz-border-start-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-start-width")}}.
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{deprecated_inline}}: Prefixed version still supported.

### C

- `-moz-column-count` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-count")}}.
- `-moz-column-fill` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-fill")}}.
- `-moz-column-gap` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-gap")}}.
- `-moz-column-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-width")}}.
- `-moz-column-rule` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-rule")}}.
- `-moz-column-rule-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-rule-width")}}.
- `-moz-column-rule-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-rule-style")}}.
- `-moz-column-rule-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-rule-color")}}.

### F–M

- {{CSSxRef("font-feature-settings", "-moz-font-feature-settings")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("font-language-override", "-moz-font-language-override")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("hyphens", "-moz-hyphens")}} {{deprecated_inline}}: Prefixed version still supported.
- `-moz-margin-end` {{deprecated_inline}}: Not supported; use {{CSSxRef("margin-inline-end")}}.
- `-moz-margin-start` {{deprecated_inline}}: Not supported; use {{CSSxRef("margin-inline-start")}}.

### O-P

- `-moz-opacity` {{deprecated_inline}}: Not supported; use {{CSSxRef("opacity")}}.
- `-moz-outline` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline")}}.
- `-moz-outline-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline-color")}}.
- `-moz-outline-offset` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline-offset")}}.
- `-moz-outline-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline-style")}}.
- `-moz-outline-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline-width")}}.
- `-moz-padding-end` {{deprecated_inline}}: Not supported; use {{CSSxRef("padding-inline-end")}}.
- `-moz-padding-start` {{deprecated_inline}}: Not supported; use {{CSSxRef("padding-inline-start")}}.
- {{CSSxRef("perspective", "-moz-perspective")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("perspective-origin", "-moz-perspective-origin")}} {{deprecated_inline}}: Prefixed version still supported.

### T–Z

- `-moz-tab-size`: Use {{CSSxRef("tab-size")}}
- `-moz-text-align-last` {{deprecated_inline}}: Not supported; use {{CSSxRef("text-align-last")}}.
- `-moz-text-decoration-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("text-decoration-color")}}.
- `-moz-text-decoration-line` {{deprecated_inline}}: Not supported; use {{CSSxRef("text-decoration-line")}}.
- `-moz-text-decoration-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("text-decoration-style")}}.
- `-moz-text-size-adjust`: See {{CSSxRef("text-size-adjust")}} {{Experimental_Inline}}.
- {{CSSxRef("transform", "-moz-transform")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{deprecated_inline}}: Prefixed version still supported.
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{deprecated_inline}}: Prefixed version still supported.
- `-moz-transition` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition")}}.
- `-moz-transition-delay` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition-delay")}}.
- `-moz-transition-duration` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition-duration")}}.
- `-moz-transition-property` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition-property")}}.
- `-moz-transition-timing-function` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition-timing-function")}}.
- `-moz-user-select`: Use {{CSSxRef("user-select")}}.

## -moz-prefixed property values

### Global values

- `-moz-initial`: See {{CSSxRef("initial")}}.

### background-image

**Property:** {{CSSxRef("background-image")}}

- `-moz-linear-gradient` {{deprecated_inline}}: Use {{CSSxRef("gradient/linear-gradient")}}.
- `-moz-radial-gradient` {{deprecated_inline}}: Use {{CSSxRef("gradient/radial-gradient")}}.
- `-moz-element` {{deprecated_inline}}: Use {{CSSxRef("element")}}.
- {{CSSxRef("-moz-image-rect")}} {{deprecated_inline}}

### order-style and outline-style

**Properties:** {{CSSxRef("border-style")}} and {{CSSxRef("outline-style")}}.

- `-moz-bg-inset` {{deprecated_inline}}
- `-moz-bg-outset` {{deprecated_inline}}
- `-moz-bg-solid` {{deprecated_inline}}

### &lt;color&gt; keywords

**Type:** {{CSSxRef("&lt;color&gt;")}}

- `-moz-activehyperlinktext`
- `-moz-hyperlinktext`
- `-moz-visitedhyperlinktext`
- `-moz-buttonhoverface`
- `-moz-buttonhovertext`
- `-moz-default-background-color`
- `-moz-default-color`
- `-moz-cellhighlight`
- `-moz-cellhighlighttext`
- `-moz-field`
- `-moz-fieldtext`
- `-moz-dialog`
- `-moz-dialogtext`
- `-moz-menuhover`
- `-moz-menuhovertext`

### empty-cells

**Property:** {{CSSxRef("empty-cells")}}

- `-moz-show-background` (default value in quirks mode)

### font-family

**Property:** {{CSSxRef("font-family")}}

- `-moz-fixed`

### image-rendering

**Property:** {{CSSxRef("image-rendering")}}

- `-moz-crisp-edges` {{deprecated_inline}}: Use [`crisp-edges`](/en-US/docs/Web/CSS/image-rendering#crisp-edges).

### &lt;length&gt;

**Type:** {{CSSxRef("&lt;length&gt;")}}

- `-moz-calc`{{deprecated_inline}}: Use {{CSSxRef("calc")}}.

### list-style-type

**Property:** {{CSSxRef("list-style-type")}}

Several vendor-prefixed values for `list-style-type` are now supported as standard values without a `-moz-` prefix, except for those in the following list.
See [Browser Compatibility](/en-US/docs/Web/CSS/list-style-type#browser_compatibility) for details.

- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `-moz-ethiopic-halehame-ti-er`
- `-moz-ethiopic-halehame-ti-et`
- `-moz-hangul`
- `-moz-hangul-consonant`
- `-moz-urdu`

### text-align

**Property:** {{CSSxRef("text-align")}}

- `-moz-center` {{deprecated_inline}}: Use {{CSSxRef("text-align", "text-align: center")}}.
- `-moz-left` {{deprecated_inline}}: Use {{CSSxRef("text-align", "text-align: left")}}.
- `-moz-right` {{deprecated_inline}}: Use {{CSSxRef("text-align", "text-align: right")}}.

### width, min-width, and max-width

**Properties:** {{CSSxRef("width")}}, {{CSSxRef("min-width")}}, and {{CSSxRef("max-width")}}

- `-moz-min-content`: See {{CSSxRef("min-content")}}.
- `-moz-fit-content`: See {{CSSxRef("fit-content")}}.
- `-moz-max-content`: See {{CSSxRef("max-content")}}.
- `-moz-available`: See [`stretch`](/en-US/docs/Web/CSS/width#stretch).

## Pseudo-classes

- `:-moz-any` {{deprecated_inline}}: Use {{CSSxRef(":is")}}.
- `:-moz-any-link` {{deprecated_inline}}: Use {{CSSxRef(":any-link")}}.
- {{CSSxRef(":-moz-broken")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-drag-over")}}
- {{CSSxRef(":-moz-first-node")}}
- `:-moz-full-screen` {{deprecated_inline}}: Not supported; use {{CSSxRef(":fullscreen")}}.
- `:-moz-full-screen-ancestor` {{deprecated_inline}}: Not supported; use {{CSSxRef(":fullscreen")}}.
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
- `:-moz-native-anonymous`
- `:-moz-placeholder` {{deprecated_inline}}: Use {{CSSxRef(":placeholder-shown")}}.
- {{CSSxRef(":-moz-only-whitespace")}}
- `:-moz-read-only` {{deprecated_inline}}: Use {{CSSxRef(":read-only")}}.
- `:-moz-read-write` {{deprecated_inline}}: Use {{CSSxRef(":read-write")}}.
- {{CSSxRef(":-moz-submit-invalid")}}: See {{CSSxRef(":invalid")}}.
- {{CSSxRef(":-moz-suppressed")}}
- `:-moz-ui-invalid` {{deprecated_inline}}: Use {{CSSxRef(":user-invalid")}}.
- `:-moz-ui-valid` {{deprecated_inline}}: Use {{CSSxRef(":user-valid")}}.
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef(":-moz-window-inactive")}}

## Pseudo-elements

- `::-moz-canvas`
- `::-moz-cell-content`
- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-focus-inner")}}
- `::-moz-focus-outer`
- `::-moz-inline-table`
- {{CSSxRef("::-moz-list-bullet")}}
- {{CSSxRef("::-moz-list-number")}}
- {{CSSxRef("::-moz-meter-bar")}}
- `::-moz-pagebreak`
- `::-moz-pagecontent`
- `::-moz-placeholder` {{deprecated_inline}}: Use {{CSSxRef("::placeholder")}}.
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- `::-moz-scrolled-canvas`
- `::-moz-scrolled-content`
- `::-moz-selection` {{deprecated_inline}}: Use {{CSSxRef("::selection")}}.
- `::-moz-svg-foreign-content`
- `::-moz-table`
- `::-moz-table-cell`
- `::-moz-table-column`
- `::-moz-table-column-group`
- `::-moz-table-outer`
- `::-moz-table-row`
- `::-moz-table-row-group`
- `::-moz-viewport`
- `::-moz-viewport-scroll`

## At-rules

- {{CSSxRef("@document", "@-moz-document")}}

## Media features

- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{deprecated_inline}}
- `-moz-platform`
- `-moz-windows-glass`

## Other

- `-moz-alt-content`: See [Firefox bug 11011](https://bugzil.la/11011)

## See also

- [WebKit (-webkit-) vendor-prefixed CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
- {{glossary("Vendor Prefix")}} glossary entry
