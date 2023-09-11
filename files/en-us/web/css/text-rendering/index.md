---
title: text-rendering
slug: Web/CSS/text-rendering
page-type: css-property
browser-compat: css.properties.text-rendering
---

{{CSSRef}}

The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.

The browser makes trade-offs among speed, legibility, and geometric precision.

> **Note:** The `text-rendering` property is an SVG property that is not defined in any CSS standard. However, Gecko and WebKit browsers let you apply this property to HTML and XML content on Windows, macOS, and Linux.

One very visible effect is `optimizeLegibility`, which enables ligatures (ff, fi, fl, etc.) in text smaller than 20px for some fonts (for example, Microsoft's _Calibri_, _Candara_, _Constantia_, and _Corbel_, or the _DejaVu_ font family).

## Syntax

```css
/* Keyword values */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* Global values */
text-rendering: inherit;
text-rendering: initial;
text-rendering: revert;
text-rendering: revert-layer;
text-rendering: unset;
```

### Values

- `auto` {{Non-standard_Inline}}
  - : The browser makes educated guesses about when to optimize for speed, legibility, and geometric precision while drawing text. For differences in how this value is interpreted by the browser, see the compatibility table.
- `optimizeSpeed`
  - : The browser emphasizes rendering speed over legibility and geometric precision when drawing text. It disables kerning and ligatures.
- `optimizeLegibility`
  - : The browser emphasizes legibility over rendering speed and geometric precision. This enables kerning and optional ligatures.
- `geometricPrecision` {{Non-standard_Inline}}

  - : The browser emphasizes geometric precision over rendering speed and legibility. Certain aspects of fonts — such as kerning — don't scale linearly. So this value can make text using those fonts look good.

    In SVG, when text is scaled up or down, browsers calculate the final size of the text (which is determined by the specified font size and the applied scale) and request a font of that computed size from the platform's font system. But if you request a font size of, say, 9 with a scale of 140%, the resulting font size of 12.6 doesn't explicitly exist in the font system, so the browser rounds the font size to 12 instead. This results in stair-step scaling of text.

    But the `geometricPrecision` property — when fully supported by the rendering engine — lets you scale your text fluidly. For large scale factors, you might see less-than-beautiful text rendering, but the size is what you would expect—neither rounded up nor down to the nearest font size supported by Windows or Linux.

    > **Note:** WebKit precisely applies the specified value, but Gecko treats the value the same as `optimizeLegibility`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Automatic application of optimizeLegibility

This demonstrates how `optimizeLegibility` is used by browsers automatically when the `font-size` is smaller than `20px`.

#### HTML

```html
<p class="small">LYoWAT - ff fi fl ffl</p>
<p class="big">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
.small {
  font:
    19.9px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
.big {
  font:
    20px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
```

#### Result

{{ EmbedLiveSample('Automatic_application_of_optimizeLegibility') }}

### optimizeSpeed vs. optimizeLegibility

This example shows the difference between the appearance of `optimizeSpeed` and `optimizeLegibility` (in your browser; other browsers may vary).

#### HTML

```html
<p class="speed">LYoWAT - ff fi fl ffl</p>
<p class="legibility">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
p {
  font:
    1.5em "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}

.speed {
  text-rendering: optimizeSpeed;
}
.legibility {
  text-rendering: optimizeLegibility;
}
```

#### Result

{{ EmbedLiveSample('optimizeSpeed_vs_optimizeLegibility') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drawing text in a `<canvas>`](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Text Decoration](/en-US/docs/Web/CSS/CSS_text_decoration) CSS module
- Related CSS properties

  - [`text-decoration`](/en-US/docs/Web/CSS/text-decoration) (and its longhand properties, such as [`text-decoration-line`](/en-US/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](/en-US/docs/Web/CSS/text-decoration-style), and [`text-decoration-thickness`](/en-US/docs/Web/CSS/text-decoration-thickness))
  - [`text-emphasis`](/en-US/docs/Web/CSS/text-emphasis) (and its longhand properties, including [`text-emphasis-color`](/en-US/docs/Web/CSS/text-emphasis-color), [`text-emphasis-position`](/en-US/docs/Web/CSS/text-emphasis-position), and [`text-emphasis-style`](/en-US/docs/Web/CSS/text-emphasis-style))
  - [`text-shadow`](/en-US/docs/Web/CSS/text-shadow)
  - [`text-transform`](/en-US/docs/Web/CSS/text-transform)

- The [SVG](/en-US/docs/Web/SVG) {{SVGAttr("text-rendering")}} attribute
- [SVG and CSS](/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)
