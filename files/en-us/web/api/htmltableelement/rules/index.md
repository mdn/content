---
title: "HTMLTableElement: rules property"
short-title: rules
slug: Web/API/HTMLTableElement/rules
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableElement.rules
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The **`HTMLTableElement.rules`** property indicates which cell
borders to render in the table.

## Value

One of the following:

- `none`
  - : No rules
- `groups`
  - : Lines between groups only
- `rows`
  - : Lines between rows
- `cols`
  - : Lines between cols
- `all`
  - : Lines between all cells

## Examples

```js
// Turn on all the internal borders of a table
const t = document.getElementById("TableID");
t.rules = "all";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
