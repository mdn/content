---
title: HTMLTableElement.bgColor
slug: Web/API/HTMLTableElement/bgColor
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - HTML DOM
  - NeedsBrowserCompatibility
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLTableElement.bgColor
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The **`HTMLTableElement.bgcolor`** property represents the
background color of the table.

The `bgColor` attribute is deprecated in HTML 4.01. The CSS
{{cssxref("background-color")}} property should be used instead by modifying the
element's [`style`](/en-US/docs/Web/API/HTMLElement/style) object
or using a style rule.

Also available on DOM [`tbody`](/en-US/docs/Web/API/HTMLTableElement/tBodies), [`row`](/en-US/docs/Web/API/HTMLTableElement/rows) and [`cell`](/en-US/docs/DOM/table.cells) objects.

## Value

A string representing a color value.

## Examples

```js
// Set table background color to lightblue
const t = document.getElementById('TableA');
t.bgColor = 'lightblue';
```

## Specifications

- [DOM Level 2 HTML:_HTMLTableElement_ .bgColor](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-83532985)

## Browser compatibility

{{Compat}}
