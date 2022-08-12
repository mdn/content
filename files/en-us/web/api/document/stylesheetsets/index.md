---
title: Document.styleSheetSets
slug: Web/API/Document/styleSheetSets
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - DOM
  - Property
  - Reference
  - Stylesheets
  - Deprecated
  - Non-standard
browser-compat: api.Document.styleSheetSets
---
{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

The **`styleSheetSets`** read-only property returns a live list of all of the currently-available style sheet sets.

## Value

A list of style sheet sets that are available.

## Examples

Given an {{HTMLElement("ul")}} (list) element with the ID "sheetList", you can populate
it with the names of all the available style sheet sets with code like this:

```js
const list = document.getElementById('sheetList');
const sheets = document.styleSheetSets;

list.textContent = '';

for (let i = 0; i < sheets.length; i++) {
  const item = document.createElement('li');

  item.textContent = sheets[i];
  list.appendChild(item);
}
```

## Notes

The list of available style sheet sets is constructed by enumerating all the style
sheets available for the document, in the order in which they're listed in the
{{domxref("Document.styleSheets")}} attribute, adding the `title` of each
style sheet that has a title to the list. Duplicates are dropped from the list (using a
case-sensitive comparison).

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Stylesheet")}}
- {{domxref("Document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
