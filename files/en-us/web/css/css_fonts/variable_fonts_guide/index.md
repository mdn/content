---
title: Variable fonts guide
slug: Web/CSS/CSS_Fonts/Variable_Fonts_Guide
tags:
  - CSS
  - Fonts
  - Guide
  - Text
  - variable fonts
  - web fonts
---
{{CSSRef}}

**Variable fonts** are an evolution of the OpenType font specification that enables many different variations of a typeface to be incorporated into a single file, rather than having a separate font file for every width, weight, or style. They let you access all the variations contained in a given font file via CSS and a single {{cssxref("@font-face")}} reference. This article will give you all you need to know to get you started using variable fonts.

> **Note:** To use variable fonts on your operating system, you need to make sure that it is up to date. For example, Linux OSes need the latest Linux Freetype version, and macOS prior to High Sierra (10.13) does not support variable fonts. If your operating system is not up to date, you will not be able to use variable fonts in web pages or the Firefox Developer Tools.

## Variable Fonts: what they are, and how they differ

To better understand what's different about variable fonts, it is worth reviewing what non-variable ones are like and how they compare.

### Standard (or Static) fonts

In the past, a typeface would be produced as several individual fonts, and each font would represent one specific width/weight/style combination. So you would have separate files for 'Roboto Regular', 'Roboto Bold', and 'Roboto Bold Italic' — meaning that you could end up with 20 or 30 different font files to represent a complete typeface (it could be several times that for a large typeface that has different widths as well).

In such a scenario, to use a typeface for typical use on a site for body copy you would need at least four files: regular, italic, bold, and bold italic. If you wanted to add more weights, like a lighter one for captions or a heavier one for extra emphasis, that would mean several more files. This results in more HTTP requests, and more data being downloaded (usually around 20k or more per file).

### Variable fonts

With a variable font, all of those permutations can be contained in a single file. That file would be larger than a single font, but in most cases smaller or about the same size as the 4 you might load for body copy. The advantage in choosing the variable font is that you have access to the entire range of weights, widths, and styles available, rather than being constrained to only the few that you previously would have loaded separately.

This allows for common typographic techniques such as setting different size headings in different weights for better readability at each size or using a slightly narrower width for data-dense displays. For comparison, it is typical in a typographic system for a magazine to use 10–15 or more different weight and width combinations throughout the publication — giving a much wider range of styles than currently typical on the web (or indeed practical for performance reasons alone).

#### A note about font families, weights, and variants

You might notice that we have been talking about having a specific font file for every weight and style (i.e. bold and italic and bold italic), rather than relying upon the browser to synthesize them. The reason for this is that most typefaces have very specific designs for bolder weights and italics that often include completely different characters (lower-case 'a' and 'g's are often quite different in italics, for example). To most accurately reflect the typeface design and avoid differences between browsers and how they may or may not synthesize the different styles, it's more accurate to load the specific font files where needed when using a non-variable font.

You may also find that some variable fonts come split into two files: one for uprights and all their variations, and one containing the italic variations. This is sometimes done to reduce the overall file size in cases where the italics aren't needed or used. In all cases, it is still possible to link them with a common {{cssxref("font-family")}} name so you can call them using the same `font-family` and appropriate {{cssxref("font-style")}}.

## Introducing the 'variation axis'

The heart of the new variable fonts format is the concept of an **axis of variation** describing the allowable range of that particular aspect of the typeface design. So the 'weight axis' describes how light or how bold the letterforms can be; the 'width axis' describes how narrow or how wide they can be; the 'italic axis' describes if italic letterforms are present and can be turned on or off accordingly, etc. Note that an axis can be a range or a binary choice. Weight might range from 1–999, whereas italic might be 0 or 1 (off or on).

As defined in the specification, there are two kinds of axes: **registered** and **custom**:

- Registered axes are those that are most frequently encountered, and common enough that the authors of the specification felt it was worth standardizing. The five currently registered axes are weight, width, slant, italic, and optical size. The W3C has undertaken to map them to existing CSS attributes, and in one case introduced a new one, which you'll see below.
- Custom axes are limitless: the typeface designer can define and scope any axis they like and are just required to give it a four-letter **tag** to identify it within the font file format itself. You can use these four-letter tags in CSS to specify a point along that axis of variation, as will be shown in the code examples below.

### Registered axes and existing CSS attributes

In this section we'll demonstrate the five registered axes defined with examples and the corresponding CSS. Where possible, both the standard and lower-level syntax are included. The lower-level syntax ({{cssxref("font-variation-settings")}}) was the first mechanism implemented to test the early implementations of variable font support and is necessary to utilize new or custom axes beyond the five registered ones. However, the W3C's intent was for this syntax not to be used when other attributes are available. Therefore wherever possible, the appropriate property should be used, with the lower-level syntax of `font-variation-settings` only being used to set values or axes not available otherwise.

#### Notes

