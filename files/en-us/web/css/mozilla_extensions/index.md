---
title: Firefox (-moz-) vendor-prefixed CSS extensions
slug: Web/CSS/Mozilla_Extensions
page-type: landing-page
status:
  - non-standard
---

{{CSSRef}}

A {{glossary("vendor prefix")}} is used to indicate that a feature is specific to a certain browser.
Firefox supports a number of extensions to [CSS](/en-US/docs/Web/CSS) which are prefixed with `-moz-`.

## -moz-prefixed properties without standard equivalents

> [!NOTE]
> These extensions are mostly experimental or deprecated but kept for backward compatibility.
> You should avoid using them on production websites.

- {{CSSxRef("-moz-float-edge")}} {{deprecated_inline}}
- {{CSSxRef("-moz-force-broken-image-icon")}} {{deprecated_inline}}: Use proper `alt` text
- {{CSSxRef("-moz-image-region")}} {{deprecated_inline}}
- {{CSSxRef("-moz-orient")}}
- `-moz-osx-font-smoothing`: A similar {{CSSxRef("font-smooth")}} equivalent exists
- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}
- `-moz-user-modify`: A non-prefixed {{CSSxRef("user-modify")}} equivalent exists, but the HTML [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute is recommended.

## -moz-prefixed properties with standard equivalents

The following properties were implemented first using the `-moz-` vendor prefix, but are now supported in Firefox using the standard (non-prefixed) syntax.
Support for the prefixed version is typically dropped eventually, so use the standard property instead.

### A

- {{CSSxRef("animation", "-moz-animation")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("animation-timing-function", "-moz-animation-timing-function")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("appearance", "-moz-appearance")}} {{Experimental_Inline}}: Prefixed version still supported

### B

- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{deprecated_inline}}: Prefixed version still supported
- `-moz-background-clip` {{deprecated_inline}}: Not supported; use {{CSSxRef("background-clip")}}
- `-moz-background-origin` {{deprecated_inline}}: Not supported; use {{CSSxRef("background-origin")}}
- `-moz-box-align` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("align-items")}}
- `-moz-background-inline-policy` {{deprecated_inline}}: Not supported; use {{CSSxRef("box-decoration-break")}}
- `-moz-box-direction` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-direction")}}
- `-moz-box-flex` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-grow")}}
- `-moz-box-ordinal-group` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("order")}}
- `-moz-box-orient` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("flex-direction")}}
- `-moz-box-pack` {{deprecated_inline}}: Use [CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) with {{CSSxRef("justify-content")}}
- `-moz-background-size` {{deprecated_inline}}: Not supported; use {{CSSxRef("background-size")}}
- `-moz-border-end` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end")}}
- `-moz-border-end-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end-color")}}
- `-moz-border-end-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end-style")}}
- `-moz-border-end-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end-width")}}
- `-moz-border-image` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-end-width")}}
- `-moz-border-start` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-start")}}
- `-moz-border-start-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-start-color")}}
- `-moz-border-start-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-start-style")}}
- `-moz-border-start-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{deprecated_inline}}: Prefixed version still supported

### C

- {{CSSxRef("clip-path")}} {{Experimental_Inline}} (Applying to more than SVG)
- `-moz-column-count` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-count")}}
- `-moz-column-fill` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-fill")}}
- `-moz-column-gap` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-gap")}}
- `-moz-column-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-width")}}
- `-moz-column-rule` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-rule")}}
- `-moz-column-rule-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-rule-width")}}
- `-moz-column-rule-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-rule-style")}}
- `-moz-column-rule-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("column-rule-color")}}

### F–M

- {{CSSxRef("filter")}} {{Experimental_Inline}} (Applying to more than SVG)
- {{CSSxRef("font-feature-settings", "-moz-font-feature-settings")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("font-language-override", "-moz-font-language-override")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("hyphens", "-moz-hyphens")}} {{deprecated_inline}}: Prefixed version still supported
- `-moz-margin-end` {{deprecated_inline}}: Not supported; use {{CSSxRef("margin-inline-end")}}
- `-moz-margin-start` {{deprecated_inline}}: Not supported; use {{CSSxRef("margin-inline-start")}}
- {{CSSxRef("mask")}} {{Experimental_Inline}} (Applying to more than SVG)

### O

