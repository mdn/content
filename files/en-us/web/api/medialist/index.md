---
title: MediaList
slug: Web/API/MediaList
tags:
  - API
  - CSSOM
  - Interface
  - MediaList
  - Reference
browser-compat: api.MediaList
---
{{APIRef("CSSOM")}}

The **`MediaList`** interface represents the media queries of a stylesheet, e.g. those set using a {{htmlelement("link")}} element's `media` attribute.

> **Note:** `MediaList` is a live list; updating the list using properties or methods listed below will immediately update the behavior of the document.

## Properties

- {{domxref("MediaList.mediaText")}}
  - : A stringifier that returns a {{domxref("DOMString")}} representing the `MediaList` as text, and also allows you to set a new `MediaList`.
- {{domxref("MediaList.length")}} {{readonlyInline}}
  - : Returns the number of media queries in the `MediaList`.

## Methods

- {{domxref("MediaList.appendMedium()")}}
  - : Adds a media query to the `MediaList`.
- {{domxref("MediaList.deleteMedium()")}}
  - : Removes a media query from the `MediaList`.
- {{domxref("MediaList.item()")}}
  - : A getter that returns a {{domxref("CSSOMString")}} representing a media query as text, given the media query's index value inside the `MediaList`.

## Examples

The following would log to the console a textual representation of the `MediaList` of the first stylesheet applied to the current document.

```css
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
