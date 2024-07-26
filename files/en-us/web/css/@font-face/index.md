---
title: "@font-face"
slug: Web/CSS/@font-face
page-type: css-at-rule
browser-compat: css.at-rules.font-face
---

{{CSSRef}}

The **`@font-face`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) specifies a custom font with which to display text; the font can be loaded from either a remote server or a locally-installed font on the user's own computer.

## Syntax

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff") format("woff");
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

- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Allows control over advanced typographic features in OpenType fonts.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Allows low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features to vary, along with their variation values.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Defines the line gap metric for the font.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.
- {{cssxref("@font-face/src", "src")}}
  - : Specifies references to font resources including hints about the font format and technology. It is required for the @font-face rule to be valid.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : The range of Unicode code points to be used from the font.

## Description

It's common to use both `url()` and `local()` together, so that the user's installed copy of the font is used if available, falling back to downloading a copy of the font if it's not found on the user's device.

If the `local()` function is provided, specifying a font name to look for on the user's device, and if the {{Glossary("user agent")}} finds a match, that local font is used. Otherwise, the font resource specified using the `url()` function is downloaded and used.

Browsers attempt to load resources in their list declaration order, so usually `local()` should be written before `url()`. Both functions are optional, so a rule block containing only one or more `local()` without `url()` is possible.
If a more specific fonts with `format()` or `tech()` values are desired, these should be listed _before_ versions that don't have these values, as the less-specific variant would otherwise be tried and used first.

By allowing authors to provide their own fonts, `@font-face` makes it possible to design content without being limited to the so-called "web-safe" fonts (that is, the fonts which are so common that they're considered to be universally available). The ability to specify the name of a locally-installed font to look for and use makes it possible to customize the font beyond the basics while making it possible to do so without relying on an internet connection.

> **Note:** Fallback strategies for loading fonts on older browsers are described in the [`src` descriptor page](/en-US/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers).

The `@font-face` at-rule may be used not only at the top level of a CSS, but also inside any [CSS conditional-group at-rule](/en-US/docs/Web/CSS/CSS_conditional_rules#at-rules).

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
<!doctype html>
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

In this example, the user's local copy of "Helvetica Neue Bold" is used; if the user does not have that font installed (both the full font name and the Postscript name are tried), then the downloadable font named "MgOpenModernaBold.ttf" is used instead:

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

- [About WOFF](/en-US/docs/Web/CSS/CSS_fonts/WOFF)
- [FontSquirrel @font-face generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Beautiful fonts with @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
