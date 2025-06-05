---
title: "HTMLStyleElement: media property"
short-title: media
slug: Web/API/HTMLStyleElement/media
page-type: web-api-instance-property
browser-compat: api.HTMLStyleElement.media
---

{{APIRef("HTML DOM")}}

The **`HTMLStyleElement.media`** property specifies the
intended destination medium for style information.

## Value

A string describing a single medium or a comma-separated list.

## Examples

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Test page</title>

    <link
      id="LinkedStyle"
      rel="stylesheet"
      href="document.css"
      media="screen" />
    <style id="InlineStyle" rel="stylesheet" media="screen, print">
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <script>
      console.log(
        "LinkedStyle: ",
        document.getElementById("LinkedStyle").media,
      ); // 'screen'
      console.log(
        "InlineStyle: ",
        document.getElementById("InlineStyle").media,
      ); // 'screen, print'
    </script>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
