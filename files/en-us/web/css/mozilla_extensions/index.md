---
title: Mozilla vendor-prefixed CSS extensions
slug: Web/CSS/Mozilla_Extensions
page-type: landing-page
status:
  - non-standard
---

{{CSSRef}}

Firefox supports a number of _Mozilla extensions to [CSS](/en-US/docs/Web/CSS)_, including properties, values, pseudo-elements and pseudo-classes, at-rules, and media queries. These extensions are prefixed with `-moz-`.

> [!NOTE]
> These extensions are mostly experimental or deprecated but kept for backward compatibility. Avoid using them on production websites.

## Mozilla-only properties

- {{CSSxRef("box-align", "-moz-box-align")}} {{deprecated_inline}}
- {{CSSxRef("box-direction", "-moz-box-direction")}} {{deprecated_inline}}
- {{CSSxRef("box-flex", "-moz-box-flex")}} {{deprecated_inline}}
- {{CSSxRef("box-ordinal-group", "-moz-box-ordinal-group")}} {{deprecated_inline}}
- {{CSSxRef("box-orient", "-moz-box-orient")}} {{deprecated_inline}}
- {{CSSxRef("box-pack", "-moz-box-pack")}} {{deprecated_inline}}
- {{CSSxRef("-moz-float-edge")}} {{deprecated_inline}}
- {{CSSxRef("-moz-force-broken-image-icon")}} {{deprecated_inline}}
- {{CSSxRef("-moz-image-region")}} {{deprecated_inline}}
- {{CSSxRef("-moz-orient")}} {{non-standard_inline}}
- {{CSSxRef("font-smooth", "-moz-osx-font-smoothing")}} {{non-standard_inline}}
- {{CSSxRef("-moz-user-focus")}} {{non-standard_inline}}
- {{CSSxRef("-moz-user-input")}} {{non-standard_inline}}
- {{CSSxRef("user-modify", "-moz-user-modify")}} {{non-standard_inline}}

## Formerly proprietary properties that are now standard

> [!NOTE]
> To maximize the compatibility of your CSS, you should use the unprefixed standard properties instead of the prefixed ones listed below. Once a given property is standardized and implemented without the prefix, the prefixed version is typically dropped after a while.

### A

- {{CSSxRef("animation", "-moz-animation")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("animation-timing-function","-moz-animation-timing-function")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("appearance","-moz-appearance")}} {{Experimental_Inline}}

### B

- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("background-clip", "-moz-background-clip")}} {{deprecated_inline}}
- {{CSSxRef("background-origin", "-moz-background-origin")}} {{deprecated_inline}}
- {{CSSxRef("box-decoration-break", "-moz-background-inline-policy")}} {{deprecated_inline}} (No longer supported; use the standard {{CSSxRef("box-decoration-break")}})
- {{CSSxRef("background-size", "-moz-background-size")}} {{deprecated_inline}}
- {{CSSxRef("border-inline-end", "-moz-border-end")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("border-inline-end")}})
- {{CSSxRef("border-inline-color", "-moz-border-end-color")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("border-inline-end-color")}})
- {{CSSxRef("border-inline-style", "-moz-border-end-style")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("border-inline-end-style")}})
- {{CSSxRef("border-inline-width", "-moz-border-end-width")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("border-inline-end-width")}})
- {{CSSxRef("border-image", "-moz-border-image")}} {{Deprecated_Inline}}
- {{CSSxRef("border-inline-start", "-moz-border-start")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("border-inline-start")}})
- {{CSSxRef("border-inline-start-color", "-moz-border-start-color")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("border-inline-start-color")}})
- {{CSSxRef("border-inline-start-style", "-moz-border-start-style")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("border-inline-start-style")}})
- {{CSSxRef("border-inline-start-width", "-moz-border-start-width")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("border-inline-start-width")}})
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{Deprecated_Inline}} (Prefixed version still supported)

### C

