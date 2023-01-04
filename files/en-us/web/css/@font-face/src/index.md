---
title: src
slug: Web/CSS/@font-face/src
page-type: css-at-rule-descriptor
tags:
  - "@font-face"
  - At-rule descriptor
  - CSS
  - CSS Descriptor
  - CSS Fonts
  - CSS Property
  - Reference
browser-compat: css.at-rules.font-face.src
---

{{CSSRef}}

The **`src`** CSS descriptor of the {{cssxref("@font-face")}} rule specifies the resource containing font data. It is required for the `@font-face` rule to be valid.

## Syntax

```css
/* <url> values */
src: url(https://somewebsite.com/path/to/font.woff); /* Absolute URL */
src: url(path/to/font.woff); /* Relative URL */
src: url("path/to/font.woff"); /* Quoted URL */
src: url(path/to/svgFont.svg#example); /* Fragment identifying font */

/* <font-face-name> values */
src: local(font); /* Unquoted name */
src: local(some font); /* Name containing space */
src: local("font"); /* Quoted name */
src: local("some font"); /* Quoted name containing space */

/* <tech(<font-tech>)> values */
src: url(path/to/font.otf) tech(color-COLRv1);
src: url(path/to/font.otf) tech(color-SVG);

/* <format(<font-format>)> values */
src: url(path/to/font.woff) format("woff");
src: url(path/to/font.otf) format("opentype");

/* Multiple resources */
src: url(path/to/font.woff) format("woff"), url(path/to/font.otf) format("opentype");

/* Multiple resources with font format and technologies */
src: url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1), url("trickster-outline.otf")
    format(opentype);
```

### Values

- `url()`

  - : Specifies an external reference consisting of a {{cssxref("&lt;url&gt;")}}, followed by optional hints using the `format()` and `tech()` component values that specify the format and font technology of the resource referenced by the URL. The `format()` and `tech()` components are a comma-separated list of strings that denote well-known font formats and technologies. If a user agent doesn't support the font technology or formats, it skips downloading the font resource. If no format or technology hints are supplied, the font resource is always downloaded.

