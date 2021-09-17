---
title: StyleSheet.media
slug: Web/API/StyleSheet/media
tags:
  - API
  - CSSOM
  - Property
  - Reference
browser-compat: api.StyleSheet.media
---
{{APIRef("CSSOM")}}

The **`media`** property of the {{domxref("StyleSheet")}} interface specifies the intended destination media for style information. It is a read-only, array-like `MediaList` object and can be removed with `deleteMedium()` and added with `appendMedium()`.

## Example

    <!doctype html>
    <html>
    <head>
    <link rel="stylesheet" href="document.css" type="text/css" media="screen" />
    <style rel="stylesheet" type="text/css" media="screen, print">
    body  { background-color: snow; }
    </style>
    </head>
    <body>

    <script>
    for (var iSheetIndex = 0; iSheetIndex < document.styleSheets.length; iSheetIndex++)
     {
      console.log('document.styleSheets[' + String(iSheetIndex) + '].media: ' +
       JSON.stringify(document.styleSheets[iSheetIndex].media));
      if (iSheetIndex === 0)
        document.styleSheets[iSheetIndex].media.appendMedium('handheld');
      if (iSheetIndex === 1)
        document.styleSheets[iSheetIndex].media.deleteMedium('print');
      console.log('document.styleSheets[' + String(iSheetIndex) + '].media: ' +
       JSON.stringify(document.styleSheets[iSheetIndex].media));
     }
    /*
    will log:
    document.styleSheets[0].media: {"0":"screen"}
    document.styleSheets[0].media: {"0":"screen","1":"handheld"}
    document.styleSheets[1].media: {"0":"screen","1":"print"}
    document.styleSheets[1].media: {"0":"screen"}
    */
    </script>

    </body>
    </html>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
