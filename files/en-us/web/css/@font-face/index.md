---
title: "@font-face"
slug: Web/CSS/@font-face
page-type: css-at-rule
tags:
  - "@font-face"
  - At-rule
  - CSS
  - CSS Fonts
  - Fonts
  - Nick Names
  - Reference
  - typography
browser-compat: css.at-rules.font-face
---

{{CSSRef}}

The **`@font-face`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) specifies a custom font with which to display text; the font can be loaded from either a remote server or a locally-installed font on the user's own computer.

## Syntax

```css
@font-face {
  font-family: "Trickster";
  src: local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1), url("trickster-outline.otf")
      format("opentype"), url("trickster-outline.woff") format("woff");
}
```

### Descriptors

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : Defines the ascent metric for the font.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Defines the descent metric for the font.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Determines how a font face is displayed based on whether and when it is downloaded and ready to use.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Specifies a name that will be used as the font face value for font properties.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : A {{cssxref("font-stretch")}} value. Accepts two values to specify a range that is supported by a font-face, for example `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : A {{cssxref("font-style")}} value. Accepts two values to specify a range that is supported by a font-face, for example `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}

  - : A {{cssxref("font-weight")}} value. Accepts two values to specify a range that is supported by a font-face, for example `font-weight: 100 400;`

    > **Note:** The font-variant descriptor was removed from the specification in 2018. The {{cssxref("font-variant")}} value property is supported, but there is no descriptor equivalent.

- {{cssxref("font-feature-settings", "font-feature-settings")}}
  - : Allows control over advanced typographic features in OpenType fonts.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Allows low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features to vary, along with their variation values.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Defines the line gap metric for the font.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.
- {{cssxref("@font-face/src", "src")}}

  - : Specifies font resources. A comma-separated list representing the resource fallback order, each resource specified by a `url()` or `local()`. If the previous resource is loaded successfully, the latter resources will not be used. The `url()` can be followed by `format()` and `tech()`, like this:

    ```css
    src: local("Trickster"),
      url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1), url("trickster-outline.otf")
        format("opentype"), url("trickster-outline.woff") format("woff");
    ```

    `url()`: Specifies the URL of a font file, like any other `url()` in CSS. If the font file is a container for multiple fonts, a fragment identifier is included to indicate which sub-font should be used, as follows:

    ```css
    src: url(collection.otc#WhichFont); /* WhichFont is the PostScript name of a font in the font file */
    src: url(fonts.svg#WhichFont); /* WhichFont is the element id of a font in the SVG Font file */
    ```

    `local()`: Specifies the font name should the font be available on the user's device. Quoting the font name is optional.

    `format()`: **Optional**. Specifies the font format. If the value is not supported or invalid, the browser may not download the resource, potentially saving bandwidth. If omitted, the browser will always download the resource and then detect the format. The preferred value type is a _keyword_, which can also be given as a _string_ (within quotes) for backward compatibility reasons.

    The following table shows the valid values and their corresponding font formats. There are a few other possible values, see next paragraph.

    | Keyword             | Font Format           | Common extensions |
    | ------------------- | --------------------- | ----------------- |
    | `woff2`             | WOFF 2.0              | .woff2            |
    | `woff`              | WOFF 1.0              | .woff             |
    | `opentype`          | OpenType              | .otf, .ttf        |
    | `truetype`          | TrueType              | .ttf              |
    | `collection`        | OpenType Collection   | .otc, .ttc        |
    | `embedded-opentype` | Embedded OpenType     | .eot              |
    | `svg`               | SVG Font (deprecated) | .svg, .svgz       |

    > **Note:** The values `opentype` and `truetype` are completely equivalent, regardless of whether the font file uses cubic bezier curves (within CFF/CFF2 table) or quadratic bezier curves (within glyf table).

    `tech()`: **Optional**. Not yet widely supported. Value is a _keyword_, support: `variations`, `palettes`, `incremental`, `features-opentype`, `features-aat`, `features-graphite`, `color-COLRv0`, `color-COLRv1`, `color-SVG`, `color-sbix`, `color-CBDT`.

    The following table shows several old unnormalized `format()` values and their new equivalent syntax:

    | Old syntax                      | Equivalent syntax                   |
    | ------------------------------- | ----------------------------------- |
    | `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
    | `format("woff-variations")`     | `format(woff) tech(variations)`     |
    | `format("opentype-variations")` | `format(opentype) tech(variations)` |
    | `format("truetype-variations")` | `format(truetype) tech(variations)` |

    > **Note:** `format(svg)` stands for [SVG fonts](/en-US/docs/Web/SVG/Tutorial/SVG_fonts), and `tech(color-SVG)` stands for [OpenType fonts with SVG table](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (also called OpenType-SVG color fonts), which are completely different.

- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : The range of Unicode code points to be used from the font.

## Description

It's common to use both `url()` and `local()` together, so that the user's installed copy of the font is used if available, falling back to downloading a copy of the font if it's not found on the user's device.

If the `local()` function is provided, specifying a font name to look for on the user's device, and if the {{Glossary("user agent")}} finds a match, that local font is used. Otherwise, the font resource specified using the `url()` function is downloaded and used.

Resources are attempted to be loaded in order, so usually `local()` should be written before `url()`. Also, `local()` is not just a helper for `url()`, they are equal and both are optional, a rule block containing only one or more `local()` without `url()` is possible.

By allowing authors to provide their own fonts, `@font-face` makes it possible to design content without being limited to the so-called "web-safe" fonts (that is, the fonts which are so common that they're considered to be universally available). The ability to specify the name of a locally-installed font to look for and use makes it possible to customize the font beyond the basics while making it possible to do so without relying on an Internet connection.

The `@font-face` at-rule may be used not only at the top level of a CSS, but also inside any [CSS conditional-group at-rule](/en-US/docs/Web/CSS/At-rule#conditional_group_rules).

### Font MIME Types

| Format                 | MIME type    |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Notes

- Web fonts are subject to the same domain restriction (font files must be on the same domain as the page using them), unless [HTTP access controls](/en-US/docs/Web/HTTP/CORS) are used to relax this restriction.
- `@font-face` cannot be declared within a CSS selector. For example, the following will not work:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## Formal syntax

{{csssyntax}}

## Examples

### Specifying a downloadable font

This example specifies a downloadable font to use, applying it to the entire body of the document:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Web Font Sample</title>
    <style media="screen, print">
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    </style>
  </head>
  <body>
    This is Bitstream Vera Serif Bold.
  </body>
</html>
```

The output of this example code looks like so:

{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', '100')}}

### Specifying local font alternatives

In this example, the user's local copy of "Helvetica Neue Bold" is used; if the user does not have that font installed (two different names are tried), then the downloadable font named "MgOpenModernaBold.ttf" is used instead:

```css
@font-face {
  font-family: "MyHelvetica";
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [About WOFF](/en-US/docs/Web/Guide/WOFF)
- [FontSquirrel @font-face generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Beautiful fonts with @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
