---
title: "HTMLTableElement: cellSpacing property"
short-title: cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableElement.cellSpacing
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

While you should instead use the CSS
{{cssxref("border-spacing")}} property, the obsolete {{domxref("HTMLTableElement")}}
interface's **`cellSpacing`** property represents the spacing
around the individual {{HTMLElement("th")}} and {{HTMLElement("td")}} elements
representing a table's cells. Any two cells are separated by the sum of the
`cellSpacing` of each of the two cells.

## Value

A string which is either a number of pixels (such as `"10"`) or a percentage value (like `"10%"`).

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `elt.cellSpacing = null` is equivalent to `elt.cellSpacing = ""`.

## Examples

This example sets cell spacing for a given table to 10 pixels.

```js
const t = document.getElementById("TableA");
t.cellSpacing = "10";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