- `-moz-opacity` {{deprecated_inline}}: Not supported; use {{CSSxRef("opacity")}}
- `-moz-outline` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline")}}
- `-moz-outline-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline-color")}}
- `-moz-outline-offset` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline-offset")}}
- `-moz-outline-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline-style")}}
- `-moz-outline-width` {{deprecated_inline}}: Not supported; use {{CSSxRef("outline-width")}}

### P

- `-moz-padding-end` {{deprecated_inline}}: Not supported; use {{CSSxRef("padding-inline-end")}}
- `-moz-padding-start` {{deprecated_inline}}: Not supported; use {{CSSxRef("padding-inline-start")}}
- {{CSSxRef("perspective", "-moz-perspective")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("perspective-origin", "-moz-perspective-origin")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("pointer-events")}} {{Experimental_Inline}} (Applying to more than SVG)

### T–U

- `-moz-tab-size`: Use {{CSSxRef("tab-size")}}
- `-moz-text-align-last` {{deprecated_inline}}: Not supported; use {{CSSxRef("text-align-last")}}
- `-moz-text-decoration-color` {{deprecated_inline}}: Not supported; use {{CSSxRef("text-decoration-color")}}
- `-moz-text-decoration-line` {{deprecated_inline}}: Not supported; use {{CSSxRef("text-decoration-line")}}
- `-moz-text-decoration-style` {{deprecated_inline}}: Not supported; use {{CSSxRef("text-decoration-style")}}
- `-moz-text-size-adjust`: See {{CSSxRef("text-size-adjust")}} {{Experimental_Inline}}
- {{CSSxRef("transform", "-moz-transform")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{deprecated_inline}}: Prefixed version still supported
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{deprecated_inline}}: Prefixed version still supported
- `-moz-transition` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition")}}
- `-moz-transition-delay` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition-delay")}}
- `-moz-transition-duration` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition-duration")}}
- `-moz-transition-property` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition-property")}}
- `-moz-transition-timing-function` {{deprecated_inline}}: Not supported; use {{CSSxRef("transition-timing-function")}}
- `-moz-user-select`: Use {{CSSxRef("user-select")}}

## Values

### Global values

- `-moz-initial`: See {{CSSxRef("initial")}}.

### -moz-appearance

Property: {{CSSxRef("appearance", "-moz-appearance")}}

- `button`
- `button-arrow-down`
- `button-arrow-next`
- `button-arrow-previous`
- `button-arrow-up`
- `button-bevel`
- `checkbox`
- `checkbox-container`
- `checkbox-label`
- `checkmenuitem`
- `dialog`
- `groupbox`
- `listbox`
- `menuarrow`
- `menucheckbox`
- `menuimage`
- `menuitem`
- `menuitemtext`
- `menulist`
- `menulist-button`
- `menulist-text`
- `menulist-textfield`
- `menupopup`
- `menuradio`
- `menuseparator`
- `-moz-mac-unified-toolbar`
- `-moz-win-borderless-glass`
- `-moz-win-browsertabbar-toolbox`
- `-moz-win-communications-toolbox`
- `-moz-win-glass`
- `-moz-win-media-toolbox`
- `-moz-window-button-box`
- `-moz-window-button-box-maximized`
- `-moz-window-button-close`
- `-moz-window-button-maximize`
- `-moz-window-button-minimize`
- `-moz-window-button-restore`
- `-moz-window-titlebar`
- `-moz-window-titlebar-maximized`
- `progressbar`
- `progresschunk`
- `radio`
- `radio-container`
- `radio-label`
- `radiomenuitem`
- `resizer`
- `resizerpanel`
- `scale-horizontal`
- `scalethumb-horizontal`
- `scalethumb-vertical`
- `scale-vertical`
- `scrollbarbutton-down`
- `scrollbarbutton-left`
- `scrollbarbutton-right`
- `scrollbarbutton-up`
- `scrollbar-small`
- `scrollbarthumb-horizontal`
- `scrollbarthumb-vertical`
- `scrollbartrack-horizontal`
- `scrollbartrack-vertical`
- `separator`
- `spinner`
- `spinner-downbutton`
- `spinner-textfield`
- `spinner-upbutton`
- `statusbar`
- `statusbarpanel`
- `tab`
- `tabpanels`
- `tab-scroll-arrow-back`
- `tab-scroll-arrow-forward`
- `textfield`
- `textfield-multiline`
- `toolbar`
- `toolbarbutton-dropdown`
- `toolbox`
- `tooltip`
- `treeheadercell`
- `treeheadersortarrow`
- `treeitem`
- `treetwisty`
- `treetwistyopen`
- `treeview`
- `window`

