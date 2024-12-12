---
title: "MediaList: toString() method"
short-title: toString()
slug: Web/API/MediaList/toString
page-type: web-api-instance-method
browser-compat: api.MediaList.toString
---

{{APIRef("CSSOM")}}

The **`toString()`** {{Glossary("stringifier")}} method of the {{domxref("MediaList")}} API returns a string representing the array-like `MediaList` object values, a list of one or more media formats, as text. The return value is the same as {{domxref("MediaList.mediaText")}} stringifier property.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string; a space-separated list of media values.

## Examples

```js
const SS = document.styleSheets[0]; // the document's first stylesheet
const ML = SS.media; // the mediaList of the stylesheet
// set the `media` text to a media query value
ss.mediaText = "SCREEN AND (140PX <= WIDTH <= 380PX)";
// add a second media value
ML.appendMedium("SCREEN AND (MAX-HEIGHT: 400PX) AND (ORIENTATION: LANDSCAPE))");
// erroniously, add a media query twice
ML.appendMedium("SCREEN AND (MAX-HEIGHT: 400PX) AND (ORIENTATION: LANDSCAPE))");
console.log(ML.toString()); // "screen and (140px <= width <= 380px), screen and (max-height: 400px) and (orientation: landscape)"
```

Media list values are lowercase. When stringified, the values are separated by a comma followed by a space.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaList.mediaText")}}
- {{domxref("MediaList.appendMedium()")}}
- {{domxref("MediaList")}}
- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries)
- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
