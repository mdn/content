---
title: FontFace
slug: Web/API/FontFace
page-type: web-api-interface
browser-compat: api.FontFace
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`FontFace`** interface of the [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API) represents a single usable font face.

This interface defines the source of a font face, either a URL to an external resource or a buffer, and font properties such as `style`, `weight`, and so on.
For URL font sources it allows authors to trigger when the remote font is fetched and loaded, and to track loading status.

## Constructor

- {{domxref("FontFace.FontFace", "FontFace()")}}
  - : Constructs and returns a new `FontFace` object, built from an external resource described by a URL or from an {{jsxref("ArrayBuffer")}}.

## Instance properties

- {{domxref("FontFace.ascentOverride")}}
  - : A string that retrieves or sets the _ascent metric_ of the font. It is equivalent to the {{cssxref("@font-face/ascent-override", "ascent-override")}} descriptor.
- {{domxref("FontFace.descentOverride")}}
  - : A string that retrieves or sets the _descent metric_ of the font. It is equivalent to the {{cssxref("@font-face/descent-override", "descent-override")}} descriptor.
- {{domxref("FontFace.display")}}
  - : A string that determines how a font face is displayed based on whether and when it is downloaded and ready to use.
- {{domxref("FontFace.family")}}
  - : A string that retrieves or sets the _family_ of the font. It is equivalent to the {{cssxref("@font-face/font-family", "font-family")}} descriptor.
- {{domxref("FontFace.featureSettings")}}
  - : A string that retrieves or sets infrequently used font features that are not available from a font's variant properties. It is equivalent to the CSS {{cssxref("font-feature-settings")}} property.
- {{domxref("FontFace.lineGapOverride")}}
  - : A string that retrieves or sets the _line-gap metric_ of the font. It is equivalent to the {{cssxref("@font-face/line-gap-override", "line-gap-override")}} descriptor.
- {{domxref("FontFace.loaded")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that resolves with the current `FontFace` object when the font specified in the object's constructor is done loading or rejects with a `SyntaxError` {{domxref("DOMException")}}.
- {{domxref("FontFace.status")}} {{ReadOnlyInline}}
  - : Returns an enumerated value indicating the status of the font, one of `"unloaded"`, `"loading"`, `"loaded"`, or `"error"`.
- {{domxref("FontFace.stretch")}}
  - : A string that retrieves or sets how the font _stretches_. It is equivalent to the {{cssxref("@font-face/font-stretch", "font-stretch")}} descriptor.
- {{domxref("FontFace.style")}}
  - : A string that retrieves or sets the _style_ of the font. It is equivalent to the {{cssxref("@font-face/font-style", "font-style")}} descriptor.
- {{domxref("FontFace.unicodeRange")}}
  - : A string that retrieves or sets the _range of unicode code points_ encompassing the font. It is equivalent to the {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor.
- {{domxref("FontFace.variant")}} {{non-standard_inline}}
  - : A string that retrieves or sets the _variant_ of the font.
- {{domxref("FontFace.variationSettings")}} {{Experimental_Inline}}
  - : A string that retrieves or sets the _variation settings_ of the font. It is equivalent to the {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} descriptor.
- {{domxref("FontFace.weight")}}
  - : A string that contains the _weight_ of the font. It is equivalent to the {{cssxref("@font-face/font-weight", "font-weight")}} descriptor.
- {{domxref("FontFace.load()")}}
  - : Loads a font based on current object's constructor-passed requirements, including a location or source buffer, and returns a {{jsxref('Promise')}} that resolves with the current FontFace object.

## Examples

The code below defines a font face using data at the URL "my-font.woff" with a few font descriptors.
Just to show how it works, we then define the `stretch` descriptor using a property.

```js
//Define a FontFace
const font = new FontFace("my-font", "url(my-font.woff)", {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Next we load the font using {{domxref("FontFace.load()")}} and use the returned promise to track completion or report an error.

```js
//Load the font
font.load().then(
  () => {
    // Resolved - add font to document.fonts
  },
  (err) => {
    console.error(err);
  },
);
```

To actually _use_ the font we will need to add it to a {{domxref("FontFaceSet")}}.
We could do that before or after loading the font.

For additional examples see [CSS Font Loading API > Examples](/en-US/docs/Web/API/CSS_Font_Loading_API#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [@font-face](/en-US/docs/Web/CSS/@font-face)
