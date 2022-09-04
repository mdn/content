---
title: FontFace
slug: Web/API/FontFace
page-type: web-api-interface
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Interface
  - Reference
browser-compat: api.FontFace
---
{{APIRef("CSS Font Loading API")}}

The **`FontFace`** interface represents a single usable font face. It allows control of the source of the font face, being a URL to an external resource, or a buffer; it also allows control of when the font face is loaded and its current status.

## Constructor

- {{domxref("FontFace.FontFace", "FontFace()")}}
  - : Constructs and returns a new `FontFace` object, built from an external resource described by a URL or from an {{jsxref("ArrayBuffer")}}.

## Properties

- {{domxref("FontFace.ascentOverride")}}
  - : A string that retrieves or sets the _ascent metric_ of the font. It is equivalent to the {{cssxref("@font-face/ascent-override", "ascent-override")}} descriptor.
- {{domxref("FontFace.descentOverride")}}
  - : A string that retrieves or sets the _descent metric_ of the font. It is equivalent to the {{cssxref("@font-face/descent-override", "descent-override")}} descriptor.
- {{domxref("FontFace.display")}}
  - : A string that determines how a font face is displayed based on whether and when it is downloaded and ready to use.
- {{domxref("FontFace.family")}}
  - : A string that retrieves or sets the _family_ of the font. It is equivalent to the {{cssxref("@font-face/font-family", "font-family")}} descriptor.
- {{domxref("FontFace.featureSettings")}}
  - : A string that retrieves or sets infrequently used font features that are not available from a font's variant properties. It is equivalent to the {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}} descriptor.
- {{domxref("FontFace.lineGapOverride")}}
  - : A string that retrieves or sets the _line-gap metric_ of the font. It is equivalent to the {{cssxref("@font-face/line-gap-override", "line-gap-override")}} descriptor.
- {{domxref("FontFace.loaded")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that resolves with the current `FontFace` object when the font specified in the object's constructor is done loading or rejects with a `SyntaxError` {{domxref("DOMException")}}.
- {{domxref("FontFace.status")}} {{ReadOnlyInline}}
  - : Returns an enumerated value indicating the status of the font, one of  `"unloaded"`, `"loading"`, `"loaded"`, or `"error"`.
- {{domxref("FontFace.stretch")}}
  - : A string that retrieves or sets how the font _stretches_. It is equivalent to the {{cssxref("@font-face/font-stretch", "font-stretch")}} descriptor.
- {{domxref("FontFace.style")}}
  - : A string that retrieves or sets the _style_ of the font. It is equivalent to the {{cssxref("@font-face/font-style", "font-style")}} descriptor.
- {{domxref("FontFace.unicodeRange")}}
  - : A string that retrieves or sets the *range of unicode codepoints* encompassing the font. It is equivalent to the {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor.
- {{domxref("FontFace.variant")}}
  - : A string that retrieves or sets the _variant_ of the font. It is equivalent to the {{cssxref("@font-face/font-variant", "font-variant")}} descriptor.
- {{domxref("FontFace.variationSettings")}}
  - : A string that retrieves or sets the _variation settings_ of the font. It is equivalent to the {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} descriptor.
- {{domxref("FontFace.weight")}}
  - : A string that contains the _weight_ of the font. It is equivalent to the {{cssxref("@font-face/font-weight", "font-weight")}} descriptor.
- {{domxref("FontFace.load()")}}
  - : Loads a font based on current object's constructor-passed requirements, including a location or source buffer, and returns a {{jsxref('Promise')}} that resolves with the current FontFace object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [@font-face](/en-US/docs/Web/CSS/@font-face)