### background-image

Property: {{CSSxRef("background-image")}}

#### Gradients

- `-moz-linear-gradient` {{deprecated_inline}}: Use {{CSSxRef("gradient/linear-gradient")}}
- `-moz-radial-gradient` {{deprecated_inline}}: Use {{CSSxRef("gradient/radial-gradient")}}

#### Elements

- `-moz-element` {{deprecated_inline}}: Use {{CSSxRef("element")}}

#### Sub-images

- {{CSSxRef("-moz-image-rect")}}

### border-color

Property: {{CSSxRef("border-color")}}

- `-moz-use-text-color` {{deprecated_inline}}: Removed in [Firefox bug 1306214](https://bugzil.la/1306214)); use {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}}

### order-style and outline-style

Properties: {{CSSxRef("border-style")}} and {{CSSxRef("outline-style")}}

- `-moz-bg-inset` {{deprecated_inline}}
- `-moz-bg-outset` {{deprecated_inline}}
- `-moz-bg-solid` {{deprecated_inline}}

### &lt;color&gt; keywords

Type: {{CSSxRef("&lt;color&gt;")}}

- `-moz-activehyperlinktext`
- `-moz-hyperlinktext`
- `-moz-visitedhyperlinktext`
- `-moz-buttondefault`
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
- `-moz-dragtargetzone`
- `-moz-mac-accentdarkestshadow`
- `-moz-mac-accentdarkshadow`
- `-moz-mac-accentface`
- `-moz-mac-accentlightesthighlight`
- `-moz-mac-accentlightshadow`
- `-moz-mac-accentregularhighlight`
- `-moz-mac-accentregularshadow`
- `-moz-mac-chrome-active`
- `-moz-mac-chrome-inactive`
- `-moz-mac-focusring`
- `-moz-mac-menuselect`
- `-moz-mac-menushadow`
- `-moz-mac-menutextselect`
- `-moz-menuhover`
- `-moz-menuhovertext`
- `-moz-win-communicationstext`
- `-moz-win-mediatext`
- `-moz-nativehyperlinktext`

### display

Property: {{CSSxRef("display")}}

- `-moz-box` {{deprecated_inline}}
- `-moz-inline-block` {{deprecated_inline}}
- `-moz-inline-box` {{deprecated_inline}}
- `-moz-inline-grid` {{deprecated_inline}}
- `-moz-inline-stack` {{deprecated_inline}}
- `-moz-inline-table` {{deprecated_inline}}
- `-moz-grid` {{deprecated_inline}}
- `-moz-grid-group` {{deprecated_inline}}
- `-moz-grid-line` {{deprecated_inline}}
- `-moz-groupbox` {{deprecated_inline}}
- `-moz-deck` {{deprecated_inline}}
- `-moz-popup` {{deprecated_inline}}
- `-moz-stack` {{deprecated_inline}}
- `-moz-marker` {{deprecated_inline}}

### empty-cells

Property: {{CSSxRef("empty-cells")}}

- `-moz-show-background` (default value in quirks mode)

### font

Property: {{CSSxRef("font")}}

- `-moz-button`
- `-moz-info`
- `-moz-desktop`
- `-moz-dialog`: Also a color
- `-moz-document`
- `-moz-workspace`
- `-moz-window`
- `-moz-list`
- `-moz-pull-down-menu`
- `-moz-field`: Also a color

### font-family

Property: {{CSSxRef("font-family")}}

- `-moz-fixed`

### image-rendering

Property: {{CSSxRef("image-rendering")}}

- `-moz-crisp-edges` {{deprecated_inline}}: Use {{CSSxRef("image-rendering")}}

### &lt;length&gt;

Type: {{CSSxRef("&lt;length&gt;")}}

- {{CSSxRef("calc", "-moz-calc")}}

### list-style-type

Property: {{CSSxRef("list-style-type")}}

- `-moz-arabic-indic`
- `-moz-bengali`
- `-moz-cjk-earthly-branch`
- `-moz-cjk-heavenly-stem`
- `-moz-devanagari`
- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `-moz-ethiopic-halehame-ti-er`
- `-moz-ethiopic-halehame-ti-et`
- `-moz-ethiopic-numeric`
- `-moz-gujarati`
- `-moz-gurmukhi`
- `-moz-hangul`
- `-moz-hangul-consonant`
- `-moz-japanese-formal`
- `-moz-japanese-informal`
- `-moz-kannada`
- `-moz-khmer`
- `-moz-lao`
- `-moz-malayalam`
- `-moz-myanmar`
- `-moz-oriya`
- `-moz-persian`
- `-moz-simp-chinese-formal`
- `-moz-simp-chinese-informal`
- `-moz-tamil`
- `-moz-telugu`
- `-moz-thai`
- `-moz-trad-chinese-formal`
- `-moz-trad-chinese-informal`
- `-moz-urdu`

### text-align

Property: {{CSSxRef("text-align")}}

- `-moz-center`
- `-moz-left`
- `-moz-right`

### text-decoration

Property: {{CSSxRef("text-decoration")}}

- `-moz-anchor-decoration`

### -moz-user-select

Property: {{CSSxRef("user-select", "-moz-user-select")}}

- `-moz-all`
- `-moz-none`

### width, min-width, and max-width

Properties: {{CSSxRef("width")}}, {{CSSxRef("min-width")}}, and {{CSSxRef("max-width")}}

- `-moz-min-content`
- `-moz-fit-content`
- `-moz-max-content`
- `-moz-available`

## Pseudo-elements and pseudo-classes

### A – D

- `::-moz-anonymous-block`
- `::-moz-anonymous-positioned-block`
- `:-moz-any` {{deprecated_inline}}: Use {{CSSxRef(":is")}}
- `:-moz-any-link` {{deprecated_inline}}: Use {{CSSxRef(":any-link")}}
- {{CSSxRef(":-moz-broken")}}
- `::-moz-canvas`
- {{CSSxRef("::-moz-color-swatch")}}
- `::-moz-cell-content`
- {{CSSxRef(":-moz-drag-over")}}

### F – I

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef("::-moz-focus-inner")}}
- `::-moz-focus-outer`
- `:-moz-full-screen` {{deprecated_inline}}: Not supported; use {{CSSxRef(":fullscreen")}}
- `:-moz-full-screen-ancestor`
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- `::-moz-inline-table`

