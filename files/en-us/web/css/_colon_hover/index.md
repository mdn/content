---
title: ':hover'
slug: Web/CSS/:hover
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.hover
---
{{ CSSRef }}

The **`:hover`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches when the user interacts with an element with a pointing device, but does not necessarily activate it. It is generally triggered when the user hovers over an element with the cursor (mouse pointer).

```css
/* Selects any <a> element when "hovered" */
a:hover {
  color: orange;
}
```

Styles defined by the `:hover` pseudo-class will be overridden by any subsequent link-related pseudo-class ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, or {{ cssxref(":active") }}) that has at least equal specificity. To style links appropriately, put the `:hover` rule after the `:link` and `:visited` rules but before the `:active` one, as defined by the _LVHA-order_: `:link` — `:visited` — `:hover` — `:active`.

> **Note:** The `:hover` pseudo-class is problematic on touchscreens. Depending on the browser, the `:hover` pseudo-class might never match, match only for a moment after touching an element, or continue to match even after the user has stopped touching and until the user touches another element. Web developers should make sure that content is accessible on devices with limited or non-existent hovering capabilities.

## Syntax

{{csssyntax}}

## Examples

### Basic example

#### HTML

```html
<a href="#">Try hovering over this link.</a>
```

#### CSS

```css
a {
  background-color: powderblue;
  transition: background-color .5s;
}

a:hover {
  background-color: gold;
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

### Image gallery

You can use the `:hover` pseudo-class to build an image gallery with full-size images that show only when the mouse moves over a thumbnail. See [this demo](/@api/deki/files/6247/=css-gallery.zip "css-gallery.zip") for a possible cue.

> **Note:** For an analogous effect, but based on the [`:checked`](/en-US/docs/Web/CSS/:checked) pseudo-class (applied to hidden radioboxes), see [this demo](/@api/deki/files/6268/=css-checked-gallery.zip "css-checked-gallery.zip"), taken from the [:checked](/en-US/docs/Web/CSS/:checked) reference page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Chromium bug #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://code.google.com/p/chromium/issues/detail?id=370155)
- [Chromium bug #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://code.google.com/p/chromium/issues/detail?id=306581)