- {{CSSxRef("clip-path")}} {{Experimental_Inline}} (Applying to more than SVG)
- {{CSSxRef("column-count", "-moz-column-count")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("column-fill", "-moz-column-fill")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("column-gap", "-moz-column-gap")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("column-width", "-moz-column-width")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("column-rule", "-moz-column-rule")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("column-rule-width", "-moz-column-rule-width")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("column-rule-style", "-moz-column-rule-style")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("column-rule-color", "-moz-column-rule-color")}} {{Deprecated_Inline}} (Prefixed version still supported)

### F–M

- {{CSSxRef("filter")}} {{Experimental_Inline}} (Applying to more than SVG)
- {{CSSxRef("font-feature-settings", "-moz-font-feature-settings")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("font-language-override", "-moz-font-language-override")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("hyphens", "-moz-hyphens")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("margin-inline-end", "-moz-margin-end")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("margin-inline-end")}})
- {{CSSxRef("margin-inline-start", "-moz-margin-start")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("margin-inline-start")}})
- {{CSSxRef("mask")}} {{Experimental_Inline}} (Applying to more than SVG)

### O

- {{CSSxRef("opacity", "-moz-opacity")}} {{deprecated_inline}}
- {{CSSxRef("outline", "-moz-outline")}} {{deprecated_inline}}
- {{CSSxRef("outline-color", "-moz-outline-color")}} {{deprecated_inline}}
- {{CSSxRef("outline-offset", "-moz-outline-offset")}} {{deprecated_inline}}
- {{CSSxRef("outline-style", "-moz-outline-style")}} {{deprecated_inline}}
- {{CSSxRef("outline-width", "-moz-outline-width")}} {{deprecated_inline}}

### P

- {{CSSxRef("padding-inline-end", "-moz-padding-end")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("padding-inline-end")}})
- {{CSSxRef("padding-inline-start", "-moz-padding-start")}} {{Deprecated_Inline}} (No longer supported; use the standard {{CSSxRef("padding-inline-start")}})
- {{CSSxRef("perspective", "-moz-perspective")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("perspective-origin", "-moz-perspective-origin")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("pointer-events")}} {{Experimental_Inline}} (Applying to more than SVG)

### T–U

- {{CSSxRef("tab-size", "-moz-tab-size")}} {{Experimental_Inline}}
- {{CSSxRef("text-align-last", "-moz-text-align-last")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-color", "-moz-text-decoration-color")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-line", "-moz-text-decoration-line")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-style", "-moz-text-decoration-style")}} {{deprecated_inline}}
- {{CSSxRef("text-size-adjust", "-moz-text-size-adjust")}} {{Experimental_Inline}}
- {{CSSxRef("transform", "-moz-transform")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("transition", "-moz-transition")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("transition-delay", "-moz-transition-delay")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("transition-duration", "-moz-transition-duration")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("transition-property", "-moz-transition-property")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("transition-timing-function", "-moz-transition-timing-function")}} {{Deprecated_Inline}} (Prefixed version still supported)
- {{CSSxRef("user-select", "-moz-user-select")}} {{Experimental_Inline}}

## Values

### Global values

- {{CSSxRef("initial", "-moz-initial")}}

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

- {{CSSxRef("gradient/linear-gradient","-moz-linear-gradient")}} {{Deprecated_Inline}}
- {{CSSxRef("gradient/radial-gradient","-moz-radial-gradient")}} {{Deprecated_Inline}}

#### Elements

- {{CSSxRef("element","-moz-element")}}

#### Sub-images

- {{CSSxRef("-moz-image-rect")}}

### border-color

Property: {{CSSxRef("border-color")}}

- `-moz-use-text-color` {{deprecated_inline}} (removed in [Firefox bug 1306214](https://bugzil.la/1306214)); use {{CSSxRef("color_value#currentcolor_keyword","currentcolor")}} instead.

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
- `-moz-inline-box` {{Deprecated_Inline}}
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
- `-moz-dialog` (also a color)
- `-moz-document`
- `-moz-workspace`
- `-moz-window`
- `-moz-list`
- `-moz-pull-down-menu`
- `-moz-field` (also a color)

### font-family

Property: {{CSSxRef("font-family")}}

- `-moz-fixed`

### image-rendering

Property: {{CSSxRef("image-rendering")}}

- {{CSSxRef("image-rendering","-moz-crisp-edges")}}

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

- {{CSSxRef("::-moz-anonymous-block")}}
- {{CSSxRef("::-moz-anonymous-positioned-block")}}
- {{CSSxRef(":is", ":-moz-any")}}
- {{CSSxRef(":any-link", ":-moz-any-link")}} \[Matches `:link` and `:visited`]
- {{CSSxRef(":-moz-broken")}}
- {{CSSxRef("::-moz-canvas")}}
- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-cell-content")}}
- {{CSSxRef(":-moz-drag-over")}}

### F – I

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef("::-moz-focus-inner")}}
- {{CSSxRef("::-moz-focus-outer")}}
- {{CSSxRef(":fullscreen", ":-moz-full-screen")}}
- {{CSSxRef(":-moz-full-screen-ancestor")}}
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef("::-moz-inline-table")}}

