---
title: "MediaList: length property"
short-title: length
slug: Web/API/MediaList/length
page-type: web-api-instance-property
browser-compat: api.MediaList.length
---

{{APIRef("CSSOM")}}

The read-only **`length`** property of the {{DOMxRef("MediaList")}} interface returns the number of media queries in the list.

## Value

A positive integer.

## Examples

The following would log to the console the number of media queries stored in the
`MediaList` associated with the first stylesheet applied to the current document.

```js
const stylesheets = document.styleSheets;
const stylesheet = stylesheets[0];
console.log(stylesheet.media.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
