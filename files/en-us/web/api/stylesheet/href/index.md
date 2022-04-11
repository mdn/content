---
title: Stylesheet.href
slug: Web/API/StyleSheet/href
tags:
  - API
  - CSSOM
  - Property
  - Reference
browser-compat: api.StyleSheet.href
---
{{APIRef("CSSOM")}}

The **`href`** property of the {{domxref("StyleSheet")}}
interface returns the location of the style sheet.

## Value

A string containing the stylesheet's URI.

## Examples

On a local machine:

```html
<html>
<head>
  <link rel="StyleSheet" href="example.css" type="text/css" />
  <script>
  function sref() {
    alert(document.styleSheets[0].href);
  }
  </script>
</head>
<body>
  <div class="thunder">Thunder</div>
  <button onclick="sref()">ss</button>
</body>
</html>
```

Returns "file:////C:/Windows/Desktop/example.css"

## Notes

If the style sheet is a linked style sheet, the value of its attribute is its location.
For inline style sheets, the value of this attribute is `NULL`.

This property is read-only in Firefox, Opera, Google Chrome, and Safari, and it is
read/write in Internet Explorer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
