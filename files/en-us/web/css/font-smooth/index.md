---
title: font-smooth
slug: Web/CSS/font-smooth
page-type: css-property
status:
  - non-standard
browser-compat: css.properties.font-smooth
---

{{CSSRef}} {{ Non-standard_header }}

The **`font-smooth`** [CSS](/en-US/docs/Web/CSS) property controls the application of anti-aliasing when fonts are rendered.

## Syntax

```css
/* Keyword values */
font-smooth: auto;
font-smooth: never;
font-smooth: always;

/* <length> value */
font-smooth: 2em;

/* Global values */
font-smooth: inherit;
font-smooth: initial;
font-smooth: revert;
font-smooth: revert-layer;
font-smooth: unset;
```

> **Note:** WebKit implements a similar property, but with different values: **`-webkit-font-smoothing`**. It only works on macOS.
>
> - `auto` - Let the browser decide (Uses subpixel anti-aliasing when available; this is the default)
> - `none` - Turn font smoothing off; display text with jagged sharp edges.
> - `antialiased` - Smooth the font on the level of the pixel, as opposed to the subpixel. Switching from subpixel rendering to anti-aliasing for light text on dark backgrounds makes it look lighter.
> - `subpixel-antialiased` - On most non-retina displays, this will give the sharpest text.

> **Note:** Firefox implements a similar property, but with different values: **`-moz-osx-font-smoothing`**. It only works on macOS.
>
> - `auto` - Allow the browser to select an optimization for font smoothing, typically `grayscale`.
> - `grayscale` - Render text with grayscale anti-aliasing, as opposed to the subpixel. Switching from subpixel rendering to anti-aliasing for light text on dark backgrounds makes it look lighter.

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
font-smooth =
  auto | never | always | <absolute-size> | <length>
```

## Examples

### Basic usage example

The following example shows the Safari/Chromium and Firefox equivalents that turn on font-smoothing on macOS. In both cases the smoothed font should look slightly lighter in weight.

For those of you not on a macOS system, here is a screenshot (the live version appears later on):

![Two texts examples one with the font-smooth property and another one without](smoothing.png)

#### HTML

```html
<p>Without font smoothing</p>

<p class="smoothed">With font smoothing</p>
```

#### CSS

```css
html {
  background-color: black;
  color: white;
  font-size: 3rem;
}

p {
  text-align: center;
}

.smoothed {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### Result

{{EmbedLiveSample('Basic_usage_example', '100%', 260)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Please Stop "Fixing" Font Smoothing – UsabilityPost](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
- [Laissez-faire font smoothing and anti-aliasing](https://www.zachleat.com/web/font-smooth/)
