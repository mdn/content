---
title: "MediaList: toString() method"
short-title: toString()
slug: Web/API/MediaList/toString
page-type: web-api-instance-method
browser-compat: api.MediaList.toString
---

{{APIRef("CSSOM")}}

The **`toString()`** {{Glossary("stringifier")}} method of the {{domxref("MediaList")}} interface returns a string representing the object's values. The value is a comma-separated list of media values in the same format as the {{domxref("MediaList.mediaText")}} property.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string.

## Examples

```js
const firstStyleSheet = document.styleSheets[0]; // the document's first stylesheet
const mediaList = firstStyleSheet.media; // the mediaList of the stylesheet

// set the `media` text to a media query value
mediaList.mediaText = "SCREEN AND (140PX <= WIDTH <= 380PX)";

// add a second media value
mediaList.appendMedium(
  "SCREEN AND (MAX-HEIGHT: 400PX) AND (ORIENTATION: LANDSCAPE))",
);

// erroneously, add the same media query again
mediaList.appendMedium(
  "SCREEN AND (MAX-HEIGHT: 400PX) AND (ORIENTATION: LANDSCAPE))",
);

console.log(mediaList.toString());
// "screen and (140px <= width <= 380px), screen and (max-height: 400px) and (orientation: landscape)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaList.mediaText")}}
- {{domxref("MediaList.appendMedium()")}}
- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries)
- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