1. When using `font-variation-settings` it is important to note that axis names are case-sensitive. The registered axis names must be in lower case, and custom axes must be in upper case. For example:

    ```css
    font-variation-settings: 'wght' 375, 'GRAD' 88;
    ```

    `wght` (weight) is a registered axis, and `GRAD` (grade) is a custom one.

2. If you have set values using `font-variation-settings` and want to change one of those values, you must redeclare all of them (in the same way as when you set OpenType font features using {{cssxref("font-feature-settings")}}). You can work around this limitation by using [CSS Custom Properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties) (CSS variables) for the individual values, and modifying the value of an individual custom property. Example code follows at the end of the guide.

### Weight

Weight (represented by the `wght` tag) defines the design axis of how thin or thick (light or heavy, in typical typographic terms) the strokes of the letterforms can be. For a long time in CSS there has existed the ability to specify this via the {{cssxref("font-weight")}} property, which takes numeric values ranging from 100 to 900 in increments of 100, and keywords like `normal` or `bold`, which are aliases for their corresponding numeric values (400 and 700 in this case). These are still applied when dealing with non-variable or variable fonts, but with variable ones, any number from 1 to 1000 is now valid.

It should be noted that at this point there is no way in the `@font-face` declaration to 'map' a specific point on the variation axis of a variable font to the keyword `bold` (or any other keyword). This can generally be resolved fairly easily, but does require an extra step in writing your CSS:

```css
font-weight: 375;

font-variation-settings: 'wght' 375;
```

The following live example's CSS can be edited to allow you to play with font-weight values.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Width

Width (represented by the `wdth` tag) defines the design axis of how narrow or wide (condensed or extended, in typographic terms) the letterforms can be. This is typically set in CSS using the {{cssxref("font-stretch")}} property, with values expressed as a percentage above or below 'normal' (100%), any number greater than 0 is technically valid—though it is far more likely that the range would fall closer to the 100% mark, such as 75%-125%. If a number value supplied is outside the range encoded in the font, the browser should render the font at the closest value allowed.

> **Note:** The % symbol is not used when utilizing `font-variation-settings`.

```css
font-stretch: 115%;

font-variation-settings: 'wdth' 115;
```

The following live example's CSS can be edited to allow you to play with font width values.

{{EmbedGHLiveSample("css-examples/variable-fonts/width.html", '100%', 520)}}

### Italic

The Italic (`ital`) axis works differently in that it is either on or off; there is no in-between. Italic designs often include dramatically different letterforms from their upright counterparts, so in the transition from upright to italic, several glyph (or character) substitutions usually occur. Italic and oblique are often used somewhat interchangeably, but in truth are quite different. Oblique is defined in this context with the term `slant` (see the below section), and a typeface would typically have one or the other, but not both.

In CSS, both italic and oblique are applied to text using the {{cssxref("font-style")}} property. Also note the introduction of `font-synthesis: none;` — which will prevent browsers from accidentally applying the variation axis and a synthesized italic. This can be used to prevent faux-bolding as well.

```css
font-style: italic;

font-variation-settings: 'ital' 1;

font-synthesis: none;
```

The following live example's CSS can be edited to allow you to play with font italics.

{{EmbedGHLiveSample("css-examples/variable-fonts/italic.html", '100%', 520)}}

### Slant

Slant (represented by the `slnt` tag), or as it's often referred to, 'oblique' — is different from true italics in that it changes the angle of the letterforms but doesn't perform any kind of character substitution. It is also variable, in that it is expressed as a numeric range. This allows the font to be varied anywhere along that axis. The allowed range is generally 0 (upright) to 20 degrees — any number value along that range can be supplied, so the font can be slanted just a tiny bit. However, any value from -90 to 90 degrees is valid.

> **Note:** The `deg` keyword is not used when utilizing `font-variation-settings`.

```css
font-style: oblique 14deg;

font-variation-settings: 'slnt' 14;
```

The following live example's CSS can be edited to allow you to play with font slant/oblique values.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}

### Optical size

This is something new to digital fonts and CSS, but is a centuries-old technique in designing and creating metal type. Optical sizing refers to the practice of varying the overall stroke thickness of letterforms based on physical size. If the size was very small (such as an equivalent to 10 or 12px), the characters would have an overall thicker stroke, and perhaps other small modifications to ensure that it would reproduce and be readable at a physically smaller size. Conversely, when a much larger size was being used (like 48 or 60px), there might be much greater variation in thick and thin stroke weights, showing the typeface design more in line with the original intent.

