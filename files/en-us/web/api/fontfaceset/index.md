---
title: FontFaceSet
slug: Web/API/FontFaceSet
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - Fonts
  - Interface
  - Reference
browser-compat: api.FontFaceSet
---
{{APIRef("CSS Font Loading API")}}

The **`FontFaceSet`** interface of the [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API) manages the loading of font-faces and querying of their download status. It is available as {{domxref("Document.fonts")}}.

## Properties

- {{domxref("FontFaceSet.status")}} {{readonlyinline}}
  - : Indicates the font-face's loading status. It will be one of `'loading'` or `'loaded'`.
- {{domxref("FontFaceSet.ready")}} {{readonlyinline}}
  - : {{jsxref("Promise")}} which resolves once font loading and layout operations have completed.
- {{domxref("FontFaceSet.size")}} {{readonlyinline}}
  - : Returns the number of values in the `FontFaceSet`.

### Events

- {{domxref("FontFaceSet.onloading")}}
  - : An {{domxref("EventListener")}} called whenever an event of type `loading` is fired, indicating a font-face set has started loading.
- {{domxref("FontFaceSet.onloadingdone")}}
  - : An {{domxref("EventListener")}} called whenever an event of type `loadingdone` is fired, indicating that a font face set has finished loading.
- {{domxref("FontFaceSet.onloadingerror")}}
  - : An {{domxref("EventListener")}} called whenever an event of type `loadingerror` is fired, indicating that an error occurred whilst loading a font-face set.

## Methods

- {{domxref("FontFaceSet.add","FontFaceSet.add()")}}
  - : Adds a font to the font set.
- {{domxref("FontFaceSet.check","FontFaceSet.check()")}}
  - : A boolean value that indicates whether a font is loaded, but doesn't initiate a load when it isn't.
- {{domxref("FontFaceSet.clear", "FontFaceSet.clear()")}}
  - : Removes all manually-added fonts from the font set. [CSS-connected](https://www.w3.org/TR/css-font-loading-3/#css-connected) fonts are unaffected.
- {{domxref("FontFaceSet.delete","FontFaceSet.delete()")}}
  - : Removes a manually-added font from the font set. [CSS-connected](https://www.w3.org/TR/css-font-loading-3/#css-connected) fonts are unaffected.
- {{domxref("FontFaceSet.entries","FontFaceSet.entries()")}}
  - : Returns a new iterator with the values for each element in the `FontFaceSet` in insertion order.
- {{domxref("FontFaceSet.forEach","FontFaceSet.forEach()")}}
  - : Executes a provided function for each value in the `FontFaceSet` object.
- {{domxref("FontFaceSet.has","FontFaceSet.has()")}}
  - : Returns a {{jsxref("Boolean")}} asserting whether an element is present with the given value.
- {{domxref("FontFaceSet.keys","FontFaceSet.keys()")}}
  - : An alias for {{domxref("CustomStateSet.values()")}}.
- {{domxref("FontFaceSet.load","FontFaceSet.load()")}}
  - : Returns a {{jsxref("Promise")}} which resolves to a list of font-faces for a requested font.
- {{domxref("FontFaceSet.values","FontFaceSet.values()")}}
  - : Returns a new iterator object that yields the values for each element in the `FontFaceSet` object in insertion order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
