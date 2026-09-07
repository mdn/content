---
title: "StyleSheet: ownerNode property"
short-title: ownerNode
slug: Web/API/StyleSheet/ownerNode
page-type: web-api-instance-property
browser-compat: api.StyleSheet.ownerNode
---

{{APIRef("CSSOM")}}

The **`ownerNode`** property of the
{{domxref("StyleSheet")}} interface returns the node that associates this style sheet
with the document.

This is usually an HTML
[`<link>`](/en-US/docs/Web/HTML/Reference/Elements/link) or
[`<style>`](/en-US/docs/Web/HTML/Reference/Elements/style) element, but
can also return a [processing instruction node](/en-US/docs/Web/API/ProcessingInstruction) in the case of `<?xml-stylesheet ?>`.

## Value

A {{domxref("Node")}} object.

## Examples

Assuming the `<head>` contains the following:

```html
<link rel="stylesheet" href="example.css" />
```

Then:

```js
console.log(document.styleSheets[0].ownerNode);
// Displays '<link rel="stylesheet" href="example.css">'
```

## Notes

For style sheets that are included by other style sheets, such as with
{{cssxref("@import")}}, the value of this
property is `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