While this was originally done to compensate for the ink and paper printing process (very thin lines at small sizes often didn't print, giving the letterforms a broken appearance), it translates well to digital displays when compensating for screen quality and physical size rendering.

Optical size values are generally intended to be automatically applied corresponding to `font-size`, but can also be manipulated using the lower-level `font-variation-settings` syntax.

There is a new attribute, {{cssxref("font-optical-sizing")}}, created to support variable fonts in CSS. When using `font-optical-sizing`, the only allowed values are `auto` or `none` — so this attribute only allows for turning optical sizing on or off. However when using `font-variation-settings: 'opsz' <num>`, you can supply a numeric value. In most cases you would want to match the `font-size` (the physical size the type is being rendered) with the `opsz` value (which is how optical sizing is intended to be applied when using `auto`). The option to provide a specific value is provided so that should it be necessary to override the default — for legibility, aesthetic, or some other reason — a specific value can be applied.

```css
font-optical-sizing: auto;

font-variation-settings: 'opsz' 36;
```

The following live example's CSS can be edited to allow you to play with optical size values.

{{EmbedGHLiveSample("css-examples/variable-fonts/optical-sizing.html", '100%', 1020)}}

### Custom axes

Custom axes are just that: they can be any axis of design variation that the typeface designer imagines. There may be some that become fairly common — or even become registered — but only time will tell.

### Grade

Grade may become one of the more common custom axes as it has a known history in typeface design. The practice of designing different grades of a typeface was often done in reaction to intended use and printing technique. The term 'grade' refers to the relative weight or density of the typeface design, but differs from traditional 'weight' in that the physical space the text occupies does not change, so changing the text grade doesn't change the overall layout of the text or elements around it. This makes grade a useful axis of variation as it can be varied or animated without causing a reflow of the text itself.

```css
font-variation-settings: 'GRAD' 88;
```

The following live example's CSS can be edited to allow you to play with font grade values.

{{EmbedGHLiveSample("css-examples/variable-fonts/grade.html", '100%', 520)}}

### Using a variable font: @font-face changes

The syntax for loading variable fonts is very similar to any other web font, with a few notable differences, which are provided via upgrades to the traditional {{cssxref("@font-face")}} syntax now available in modern browsers.

The basic syntax is the same, but the font technology can be specified, and allowable ranges for descriptors like `font-weight` and `font-stretch` can be supplied, rather than named according to the font file being loaded.

#### Example for a standard upright (Roman) font:

```css
@font-face {
 font-family: 'MyVariableFontName';
 src: url('path/to/font/file/myvariablefont.woff2') format('woff2-variations');
 font-weight: 125 950;
 font-stretch: 75% 125%;
 font-style: normal;
}
```

#### Example for a font that includes both upright and italics:

```css
@font-face {
 font-family: 'MyVariableFontName';
 src: url('path/to/font/file/myvariablefont.woff2') format('woff2-variations');
 font-weight: 125 950;
 font-stretch: 75% 125%;
 font-style: oblique 0deg 20deg;
}
```

> **Note:** there is no set specific value for the upper-end degree measurement in this case; they indicate that there is an axis so the browser can know to render upright or italic (remember that italics are only on or off)

#### Example for a font that contains only italics and no upright characters:

```css
@font-face {
 font-family: 'MyVariableFontName';
 src: url('path/to/font/file/myvariablefont.woff2') format('woff2-variations');
 font-weight: 125 950;
 font-stretch: 75% 125%;
 font-style: italic;
}
```

#### Example for a font that contains an oblique (slant) axis:

```css
@font-face {
 font-family: 'MyVariableFontName';
 src: url('path/to/font/file/myvariablefont.woff2') format('woff2-variations');
 font-weight: 125 950;
 font-stretch: 75% 125%;
 font-style: oblique 0deg 12deg;
}
```

> **Note:** Not all browsers have implemented the full syntax for font format, so test carefully. All browsers that support variable fonts will still render them if you set the format to just the file format, rather than format-variations (i.e. `woff2` instead of `woff2-variations`), but it's best to use the proper syntax if possible.

> **Note:** Supplying value ranges for `font-weight`, `font-stretch`, and `font-style` will keep the browser from attempting to render an axis outside that range if you are using the appropriate attribute (i.e. `font-weight` or `font-stretch`), but will not block you from supplying an invalid value via `font-variation-settings`, so use with care.

## Working with older browsers

Variable font support can be checked with CSS Feature Queries (see {{cssxref("@supports")}}), so it's possible to use variable fonts in production and scope the CSS calling the variable fonts inside a feature query block.

```css
h1 {
 font-family: some-non-variable-font-family;
}

@supports (font-variation-settings: 'wdth' 115) {
 h1 {
    font-family: some-variable-font-family;
 }
}
```

## Sample pages

The following example pages show two different ways to structure your CSS. The first uses the standard attributes wherever possible. The second example uses CSS Custom Properties to set values for a `font-variation-settings` string and shows how you can more easily update single variable values by overriding a single variable rather than rewriting the whole string. Note the hover effect on the `h2`, which only alters the grade axis custom property value.

{{EmbedGHLiveSample("css-examples/variable-fonts/sample-page.html", '100%', 1220)}}

## Resources

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (editor's draft)
- [W3C GitHub issue queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations introduction](https://docs.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com) (a site that will tell you what your font can do via a simple drag-and-drop inspection interface)
- [Axis Praxis](https://www.axis-praxis.org) (the original variable fonts playground site)
- [V-Fonts.com](https://v-fonts.com) (a catalog of variable fonts and where to get them)
- [Font Playground](https://play.typedetail.com) (another playground for variable fonts with some very unique approaches to user interface)
