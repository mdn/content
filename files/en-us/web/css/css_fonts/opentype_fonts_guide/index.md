---
title: OpenType font features guide
slug: Web/CSS/CSS_Fonts/OpenType_fonts_guide
tags:
  - CSS
  - Fonts
  - Guide
  - Text
  - font-feature-settings
  - opentype
---
{{CSSRef}}

Font features or variants refer to different glyphs or character styles contained within an OpenType font. These include things like ligatures (special glyphs that combine characters like 'fi' or 'ffl'), kerning (adjustments to the spacing between specific letterform pairings), fractions, numeral styles, and several others. These are all referred to as OpenType Features, and are made available to use on the web via specific properties and low-level control properties — {{cssxref("font-feature-settings")}}. This article provides you with all you need to know about using OpenType font features in CSS.

Some fonts will have one or more of these features enabled by default (kerning and default ligatures are common examples), while others are left to the designer or developer to choose to enable in specific scenarios.

In addition to broad feature sets like ligatures or lining figures (numerals that line up evenly as opposed to 'oldstyle', which look more like lower-case letters), there are also very specific ones such as stylistic sets (which might include several specific variants of glyphs meant to be used together), alternates (which might be one or more variants of the letter 'a'), or even language-specific alterations for East Asian languages. In the latter case, these alterations are actually necessary to properly express the language, so they go beyond the more stylistic preference of most other OpenType features.

> **Warning:** There are many CSS attributes defined to leverage font features, but unfortunately many are not fully implemented. They are all defined and shown here, but many will only work using the lower-level {{cssxref("font-feature-settings")}} property. It's possible to write CSS to work both ways but this can become cumbersome. The issue with using `font-feature-settings` for everything is that every time you want to change one of the individual features, you have to redefine the entire string (similar to manipulating variable fonts with {{cssxref("font-variation-settings")}}).

## Discovering availability of features in fonts

This is sometimes the trickiest thing to work out if you don't have any documentation that came with the fonts (many type designers and foundries will provide sample pages and CSS just for this very reason). But there are some sites that make it easier to figure out. You can visit [wakamaifondue.com](https://wakamaifondue.com), drop your font file on the circle where instructed, and in a few moments you'll have a full report on all the capabilities and features of your font. [Axis-praxis.org](https://www.axis-praxis.org/) also offers a similar capability, with the ability to click on the features to turn them on or off in a given text block.

## Why you would use them?

Given that these features take a bit of work to discover and use, it may seem a fair question to ask why one would bother to use them. The answer lies in the specific features that will make a site more useful, readable, and polished:

- **Ligatures** like 'ff' or 'fi' make letter spacing and reading more even and smooth.
- **Fractions** can make home improvement and recipe sites much easier to read and understand.
- **Numerals** within paragraphs of text set as 'oldstyle' sit more comfortably between lower-case letters, and likewise setting them as 'tabular numbers' will make them line up better when setting a list of costs in a table say. 'lining' figures on the other hand sit more uniformly on their own or in front of capitalized words.

While none of these features individually will render a site useless due to their absence, each of them in turn can make a site easier to use and more memorable for its attention to detail.

> OpenType features are like secret compartments in fonts. Unlock them and you'll find ways to make fonts look and behave differently in subtle and dramatic ways. Not all OpenType features are appropriate to use all of the time, but some features are critical for great typography. _-- Tim Brown, Head of Typography at Adobe_.

### Sometimes it's substance, not just style

There are some cases — like with {{cssxref("font-variant-east-asian")}} — that OpenType features are directly tied to using different forms of certain glyphs, which can impact meaning and readability. In cases such as these, it's more than just a nicety, but rather an integral part of the content itself.

## The font features

There are a number of different features to consider. They are grouped and explained here according to the main attributes and options covered in the W3C specifications.

> **Note:** The examples below show the properties and some example combinations, along with the lower-level syntax equivalents. They may not match exactly due to browser implementation inconsistencies, but in many cases, the first example will match the second. The typefaces shown are Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script, and Kokoro (all available and free to use, most are on Google Fonts and other services).

### Kerning

Associated CSS property: {{cssxref("font-kerning")}}

This refers to the spacing between specific glyph pairings. This is generally on by default (as recommended by the OpenType specification). It should be noted that if {{cssxref("letter-spacing")}} is also set on your text, that is applied after kerning.

{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}

### Alternates

Associated CSS property: {{cssxref("font-variant-alternates")}}

Fonts can supply a number of different alternatives for various glyphs, such as different styles of lower case 'a' or more or less elaborate swashes in a script typeface. This property can activate an entire set of alternates or just a specific one, depending on the values supplied. The example below is showing several different aspects of working with alternate characters. Fonts with alternate glyphs can make them available across the board or individually in separate stylistic sets, or even individual characters. In this example you can see two different typefaces, and the introduction of the {{cssxref("@font-feature-values")}} at-rule. This is used to define shortcuts or named options that can be defined per font family. This way you can create a named option that applies to only a single font, or one that is shared and can be applied more generally

{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}}

In this case, `@stylistic(alternates)` will show all the alternate characters for either font). Applying this to just the word 'My' alters the way the 'M' renders, and applying `@styleset(alt-a)` only changes the lower case 'a'.