### L – M

- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef("::-moz-list-bullet")}}
- {{CSSxRef("::-moz-list-number")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
- `:-moz-lwtheme`
- `:-moz-lwtheme-brighttext`
- `:-moz-lwtheme-darktext`
- {{CSSxRef("::-moz-meter-bar")}}

### N – R

- `:-moz-native-anonymous`
- {{CSSxRef(":-moz-only-whitespace")}}
- `::-moz-pagebreak`
- `::-moz-pagecontent`
- {{CSSxRef(":placeholder-shown", ":-moz-placeholder")}} {{deprecated_inline}}
- {{CSSxRef("::placeholder", "::-moz-placeholder")}} {{deprecated_inline}}
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- `:-moz-read-only`
- `:-moz-read-write`

### S

- `::-moz-scrolled-canvas`
- `::-moz-scrolled-content`
- `::-moz-selection` {{deprecated_inline}}: Use {{CSSxRef("::selection")}}
- {{CSSxRef(":-moz-submit-invalid")}}
- {{CSSxRef(":-moz-suppressed")}}
- `::-moz-svg-foreign-content`

### T

- `::-moz-table`
- `::-moz-table-cell`
- `::-moz-table-column`
- `::-moz-table-column-group`
- `::-moz-table-outer`
- `::-moz-table-row`
- `::-moz-table-row-group`

### U – X

- `:-moz-ui-invalid` {{deprecated_inline}}: Use {{CSSxRef(":user-invalid")}}
- `:-moz-ui-valid` {{deprecated_inline}}: Use {{CSSxRef(":user-valid")}}
- {{CSSxRef(":-moz-user-disabled")}}
- `::-moz-viewport`
- `::-moz-viewport-scroll`
- {{CSSxRef(":-moz-window-inactive")}}

## At-rules

- {{CSSxRef("@document", "@-moz-document")}}

## Media features

- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{deprecated_inline}}
- `-moz-os-version`
- `-moz-touch-enabled`
- `-moz-windows-glass`

## Other

- `-moz-alt-content`: See [Firefox bug 11011](https://bugzil.la/11011))

## See also

- {{glossary("Vendor Prefix")}} glossary entry
- [WebKit (-webkit-) vendor-prefixed CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
