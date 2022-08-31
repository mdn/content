---
title: zoom
slug: Web/CSS/zoom
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.zoom
---

{{CSSRef}}{{Non-standard_header}}

The non-standard **`zoom`** [CSS](/en-US/docs/Web/CSS) property can be used to control the magnification level of an element. {{cssxref("transform-function/scale", "transform: scale()")}} should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.

## Syntax

```css
/* Keyword values */
zoom: normal;
zoom: reset;

/* <percentage> values */
zoom: 50%;
zoom: 200%;

/* <number> values */
zoom: 1.1;
zoom: 0.7;

/* Global values */
zoom: inherit;
zoom: initial;
zoom: revert;
zoom: revert-layer;
zoom: unset;
```

### Values

- `normal`
  - : Render this element at its normal size.
- `reset` {{non-standard_inline}}

  - : Do not (de)magnify this element if the user applies non-pinch-based zooming (e.g. by pressing <kbd>Ctrl</kbd> \- <kbd>-</kbd> or <kbd>Ctrl</kbd> \+ <kbd>+</kbd> keyboard shortcuts) to the document. Only supported by WebKit (and possibly Blink).

- {{cssxref("&lt;percentage&gt;")}}
  - : Zoom factor. `100%` is equivalent to `normal`. Values larger than `100%` zoom in. Values smaller than `100%` zoom out.
- {{cssxref("&lt;number&gt;")}}
  - : Zoom factor. Equivalent to the corresponding percentage (`1.0` = `100%` = `normal`). Values larger than `1.0` zoom in. Values smaller than `1.0` zoom out.

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
zoom =
  normal | reset | <number> | <percentage>
```

## Examples

### First example

#### HTML

```html
<p class="small">Small</p>
<p class="normal">Normal</p>
<p class="big">Big</p>
```

#### CSS

```css
p.small {
  zoom: 75%;
}
p.normal {
  zoom: normal;
}
p.big {
  zoom: 2.5;
}
p {
  display: inline-block;
}
p:hover {
  zoom: reset;
}
```

#### Result

{{EmbedLiveSample('First_example')}}

### Second example

#### HTML

```html
<div id="a" class="circle"></div>
<div id="b" class="circle"></div>
<div id="c" class="circle"></div>
```

#### CSS

```css
div.circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  zoom: 1.5;
}
div#a {
  background-color: gold;
  zoom: normal;
}
div#b {
  background-color: green;
  zoom: 200%;
}
div#c {
  background-color: blue;
  zoom: 2.9;
}
```

#### Result

{{EmbedLiveSample('Second_example')}}

## Specifications

Not part of any standard. This property originated in Internet Explorer. Apple has [a description in the Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW15). Rossen Atanassov of Microsoft has [an unofficial draft specification proposal on GitHub](https://cdn.jsdelivr.net/gh/atanassov/css-zoom@master/Overview.html).

## Browser compatibility

{{Compat}}

## See also

- [`zoom` entry in CSS-Tricks' CSS Almanac](https://css-tricks.com/almanac/properties/z/zoom/)
- The `zoom` viewport descriptor used with [`@viewport`](/en-US/docs/Web/CSS/@viewport)
- [Bug 390936: Implement Internet Explorer `zoom` property for CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=390936) on the Firefox issue tracker Bugzilla
