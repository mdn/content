---
title: "HTMLTableCellElement: bgColor property"
short-title: bgColor
slug: Web/API/HTMLTableCellElement/bgColor
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableCellElement.bgColor
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`HTMLTableCellElement.bgColor`** property is used to set the background color of a cell or get the value of the obsolete [`bgColor`](/en-US/docs/Web/HTML/Element/td#bgcolor) attribute, if present.

> [!NOTE]
> This property is deprecated and CSS should be used to set the background color. Use the {{cssxref("background-color")}} property instead.

## Value

One of the following value types can be used:

- a named color, like `red` or `blue`
- a hex code, like `#0000dd` or `#00d`

> [!NOTE]
> The values accepted here are a limited subset of the CSS color values. Only {{cssxref("named-color")}} and 3- or 6-digit {{cssxref("hex-color")}} (with no alpha-channel). While all HTML color values are valid in CSS, this is not true in the other direction.

## Examples

Use CSS `background-color` instead. An example of using [`background-color` with HTML table elements](/en-US/docs/Web/CSS/background-color#colorize_tables) is available on the {{cssxref("background-color")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableRowElement.bgColor")}}
