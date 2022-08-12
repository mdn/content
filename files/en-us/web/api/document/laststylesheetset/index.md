---
title: Document.lastStyleSheetSet
slug: Web/API/Document/lastStyleSheetSet
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - DOM
  - Document
  - Property
  - Reference
  - Stylesheets
  - lastStyleSheetSet
  - Deprecated
  - Non-standard
browser-compat: api.Document.lastStyleSheetSet
---
{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

The **`Document.lastStyleSheetSet`** property returns the last enabled style sheet set. This property's
value changes whenever the {{domxref("document.selectedStyleSheetSet")}} property is
changed.

## Value

The style sheet set that was most recently set. If the current style sheet set has not been changed by setting {{domxref("document.selectedStyleSheetSet")}}, the returned value is `null`.

> **Note:** This value doesn't change when
> {{domxref("document.enableStyleSheetsForSet()")}} is called.

## Examples

```js
let lastSheetSet = document.lastStyleSheetSet;

if (!lastSheetSet) {
  lastSheetSet = 'Style sheet not yet changed';
}
else {
  console.log(`The last style sheet set is: ${lastSheetSet}`);
}
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
