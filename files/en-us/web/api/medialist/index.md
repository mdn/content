---
title: MediaList
slug: Web/API/MediaList
page-type: web-api-interface
browser-compat: api.MediaList
---

{{APIRef("CSSOM")}}

The **`MediaList`** interface represents the media queries of a stylesheet, e.g. those set using a {{htmlelement("link")}} element's `media` attribute.

> **Note:** `MediaList` is a live list; updating the list using properties or methods listed below will immediately update the behavior of the document.

## Instance properties

- {{domxref("MediaList.mediaText")}}
  - : A {{Glossary("stringifier")}} that returns a string representing the `MediaList` as text, and also allows you to set a new `MediaList`.
- {{domxref("MediaList.length")}} {{ReadOnlyInline}}
  - : Returns the number of media queries in the `MediaList`.

## Instance methods

- {{domxref("MediaList.appendMedium()")}}
  - : Adds a media query to the `MediaList`.
- {{domxref("MediaList.deleteMedium()")}}
  - : Removes a media query from the `MediaList`.
- {{domxref("MediaList.item()")}}
  - : A getter that returns a string representing a media query as text, given the media query's index value inside the `MediaList`. This method can also be called using the bracket (`[]`) syntax.

## Examples

The following would log to the console a textual representation of the `MediaList` of the first stylesheet applied to the current document.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
