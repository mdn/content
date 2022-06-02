---
title: StyleSheet.ownerNode
slug: Web/API/StyleSheet/ownerNode
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.StyleSheet.ownerNode
---
{{APIRef("CSSOM")}}

The **`ownerNode`** property of the
{{domxref("StyleSheet")}} interface returns the node that associates this style sheet
with the document.

This is usually an HTML
[`<link>`](/en-US/docs/Web/HTML/Element/link) or
[`<style>`](/en-US/docs/Web/HTML/Element/style) element, but
can also return a [processing instruction node](/en-US/docs/Web/API/ProcessingInstruction) in the case of `<?xml-stylesheet ?>`.

## Value

A {{domxref("Node")}} object.

## Examples

```html
<html lang="en">
 <head>
  <link rel="stylesheet" href="example.css">
 </head>
 <body>
   <button onclick="alert(document.styleSheets[0].ownerNode)">Show example.css's ownerNode</button>
 </body>
</html>
// Displays "object HTMLLinkElement"
```

## Notes

For style sheets that are included by other style sheets, such as with
[`@import`](/en-US/docs/Web/CSS/@import), the value of this
property is `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
