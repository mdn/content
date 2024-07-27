---
title: "HTMLTableRowElement: bgColor property"
short-title: bgColor
slug: Web/API/HTMLTableRowElement/bgColor
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableRowElement.bgColor
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`HTMLTableRowElement.bgColor`** property is used to set the background color of a row or retrieve the value of the obsolete [`bgColor`](/en-US/docs/Web/HTML/Element/tr#bgcolor) attribute, if present.

> [!NOTE]
> This property is deprecated and CSS should be used to set the background color. Use the {{cssxref("background-color")}} property instead.

## Value

One of the following value types can be used:

- a named color, like `red` or `blue`
- a hex code, like `#0000dd`

> [!NOTE]
> The values accepted here are a subset of the CSS color values. You can reuse HTML color values in CSS, but not in the other direction: the unknown colors would appear differently than expected.

## Examples

Use CSS `background-color` instead. An [example](/en-US/docs/Web/CSS/background-color#colorize_tables) is available on the {{cssxref("background-color")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableCellElement.bgColor")}}
