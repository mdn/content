---
title: MediaList
slug: Web/API/MediaList
page-type: web-api-interface
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

> **Note:** This interface is a legacy type that exists because of a [historical accident](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and is only continues to be supported in order not to break code that's already using it. Modern APIs use types that wrap around ECMAScript array types so you can treat them like ECMAScript arrays, and at the same time impose additional semantics on their usage (such as making their items read-only).

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
  - : A getter that returns a string representing a media query as text, given the media query's index value inside the `MediaList`.

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
