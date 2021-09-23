---
title: Document.preferredStyleSheetSet
slug: Web/API/Document/preferredStyleSheetSet
tags:
  - API
  - CSSOM
  - DOM
  - Document
  - Property
  - Reference
  - Stylesheets
  - Deprecated
browser-compat: api.Document.preferredStyleSheetSet
---
{{APIRef("DOM")}}{{deprecated_header}}

The **`preferredStyleSheetSet`** property returns the preferred style sheet set as set by the page
author.

## Syntax

```js
preferredStyleSheetSet = document.preferredStyleSheetSet
```

On return, `preferredStyleSheetSet` indicates the author's preferred style
sheet set. This is determined from the order of style sheet declarations and the
`Default-Style` HTTP header.

If there isn't a preferred style sheet set defined by the author, the empty string
(`""`) is returned.

## Example

```js
if (document.preferredStyleSheetSet) {
  console.log("The preferred style sheet set is: " + document.preferredStyleSheetSet);
} else {
  console.log("There is no preferred style sheet.");
}
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
