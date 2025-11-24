---
title: "Document: styleSheets property"
short-title: styleSheets
slug: Web/API/Document/styleSheets
page-type: web-api-instance-property
browser-compat: api.Document.styleSheets
---

{{APIRef("CSSOM")}}

The **`styleSheets`** read-only property of the {{domxref("Document")}} interface returns a {{domxref('StyleSheetList')}} of {{domxref('CSSStyleSheet')}} objects, for stylesheets explicitly linked into or embedded in a document.

## Value

The returned list is ordered as follows:

- StyleSheets retrieved from {{HTTPHeader("Link")}} headers are placed first, sorted in header order.
- StyleSheets retrieved from the DOM are placed after, sorted in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

## Examples

### Retrieving a specific stylesheet by its title

```js
function getStyleSheet(uniqueTitle) {
  for (const sheet of document.styleSheets) {
    if (sheet.title === uniqueTitle) {
      return sheet;
    }
  }
}
```

### Accessing rules in the stylesheet

You can access these stylesheets and their rules individually using the stylesheet, style, and {{domxref("CSSRule")}} objects, as demonstrated in this example, which prints out all of the style rule selectors to the console.

```js
for (const styleSheet of document.styleSheets) {
  for (const rule of styleSheet.cssRules) {
    console.log(`${rule.selectorText}\n`);
  }
}
```

For a document with a single stylesheet in which the following three rules are defined:

```css
body {
  background-color: darkblue;
}
p {
  font-family: "Arial";
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

This script outputs the following:

```plain
BODY
P
#LUMPY
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