### L – M

- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef("::-moz-list-bullet")}}
- {{CSSxRef("::-moz-list-number")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
- {{CSSxRef(":-moz-lwtheme")}}
- {{CSSxRef(":-moz-lwtheme-brighttext")}}
- {{CSSxRef(":-moz-lwtheme-darktext")}}
- {{CSSxRef("::-moz-meter-bar")}}

### N – R

- {{CSSxRef(":-moz-native-anonymous")}}
- {{CSSxRef(":-moz-only-whitespace")}}
- {{CSSxRef("::-moz-pagebreak")}}
- {{CSSxRef("::-moz-pagecontent")}}
- {{CSSxRef(":placeholder-shown", ":-moz-placeholder")}} {{deprecated_inline}}
- {{CSSxRef("::placeholder", "::-moz-placeholder")}} {{deprecated_inline}}
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- {{CSSxRef(":-moz-read-only")}}
- {{CSSxRef(":-moz-read-write")}}

### S

- {{CSSxRef("::-moz-scrolled-canvas")}}
- {{CSSxRef("::-moz-scrolled-content")}}
- {{CSSxRef("::selection","::-moz-selection")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-submit-invalid")}}
- {{CSSxRef(":-moz-suppressed")}}
- {{CSSxRef("::-moz-svg-foreign-content")}}

### T

- {{CSSxRef("::-moz-table")}}
- {{CSSxRef("::-moz-table-cell")}}
- {{CSSxRef("::-moz-table-column")}}
- {{CSSxRef("::-moz-table-column-group")}}
- {{CSSxRef("::-moz-table-outer")}}
- {{CSSxRef("::-moz-table-row")}}
- {{CSSxRef("::-moz-table-row-group")}}

### U – X

- {{CSSxRef(":user-invalid", ":-moz-ui-invalid")}} {{deprecated_inline}}
- {{CSSxRef(":user-valid", ":-moz-ui-valid")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef("::-moz-viewport")}}
- {{CSSxRef("::-moz-viewport-scroll")}}
- {{CSSxRef(":-moz-window-inactive")}}

## At-rules

- {{CSSxRef("@document", "@-moz-document")}}

## Media features

- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{deprecated_inline}}
- {{CSSxRef("@media/-moz-os-version", "-moz-os-version")}}
- {{CSSxRef("@media/-moz-touch-enabled", "-moz-touch-enabled")}}
- {{CSSxRef("@media/-moz-windows-glass", "-moz-windows-glass")}}

## Other

- {{CSSxRef("-moz-alt-content")}} (see [Firefox bug 11011](https://bugzil.la/11011))

## See also

- [Vendor Prefix](/en-US/docs/Glossary/Vendor_Prefix) glossary entry
- [WebKit vendor-prefixed CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
