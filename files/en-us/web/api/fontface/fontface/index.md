---
title: "FontFace: FontFace() constructor"
short-title: FontFace()
slug: Web/API/FontFace/FontFace
page-type: web-api-constructor
browser-compat: api.FontFace.FontFace
---

{{APIRef("CSS Font Loading API")}}

The **`FontFace()`** constructor creates a new {{domxref("FontFace")}} object.

## Syntax

```js-nolint
new FontFace(family, source)
new FontFace(family, source, descriptors)
```

### Parameters

- `family`

  - : Specifies a font family name that can be used to match against this font face when styling elements.

    Takes the same type of values as the {{cssxref("@font-face/font-family", "font-family")}} descriptor of {{cssxref("@font-face")}}.
    This value may also be read and set using the [`FontFace.family`](/en-US/docs/Web/API/FontFace/family) property.

- `source`

  - : The font source.
    This can be either:

    - A URL to a font face file.
    - Binary font face data in an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or a [`TypedArray`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).

- `descriptors` {{optional_inline}}

  - : A set of optional descriptors passed as an object.
    It can contain any of the descriptors available for `@font-face`:

    - `ascentOverride`
      - : With an allowable value for {{cssxref("@font-face/ascent-override")}}.
    - `descentOverride`
      - : With an allowable value for {{cssxref("@font-face/descent-override")}}.
    - `display`
      - : With an allowable value for {{cssxref("@font-face/font-display")}}.
    - `featureSettings`
      - : With an allowable value for {{cssxref("font-feature-settings")}}.
    - `lineGapOverride`
      - : With an allowable value for {{cssxref("@font-face/line-gap-override")}}.
    - `stretch`
      - : With an allowable value for {{cssxref("@font-face/font-stretch")}}.
    - `style`
      - : With an allowable value for {{cssxref("@font-face/font-style")}}.
    - `unicodeRange`
      - : With an allowable value for {{cssxref("@font-face/unicode-range")}}.
    - `variationSettings`
      - : With an allowable value for {{cssxref("@font-face/font-variation-settings")}}.
    - `weight`
      - : With an allowable value for {{cssxref("@font-face/font-weight")}}.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown when a descriptor string does not match the grammar of the corresponding {{cssxref("@font-face")}} descriptor, or the specified binary source cannot be loaded.
    This error results in {{domxref("FontFace.status")}} being set to `error`.

## Examples

```js
async function loadFonts() {
  const font = new FontFace("myfont", "url(myfont.woff)", {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  });
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  document.body.classList.add("fonts-loaded");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face")}}
