---
title: "HTMLTableElement: bgColor property"
short-title: bgColor
slug: Web/API/HTMLTableElement/bgColor
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableElement.bgColor
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The **`bgcolor`** property of the {{domxref("HTMLTableElement")}} represents the
background color of the table.

> [!NOTE]
> Do not use this attribute anymore. Instead, use the CSS {{cssxref("background-color")}} property by modifying the element's [`style`](/en-US/docs/Web/API/HTMLElement/style) attribute or using a style rule.

## Value

A string representing a color value.

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `elt.bgColor = null` is equivalent to `elt.bgColor = ""`.

## Examples

```js
// Set table background color to lightblue
const t = document.getElementById("TableA");
t.bgColor = "lightblue";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-color")}}
