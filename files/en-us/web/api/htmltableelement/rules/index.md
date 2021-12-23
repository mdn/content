---
title: HTMLTableElement.rules
slug: Web/API/HTMLTableElement/rules
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - NeedsBrowserCompatibility
  - NeedsSpecTable
  - Property
  - Reference
  - Deprecated
browser-compat: api.HTMLTableElement.rules
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The **`HTMLTableElement.rules`** property indicates which cell
borders to render in the table.

## Syntax

```js
HTMLTableElement.rules = rules;
var rules = HTMLTableElement.rules;
```

### Parameters

`rules` is a string with one of the following values:

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

## Example

```js
// Turn on all the internal borders of a table
var t = document.getElementById("TableID");
t.rules = "all";
```

## Specifications

- W3C DOM 2 HTML Specification

## Browser compatibility

{{Compat}}
