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

Assume the `<head>` contains the following:

```html
<link rel="styleSheet" href="example.css" />
```

Then, if you open the HTML page via a file URL on Windows, and run the following script::

```js
console.log(document.styleSheets[0].href);
```

The result looks like: "file:////C:/Windows/Desktop/example.css".

## Notes

If the style sheet is a linked style sheet, the value of its attribute is its location.
For inline style sheets, the value of this attribute is `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
