---
title: "Selection: rangeCount property"
short-title: rangeCount
slug: Web/API/Selection/rangeCount
page-type: web-api-instance-property
browser-compat: api.Selection.rangeCount
---

{{ ApiRef("DOM") }}

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
element that has the `display: table-cell` CSS property assigned).

## Value

A number.

## Examples

The following example will show the `rangeCount` every second. Select text
in the browser to see it change.

### HTML

```html
<table>
  <tr>
    <td>a.1</td>
    <td>a.2</td>
  </tr>
  <tr>
    <td>b.1</td>
    <td>b.2</td>
  </tr>
  <tr>
    <td>c.1</td>
    <td>c.2</td>
  </tr>
</table>
```

### JavaScript

```js
setInterval(() => {
  console.log(window.getSelection().rangeCount);
}, 1000);
```

### Result

Open your console to see how many ranges are in the selection. In Gecko browsers, you
can select multiple ranges across table cells by holding down <kbd>Ctrl</kbd> (or <kbd>Cmd</kbd> on macOS) while
dragging with the mouse.

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
