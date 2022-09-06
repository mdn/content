---
title: StyleSheet.media
slug: Web/API/StyleSheet/media
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - Property
  - Reference
browser-compat: api.StyleSheet.media
---
{{APIRef("CSSOM")}}

The **`media`** property of the {{domxref("StyleSheet")}} interface specifies the intended destination media for style information. It is a read-only, array-like `MediaList` object and can be removed with `deleteMedium()` and added with `appendMedium()`.

## Value

A read-only array-like `MediaList` object.

## Examples

```html
<!DOCTYPE html>
  <html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Test page</title>
    <link rel="stylesheet" href="document.css" media="screen" />
    <style rel="stylesheet" media="screen, print">
      body { background-color: snow; }
    </style>
  </head>
  <body>
    <script>
      for (let i = 0; i < document.styleSheets.length; i++) {
        console.log(`document.styleSheets[${i}].media: ${JSON.stringify(document.styleSheets[i].media)}`);
        if (iSheetIndex === 0)
          document.styleSheets[i].media.appendMedium('handheld');
        if (iSheetIndex === 1)
          document.styleSheets[i].media.deleteMedium('print');
        console.log(`document.styleSheets[${i}].media: ${JSON.stringify(document.styleSheets[i].media)}`);
      }
      // This will log:
      // document.styleSheets[0].media: {"0":"screen"}
      // document.styleSheets[0].media: {"0":"screen","1":"handheld"}
      // document.styleSheets[1].media: {"0":"screen","1":"print"}
      // document.styleSheets[1].media: {"0":"screen"}
    </script>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
