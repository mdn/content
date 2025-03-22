---
title: "StyleSheet: href property"
short-title: href
slug: Web/API/StyleSheet/href
page-type: web-api-instance-property
browser-compat: api.StyleSheet.href
---

{{APIRef("CSSOM")}}

The **`href`** property of the {{domxref("StyleSheet")}}
interface returns the location of the style sheet.

This property is read-only.

## Value

A string containing the stylesheet's URI.

## Examples

On a local Windows machine:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>href example</title>
    <link rel="styleSheet" href="example.css" />
    <script>
      function printRef() {
        alert(document.styleSheets[0].href);
      }
    </script>
  </head>
  <body>
    <div class="thunder">Thunder</div>
    <button onclick="printRef()">ss</button>
  </body>
</html>
```

Returns "file:////C:/Windows/Desktop/example.css"

## Notes

If the style sheet is a linked style sheet, the value of its attribute is its location.
For inline style sheets, the value of this attribute is `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
