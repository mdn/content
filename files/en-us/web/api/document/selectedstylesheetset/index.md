---
title: "Document: selectedStyleSheetSet property"
short-title: selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.Document.selectedStyleSheetSet
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

The **`selectedStyleSheetSet`** property indicates the name of the style sheet set that's currently in use.

## Value

The name of the style sheet set currently in use. You can also set the current style sheet set using this property.

Setting the value of this property is equivalent to calling
{{domxref("document.enableStyleSheetsForSet()")}} with the value of
`currentStyleSheetSet`, then setting the value of
`lastStyleSheetSet` to that value as well.

> **Note:** This attribute's value is live; directly changing
> the `disabled` attribute on style sheets will affect the value of this
> attribute.

## Examples

```js
console.log(`Current style sheet set: ${document.selectedStyleSheetSet}`);

document.selectedStyleSheetSet = "Some other style sheet";
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
