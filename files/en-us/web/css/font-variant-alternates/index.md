---
title: font-variant-alternates
slug: Web/CSS/font-variant-alternates
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-variant-alternates
---
{{CSSRef}}

The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in {{cssxref("@font-feature-values")}}.

```css
/* Keyword values */
font-variant-alternates: normal;
font-variant-alternates: historical-forms;

/* Functional notation values */
font-variant-alternates: stylistic(user-defined-ident);
font-variant-alternates: styleset(user-defined-ident);
font-variant-alternates: character-variant(user-defined-ident);
font-variant-alternates: swash(user-defined-ident);
font-variant-alternates: ornaments(user-defined-ident);
font-variant-alternates: annotation(user-defined-ident);
font-variant-alternates: swash(ident1) annotation(ident2);

/* Global values */
font-variant-alternates: inherit;
font-variant-alternates: initial;
font-variant-alternates: revert;
font-variant-alternates: revert-layer;
font-variant-alternates: unset;
```

The {{cssxref("@font-feature-values")}} at-rule can define names for alternative glyph functions (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` or `annotation`), associating the name with OpenType parameters. This property allows those human-readable names (defined in {{cssxref("@font-feature-values")}}) in the stylesheet.

## Syntax

This property may take one of two forms:

- either the keyword `normal`
- or one or more of the other keywords and functions listed below, space-separated, in any order.

### Values

- `normal`
  - : This keyword deactivates alternate glyphs.
- `historical-forms`
  - : This keyword enables historical forms — glyphs that were common in the past but not today. It corresponds to the OpenType value `hist`.
- `stylistic()`
  - : This function enables stylistic alternates for individual characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `salt`, like `salt 2`.
- `styleset()`
  - : This function enables stylistic alternatives for sets of characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ssXY`, like `ss02`.
- `character-variant()`
  - : This function enables specific stylistic alternatives for characters. It is similar to `styleset()`, but doesn't create coherent glyphs for a set of characters; individual characters will have independent and not necessarily coherent styles. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `cvXY`, like `cv02`.
- `swash()`
  - : This function enables [swash](https://en.wikipedia.org/wiki/Swash_%28typography%29) glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType values `swsh` and `cswh`, like `swsh 2` and `cswh 2`.
- `ornaments()`

  - : This function enables ornaments, like [fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) and other dingbat glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ornm`, like `ornm 2`.

    > **Note:** In order to preserve text semantics, font designers should include ornaments that don't match Unicode dingbat characters as ornamental variants of the bullet character (U+2022). Be aware that some existing fonts don't follow this advice.

- `annotation()`
  - : This function enables annotations, like circled digits or inverted characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `nalt`, like `nalt 2`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Enabling swash glyphs

#### HTML

```html
<p>Firefox rocks!</p>
<p class="variant">Firefox rocks!</p>
```

#### CSS

```css
@font-feature-values "Leitura Display Swashes" {
    @swash { fancy: 1 }
}

p {
  font-size: 1.5rem;
}

.variant {
  font-family: Leitura Display Swashes;
  font-variant-alternates: swash(fancy);
}
```

#### Result

> **Note:** You need to install the OpenType font _Leitura Display Swashes_ for this example to work. You can find a few free versions for testing purposes, for example from [fontsgeek.com](https://fontsgeek.com/fonts/Leitura-Display-Swashes).

{{ EmbedLiveSample('Enabling swash glyphs') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("@font-feature-values")}}
