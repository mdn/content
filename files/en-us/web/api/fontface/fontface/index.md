---
title: FontFace()
slug: Web/API/FontFace/FontFace
page-type: web-api-constructor
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - Constructor
  - FontFace
  - Fonts
  - Reference
browser-compat: api.FontFace.FontFace
---
{{APIRef("CSS Font Loading API")}}

The **`FontFace()`** constructor creates a new
{{domxref("FontFace")}} object.

## Syntax

```js
new FontFace(family, source)
new FontFace(family, source, descriptors)
```

### Parameters

- `family`
  - : Specifies a name that will be used as the font face value for font properties. Takes
    the same type of values as the {{cssxref("@font-face/font-family", "font-family")}}
    descriptor of {{cssxref("@font-face")}} .
- `source`

  - : The font source. This can be either:

    - A URL
    - Binary font data

- `descriptors` {{optional_inline}}

  - : A set of optional descriptors passed as an object. It can contain any of the descriptors available for `@font-face`:

    - `ascentOverride`
      - : With an allowable value for {{cssxref("@font-face/ascent-override")}}.
    - `descentOverride`
      - : With an allowable value for {{cssxref("@font-face/descent-override")}}.
    - `featureSettings`
      - : With an allowable value for {{cssxref("@font-face/font-feature-settings")}}.
    - `lineGapOverride`
      - : With an allowable value for {{cssxref("@font-face/line-gap-override")}}.
    - `stretch`
      - : With an allowable value for {{cssxref("@font-face/font-stretch")}}.
    - `style`
      - : With an allowable value for {{cssxref("@font-face/font-style")}}.
    - `unicodeRange`
      - : With an allowable value for {{cssxref("@font-face/unicode-range")}}.
    - `variant`
      - : With an allowable value for {{cssxref("@font-face/font-variant")}}.
    - `variationSettings`
      - : With an allowable value for {{cssxref("@font-face/font-variation-settings")}}.
    - `weight`
      - : With an allowable value for {{cssxref("@font-face/font-weight")}}.

## Examples

```js
async function loadFonts() {
    const font = new FontFace('myfont', 'url(myfont.woff)',{
      style: 'normal',
      weight: '400',
      stretch: 'condensed'
      });
    // wait for font to be loaded
    await font.load();
    // add font to document
    document.fonts.add(font);
    // enable font with CSS class
    document.body.classList.add('fonts-loaded');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face")}}