Try changing the line

```css
font-variant-alternates: styleset(alt-a);
```

to

```css
font-variant-alternates: styleset(alt-g);
```

and notice that the lower case 'a' reverts to its regular form and the lower case 'g's changes instead.

#### More about alternates

- <https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates>
- [https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates](/en-US/docs/Web/CSS/font-variant-alternates)

### Ligatures

Associated CSS property: {{cssxref("font-variant-ligatures")}}

Ligatures are glyphs that replace two or more separate glyphs in order to represent them more smoothly (from a spacing or aesthetic perspective). Some of the most common are letters like 'fi', 'fl', or 'ffl' — but there are many other possibilities. There are the most frequent ones (referred to as common ligatures), and there are also more specialized categories like 'discretionary ligatures', 'historical ligatures', and 'contextual alternates'. While these last ones are not technically ligatures, they are generally similar in that they replace specific combinations of letters when they appear together.

While more common in script typefaces, in the below example they are used to create arrows:

{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}

### Position

Associated CSS property: {{cssxref("font-variant-position")}}

Position variants are used to enable typographic superscript and subscript glyphs. These are designed to work with the surrounding text without altering the baseline or line spacing. This is especially useful with the {{htmlelement("sub")}} or {{htmlelement("sup")}} elements.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}

### Capitals

Associated CSS property: {{cssxref("font-variant-caps")}}

One of the more common use cases for OpenType features is proper small caps. These are capital letters sized to fit better amongst lower case letters and are generally used for acronyms and abbreviations.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}

### Numerals

Associated CSS property: {{cssxref("font-variant-numeric")}}

There are several different styles of numerals commonly included in fonts:

- 'Lining' figures are all the same height and on the same baseline.
- 'Oldstyle' figures are mixed height and designed to have the appearance of ascenders and descenders like other lower case letters. These are designed to be used inline with a copy so the numerals visually blend with the surrounding glyphs in a similar fashion to small caps.

There is also the notion of spacing. Proportional spacing is the normal setting, whereas tabular spacing lines up numerals evenly regardless of character width, making it more appropriate for lining up tables of numbers in financial tables.

There are two types of fractions supported through this property:

- Diagonal slashed fractions.
- Vertically stacked fractions.

Ordinals are also supported (such as '1st' or '3rd'), as is a slashed zero if present in the font.

#### Lining and old-style figures

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}

#### Fractions, ordinals, and slashed zero

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}

### East Asian

Associated CSS property: {{cssxref("font-variant-east-asian")}}

This allows access to various alternate forms of glyphs within a font. The example below shows a string of glyphs with only the OpenType set 'jis78' enabled. Uncheck the box below and you'll see more characters displayed.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}

> **Note:** these glyphs were copied out of a font sample and are not intended as prose.

### Font variant shorthand

The {{Cssxref("font-variant")}} property is the shorthand syntax for defining all of the above. Setting a value of `normal` resets all properties to their initial value. Setting a value of `none` sets `font-variant-ligatures` to none and all other properties to their initial value. (Meaning that if kerning is on by default, it will still be on even with a value of `none` being supplied here.)

{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}

## Font feature settings

{{cssxref("font-feature-settings")}} is the 'low level syntax' that allows explicit access to every named available OpenType feature. This gives a lot of control but has some disadvantages in how it impacts inheritance and — as mentioned above — if you wish to change one setting, you have to redeclare the entire string (unless you're using [CSS custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties) to set the values). Because of this, it's best to use the standard properties shown above wherever possible.

There are a huge number of possible features. You can see examples of a number of them above, and there are several resources available for finding more of them.

The general syntax looks like this:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

According to the specification you can either supply just the 4-character feature code or supply a 1 following the code (for enabling that feature) or a 0 (zero) to disable it. This is helpful if you have a feature like ligatures enabled by default but you would like to turn them off like so:

```css
.no-ligatures {
  font-feature-settings: "liga" 0, "dlig" 0;
}
```

#### More on font-feature-settings codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (can't vouch for the truth of the name, but it's pretty big)
- [A list of OpenType features on Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Using CSS feature detection for implementation

Since not all properties are evenly implemented, it's good practice to set up your CSS using feature detection to utilize the correct properties, with {{cssxref("font-feature-settings")}} as the fallback.

For example, small caps can be set several ways, but if you want to ensure that no matter what the underlying capitalization is that you end up with everything in small caps, it requires 2 settings with `font-feature-settings` versus a single property value using {{cssxref("font-variant-caps")}}.

```css
.small-caps {
   font-feature-settings: "smcp", "c2sc";
}

@supports (font-variant-caps: all-small-caps) {
   .small-caps {
       font-feature-settings: normal;
       font-variant-caps: all-small-caps;
   }
}
```

## See also

### Demos of CSS OpenType features in CSS

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Web font analysis tools

- [Wakamai Fondue](https://wakamaifondue.com)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C Specifications:

- [Font Feature Properties in CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives in CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)

### Other resources

- [Using OpenType features](https://helpx.adobe.com/fonts/using/use-open-type-features.html) by Tim Brown, Head of Typography, Adobe
- [Adobe's Syntax for OpenType features in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
