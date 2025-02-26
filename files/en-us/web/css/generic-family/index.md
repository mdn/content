---
title: <generic-family>
slug: Web/CSS/generic-family
page-type: css-type
spec-urls: https://drafts.csswg.org/css-fonts/#generic-font-families
---

{{CSSRef}}

The **`<generic-family>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) represents the keyword values for generic font families used in the {{cssxref("font")}} shorthand and {{cssxref("font-family")}} longhand properties. The `<generic-family>` represents one or more locally-installed fonts belonging to that category of fonts.

## Syntax

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## Values

The `<generic-family>` {{glossary("enumerated")}} type is specified using one of the values listed below:

- `serif`

  - : A serif is a small line or stroke attached to the end of a larger stroke in a letter. In serif fonts, glyphs have finishing strokes, flared or tapering ends. Examples include Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, and URW Palladio.

- `sans-serif`

  - : A font without serifs; glyphs have plain stroke endings, without ornamentation. Example sans-serif fonts include Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, and Nimbus Sans L.

- `monospace`

  - : All glyphs have the same fixed width. Example monospace fonts include Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, and Lucida Console.

- `cursive`

  - : Glyphs in cursive fonts generally have either joining strokes or other cursive characteristics beyond those of italic typefaces. The glyphs are partially or completely connected, and the result looks more like handwritten pen or brush writing than printed letter work. Example cursive fonts include Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, and Apple Chancery.

- `fantasy`

  - : Fantasy fonts are primarily decorative fonts that contain playful representations of characters. Example fantasy fonts include Papyrus, Herculanum, Party LET, Curlz MT, and Harrington.

- `system-ui`

  - : Glyphs are taken from the default user interface font on a given platform. Because typographic traditions vary widely across the world, this generic family is provided for typefaces that don't map cleanly into the others.

- `ui-serif`

  - : The default user interface serif font. See the definition of `serif` above.

- `ui-sans-serif`

  - : The default user interface sans-serif font. See the definition of `sans-serif` above.

- `ui-monospace`

  - : The default user interface monospace font. See the definition of `monospace` above.

- `ui-rounded`

  - : The default user interface font that has rounded features.

- `math`

  - : Fonts for displaying mathematical expressions, for example superscript and subscript, brackets that cross several lines, nesting expressions, and double-struck glyphs with distinct meanings.

- `emoji`

  - : Fonts that are specifically designed to render emoji.

- `fangsong`
  - : A particular style of Chinese characters that are between serif-style Song and cursive-style Kai forms. This style is often used for government documents.

## Examples

This example demos several of the `<generic-family>` enumerated values for the {{cssxref("font-family")}} property.

### HTML

```html
<ul>
  <li class="serif">serif</li>
  <li class="sans-serif">sans-serif</li>
  <li class="monospace">monospace</li>
  <li class="cursive">cursive</li>
  <li class="fantasy">fantasy</li>
  <li class="system-ui">system-ui</li>
</ul>
```

### CSS

```css
ul {
  font-size: 1.5rem;
  line-height: 2;
}
.serif {
  font-family: serif;
}
.sans-serif {
  font-family: sans-serif;
}
.monospace {
  font-family: monospace;
}
.cursive {
  font-family: cursive;
}
.fantasy {
  font-family: fantasy;
}
.system-ui {
  font-family: system-ui;
}
```

### Result

{{EmbedLiveSample("Examples", "500", "355")}}

## Specifications

{{Specifications}}

## See also

- Properties that use this data type: {{cssxref("font-family")}} and {{cssxref("font")}}
- [CSS fonts module](/en-US/docs/Web/CSS/CSS_fonts)
