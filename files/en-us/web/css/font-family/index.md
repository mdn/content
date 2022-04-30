---
title: font-family
slug: Web/CSS/font-family
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-family
---
{{CSSRef}}

The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Values are separated by commas to indicate that they are alternatives. The browser will select the first font in the list that is installed or that can be downloaded using a {{CSSxRef("@font-face")}} at-rule.

It is often convenient to use the shorthand property {{CSSxRef("font")}} to set `font-size` and other font related properties all at once.

You should always include at least one generic family name in a `font-family` list, since there's no guarantee that any given font is available. This lets the browser select an acceptable fallback font when necessary.

The `font-family` property specifies a list of fonts, from highest priority to lowest. Font selection _does not_ stop at the first font in the list that is on the user's system. Rather, font selection is done _one character at a time_, so that if an available font does not have a glyph for a needed character, the latter fonts are tried. When a font is only available in some [styles](/en-US/docs/Web/CSS/font-style), [variants](/en-US/docs/Web/CSS/font-variant), or [sizes](/en-US/docs/Web/CSS/font-size), those properties may also influence which font family is chosen.

## Syntax

```css
/* A font family name and a generic family name */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: ui-serif;
font-family: ui-sans-serif;
font-family: ui-monospace;
font-family: ui-rounded;
font-family: emoji;
font-family: math;
font-family: fangsong;

/* Global values */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: revert-layer;
font-family: unset;
```

The `font-family` property lists one or more font families, separated by commas. Each font family is specified as either a `<family-name>` or a `<generic-name>` value.

The example below lists two font families, the first with a `<family-name>` and the second with a `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Values

- `<family-name>`
  - : The name of a font family. For example, "Times" and "Helvetica" are font families. Font family names containing whitespace should be quoted. For example: "Comic Sans MS".
- `<generic-name>`

  - : Generic font families are a fallback mechanism, a means of preserving some of the style sheet author's intent when none of the specified fonts are available. Generic family names are keywords and must not be quoted. A generic font family should be the last item in the list of font family names. The following keywords are defined:

    - `serif`

      - : Glyphs have finishing strokes, flared or tapering ends, or have actual serifed endings.

        For example: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`

      - : Glyphs have stroke endings that are plain.

        For example: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : All glyphs have the same fixed width.

        For example: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`

      - : Glyphs in cursive fonts generally have either joining strokes or other cursive characteristics beyond those of italic typefaces. The glyphs are partially or completely connected, and the result looks more like handwritten pen or brush writing than printed letter work.

        For example: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`

      - : Fantasy fonts are primarily decorative fonts that contain playful representations of characters.

        For example: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Glyphs are taken from the default user interface font on a given platform. Because typographic traditions vary widely across the world, this generic is provided for typefaces that don't map cleanly into the other generics.
    - `ui-serif`
      - : The default user interface serif font.
    - `ui-sans-serif`
      - : The default user interface sans-serif font.
    - `ui-monospace`
      - : The default user interface monospace font.
    - `ui-rounded`
      - : The default user interface font that has rounded features.
    - `math`
      - : This is for the particular stylistic concerns of representing mathematics: superscript and subscript, brackets that cross several lines, nesting expressions, and double struck glyphs with distinct meanings.
    - `emoji`
      - : Fonts that are specifically designed to render emoji.
    - `fangsong`
      - : A particular style of Chinese characters that are between serif-style Song and cursive-style Kai forms. This style is often used for government documents.

### Valid family names

Font family names must either be given quoted as strings, or unquoted as a sequence of one or more identifiers. This means that punctuation characters and digits at the start of each token must be escaped in unquoted font family names.

It is a **good practice** to quote font family names that contain white space, digits, or punctuation characters other than hyphens.

For example, the following declarations are valid:

```css example-good
font-family: "Goudy Bookletter 1911", sans-serif;
```

The following declarations are **invalid**:

```css example-bad
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

The following example is technically **valid** but is not recommended:

```css
font-family: Gill Sans Extrabold, sans-serif;
```

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Some common font families

```css
.serif {
  font-family: Times, "Times New Roman", Georgia, serif;
}

.sansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.monospace {
  font-family: "Lucida Console", Courier, monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.emoji {
  font-family: emoji;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```html hidden
<div class="serif">
  This is an example of a serif font.
</div>

<div class="sansserif">
  This is an example of a sans-serif font.
</div>

<div class="monospace">
  This is an example of a monospace font.
</div>

<div class="cursive">
  This is an example of a cursive font.
</div>

<div class="fantasy">
  This is an example of a fantasy font.
</div>

<div class="math">
  This is an example of a math font.
</div>

<div class="emoji">
  This is an example of an emoji font.
</div>

<div class="fangsong">
  This is an example of a fangsong font.
</div>
```

{{EmbedLiveSample("Some_common_font_families", 600, 220)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
