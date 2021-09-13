---
title: Selection.rangeCount
slug: Web/API/Selection/rangeCount
tags:
  - API
  - Experimental
  - HTML Editing
  - Property
  - Read-only
  - Reference
  - Selection
browser-compat: api.Selection.rangeCount
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.rangeCount`** read-only property returns the
number of ranges in the selection.

Before the user has clicked a freshly loaded page, the `rangeCount` is
`0`. After the user clicks on the page, `rangeCount` is
`1`, even if no selection is visible.

A user can normally only select one range at a time, so the `rangeCount`
will usually be `1`. Scripting can be used to make the selection contain more
than one range.

Gecko browsers allow multiple selections across table cells. Firefox allows to select
multiple ranges in the document by using Ctrl+click (unless the click occurs within an
element that has the `display: table-cell` CSS property assigned).

## Syntax

```js
value = sel.rangeCount
```

## Example

The following example will show the `rangeCount` every second. Select text
in the browser to see it change.

### HTML

```html
<table>
  <tr><td>a.1<td>a.2
  <tr><td>b.1<td>b.2
  <tr><td>c.1<td>c.2
```

### JavaScript

```js
window.setInterval(function () {
  console.log(window.getSelection().rangeCount);
}, 1000);
```

### Result

Open your console to see how many ranges are in the selection. In Gecko browsers, you
can select multiple ranges across table cells by holding down <kbd>Ctrl</kbd> while
dragging with the mouse.

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