- `format()`
  - : An optional declaration that follows the `url()` value that provides a hint for the user agent on the font format.
    If the value is not supported or invalid, the browser may not download the resource, potentially saving bandwidth.
    If omitted, the browser will always download the resource and then detect the format.
    The preferred value type is a keyword, but may also be provided as a string enclosed in quotes for backward-compatibility reasons.
    Possible values are described in [Font formats](#font-formats).
- `tech()` {{Experimental_inline}}
  - : An optional declaration that follows the `url()` value that provides a hint for the user agent on the font technology.
    The value for `tech()` may be one of the keywords described in [Font technologies](#font-technologies).
- `local(<font-face-name>)`
  - : Specifies the font name should the font be available on the user's device.
    Quoting the font name is optional.
- `<font-face-name>`
  - : Specifies the full name or postscript name of a locally-installed font face using the `local()` component value, which uniquely identifies a single font face within a larger family.
    The name can optionally be enclosed in quotes.

> **Note:** The {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}} can be used to access the user's locally installed font data — this includes higher-level details such as names, styles, and families, as well as the raw bytes of the underlying font files.

## Description

The value of this descriptor is a prioritized, comma-separated list of external references or locally-installed font face names, where each resource is specified using `url()` or `local()`. When a font is needed, the {{glossary("user agent")}} iterates over the set of references listed using the first one it can successfully activate. Fonts containing invalid data or local font faces that are not found are ignored and the user agent loads the next font in the list.
If multiple `src` descriptors are set, only the last declared rule that is able to load a resource is applied.

> **Note:** Values within descriptors that the browser considers invalid are ignored.
> Some browsers will ignore the whole descriptor if any item is invalid, even if only one item is invalid.
> This may affect design of fallbacks.

As with other URLs in CSS, the URL may be relative, in which case it is resolved relative to the location of the style sheet containing the `@font-face` rule. In the case of SVG fonts, the URL points to an element within a document containing SVG font definitions. If the element reference is omitted, a reference to the first defined font is implied. Similarly, font container formats that can contain more than one font load only one of the fonts for a given `@font-face` rule. Fragment identifiers are used to indicate which font to load. If a container format lacks a defined fragment identifier scheme, a simple 1-based indexing scheme (e.g., "font-collection#1" for the first font, "font-collection#2" for the second font, etc.) is used.

If the font file is a container for multiple fonts, a fragment identifier is included to indicate which sub-font should be used:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Font formats

The following table shows the valid values and their corresponding font formats.
To check if a font format is supported by a browser within CSS, use the {{cssxref("@supports", "@supports")}} rule.

| Keyword             | Font Format           | Common extensions |
| ------------------- | --------------------- | ----------------- |
| `collection`        | OpenType Collection   | .otc, .ttc        |
| `embedded-opentype` | Embedded OpenType     | .eot              |
| `opentype`          | OpenType              | .otf, .ttf        |
| `svg`               | SVG Font (deprecated) | .svg, .svgz       |
| `truetype`          | TrueType              | .ttf              |
| `woff`              | WOFF 1.0              | .woff             |
| `woff2`             | WOFF 2.0              | .woff2            |

> **Note:** The `opentype` and `truetype` values are equivalent whether the font file uses cubic bezier curves (within CFF/CFF2 table) or quadratic bezier curves (within glyph table).

Older non-normalized `format()` values have the following equivalent syntax:

| Old syntax                      | Equivalent syntax                   |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

> **Note:** `format(svg)` stands for [SVG fonts](/en-US/docs/Web/SVG/Tutorial/SVG_fonts), and `tech(color-SVG)` stands for [OpenType fonts with SVG table](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (also called OpenType-SVG color fonts), which are completely different.

### Font technologies

The following table shows valid values for the `tech()` descriptor and their corresponding font technologies.
To check if a font technology is supported by a browser within CSS, use the {{cssxref("@supports", "@supports")}} rule.

| Keyword             | Description                                                                                   |
| :------------------ | :-------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Color bitmap data tables                                                                      |
| `color-colrv0`      | Multi-colored glyphs via COLR version 0 table                                                 |
| `color-colrv1`      | Multi-colored glyphs via COLR version 1 table                                                 |
| `color-sbix`        | Standard bitmap graphics tables                                                               |
| `color-svg`         | SVG multi-colored tables                                                                      |
| `features-aat`      | TrueType `morx` and `kerx` tables                                                             |
| `features-graphite` | Graphite features, namely `Silf`, `Glat` , `Gloc` , `Feat`, and `Sill` tables                 |
| `features-opentype` | OpenType `GSUB` and `GPOS` tables                                                             |
| `incremental`       | Incremental font loading                                                                      |
| `palettes`          | Font palettes by means of `font-palette` to select one of many color palettes in the font     |
| `variations`        | Font variations in TrueType and OpenType fonts to control the font axis, weight, glyphs, etc. |

## Formal definition

{{cssinfo}}

## Formal syntax

```
<url> [ format(<font-format>)]? [ tech( <font-tech>#)]? | local(<font-face-name>)

<font-format>= [<string> | collection | embedded-opentype | opentype
 | svg | truetype | woff | woff2 ]

<font-tech>= [<font-feature-tech> | <color-font-tech>
 | variations | palettes | incremental ]

<font-feature-tech>= [feature-opentype | feature-aat | feature-graphite]

<color-font-tech>= [color-COLRv0 | color-COLRv1 | color-SVG | color-sbix | color-CBDT ]
```

## Examples

### Specifying font resources using url() and local()

In this example, a `font-family` is defined with the name `MainText` which has two font faces.
The first is a regular font face, and the second is a bold version of the same font family.

```css
/* a regular font face: */
@font-face {
  font-family: MainText;
  src: local(Futura-Medium),
    url('FuturaMedium.woff') format("woff"),
    url('FuturaMedium.otf') format("opentype");
    format("opentype");
}

/* Defining a different bold font face for the same family: */
@font-face {
  font-family: MainText;
  src: local(Gill Sans Bold), /* full font name */
    local(GillSans-Bold), /* postscript name */
    url('GillSansBold.woff') format("woff"),
    url('GillSansBold.otf') format("opentype");
  font-weight: bold;
}

/* using the regular font face: */
p {
  font-family: MainText;
}

/* using the bold font face: */
p.bold {
  font-family: MainText;
  font-weight: bold;
}
```

### Specifying font resources using tech and format values

The following example shows how to use the `tech()` and `format()` values to specify font resources.
A font using `color-colrv1` technology and `opentype` format is specified using the `tech()` and `format()` values.
A color font will be activated if the user agent supports it, and an `opentype` non-color is provided as a fallback.

```css
@font-face {
  font-family: "Trickster";
  src: url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1), url("trickster-outline.otf")
      format(opentype);
}

/* using the font face: */
p {
  font-family: "Trickster";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
- {{cssxref("@supports", "@supports")}}
