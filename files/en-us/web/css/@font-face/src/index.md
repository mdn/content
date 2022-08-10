---
title: src
slug: Web/CSS/@font-face/src
tags:
  - '@font-face'
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
src: url(path/to/font.woff);                         /* Relative URL */
src: url(path/to/font.woff) format("woff");          /* Explicit format */
src: url('path/to/font.woff');                       /* Quoted URL */
src: url(path/to/svgfont.svg#example);               /* Fragment identifying font */

/* <font-face-name> values */
src: local(font);      /* Unquoted name */
src: local(some font); /* Name containing space */
src: local("font");    /* Quoted name */

/* Multiple items */
src: local(font), url(path/to/font.svg) format("svg"),
     url(path/to/font.woff) format("woff"),
     url(path/to/font.otf) format("opentype");
```

### Values

- `<url> [ format( <string># ) ]?`
  - : Specifies an external reference consisting of a {{cssxref("&lt;url&gt;")}}, followed by an optional hint using the `format()` function to describe the format of the font resource referenced by that URL. The format hint contains a comma-separated list of format strings that denote well-known font formats. If a user agent doesn't support the specified formats, it skips downloading the font resource. If no format hints are supplied, the font resource is always downloaded.
- `<font-face-name>`
  - : Specifies the full name or postscript name of a locally-installed font face using the `local()` function, which uniquely identifies a single font face within a larger family. The name can optionally be enclosed in quotes.

## Description

The value of this descriptor is a prioritized, comma-separated list of external references or locally-installed font face names. When a font is needed the {{glossary("user agent")}} iterates over the set of references listed using the first one it can successfully activate. Fonts containing invalid data or local font faces that are not found are ignored and the user agent loads the next font in the list.

As with other URLs in CSS, the URL may be relative, in which case it is resolved relative to the location of the style sheet containing the `@font-face` rule. In the case of SVG fonts, the URL points to an element within a document containing SVG font definitions. If the element reference is omitted, a reference to the first defined font is implied. Similarly, font container formats that can contain more than one font load only one of the fonts for a given `@font-face` rule. Fragment identifiers are used to indicate which font to load. If a container format lacks a defined fragment identifier scheme, a simple 1-based indexing scheme (e.g., "font-collection#1" for the first font, "font-collection#2" for the second font, etc.) is used.

## Formal definition

{{cssinfo}}

## Formal syntax

```
[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#

<family-name> =
  <string>        |
  <custom-ident>+
```

## Examples

### Specifying font resources using url() and local()

```css
/* a regular font face: */
@font-face {
  font-family: examplefont;
  src: local(Example Font),
       url('examplefont.woff') format("woff"),
       url('examplefont.otf') format("opentype");
}

/* a bold font face of the same family: */
@font-face {
  font-family: examplefont;
  src: local(Example Font Bold), /* full font name */
       local(Example Font-Bold), /* postscript name */
       url('examplefont.woff') format("woff"),
       url('examplefont.otf') format("opentype");
  font-weight: bold;
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
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
