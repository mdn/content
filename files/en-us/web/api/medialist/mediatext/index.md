---
title: "MediaList: mediaText property"
short-title: mediaText
slug: Web/API/MediaList/mediaText
page-type: web-api-instance-property
browser-compat: api.MediaList.mediaText
---

{{APIRef("CSSOM")}}

The **`mediaText`** property of the {{domxref("MediaList")}}
interface is a {{Glossary("stringifier")}} that returns a string representing the
`MediaList` as text, and also allows you to set a new `MediaList`.

## Value

A string representing the media queries of a stylesheet. Each one is
separated by a comma, for example
`screen and (min-width: 480px), print`.

If you wish to set new media queries on the document, the string value must have the
different queries separated by commas, e.g. `screen, print`. Note that the
`MediaList` is a live list; updating the list via
`mediaText` will immediately update the behavior of the
document.

Also note that is you try to set
`mediaText` to `null`, it will be treated as an empty
string, i.e. the value will be set to
`""`.

## Examples

The following would log to the console a textual representation of the
`MediaList` of the first stylesheet applied to the current document.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
