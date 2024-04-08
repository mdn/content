---
title: "HTMLTableCellElement: bgColor property"
short-title: bgColor
slug: Web/API/HTMLTableCellElement/bgColor
page-type: web-api-instance-property
browser-compat: api.HTMLTableCellElement.bgColor
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`HTMLTableCellElement.disabled`** property is used to set the background color of a cell. It reflects the obsolete [`bgColor`](/en-US/docs/Web/HTML/Element/td#bgcolor) attribute.

**Note:** This property is deprecated and CSS should be used to set the background color. Use the {{cssxref("background-color")}} property instead.

## Value

One of the following value types can be used:

- a named color, like `red` or `blue`
- a hex code, like `#0000dd`
- an RGB function: `rgb(0, 255, 0)`

** Note: ** The values accepted here are a subset of the CSS color values. You can reuse HTML color values in CSS, but not in the other direction: the unknown colors would appear differently than expected.

## Examples

Use CSS `background-color` instead. An [example](/en-US/docs/Web/CSS/background-color#colorize_tables) is available on the {{cssxref("background-color")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableRowElement.bgColor")}}
