---
title: "StyleSheet: media property"
short-title: media
slug: Web/API/StyleSheet/media
page-type: web-api-instance-property
browser-compat: api.StyleSheet.media
---

{{APIRef("CSSOM")}}

The read-only **`media`** property of the {{domxref("StyleSheet")}} interface contains a {{domxref("MediaList")}} object representing the intended destination media for style information.

## Value

A {{domxref("MediaList")}} object. Its value is set by the [`media`](/en-US/docs/Web/HTML/Reference/Elements/link#media) attribute on the corresponding `<link>` or `<style>` element. If the `media` attribute is not set or empty, it returns an empty `MediaList`, i.e., a `MediaList` with the `length` property equal to `0`.

Although the `media` property itself is read-only in the sense that you can't replace the `MediaList` object, you can still assign to the `media` property directly, which is equivalent to assigning to its {{domxref("MediaList/mediaText", "mediaText")}} property. You can also modify the `MediaList` object using the {{domxref("MediaList/appendMedium", "appendMedium()")}} and {{domxref("MediaList/deleteMedium", "deleteMedium()")}} methods.

## Examples

Assume the `<head>` contains the following:

```html
<link rel="stylesheet" href="document.css" media="screen" />
<style rel="stylesheet" media="screen, print">
  body {
    background-color: snow;
  }
</style>
```

Then:

```js
for (let i = 0; i < document.styleSheets.length; i++) {
  console.log(
    `document.styleSheets[${i}].media: ${JSON.stringify(
      document.styleSheets[i].media,
    )}`,
  );
  if (i === 0) document.styleSheets[i].media.appendMedium("handheld");
  if (i === 1) document.styleSheets[i].media.deleteMedium("print");
  console.log(
    `document.styleSheets[${i}].media: ${JSON.stringify(
      document.styleSheets[i].media,
    )}`,
  );
}
// This will log:
// document.styleSheets[0].media: {"0":"screen"}
// document.styleSheets[0].media: {"0":"screen","1":"handheld"}
// document.styleSheets[1].media: {"0":"screen","1":"print"}
// document.styleSheets[1].media: {"0":"screen"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
