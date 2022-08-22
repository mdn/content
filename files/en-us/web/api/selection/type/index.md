---
title: Selection.type
slug: Web/API/Selection/type
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Selection
  - Type
browser-compat: api.Selection.type
---
{{APIRef("DOM")}}

The **`type`** read-only property of the
{{domxref("Selection")}} interface returns a string describing the
type of the current selection.

## Value

A string describing the type of the current selection. Possible
values are:

- `None`
  - : No selection has currently been made.
- `Caret`
  - : The selection is collapsed (i.e. the caret is placed on some
    text, but no range has been selected).
- `Range`
  - : A range has been selected.

## Examples

In this example, the event handler will fire each time a new selection is made.
`console.log(selection.type)` will return `Caret` or
`Range` depending on whether the caret is placed at a single point in the
text, or a range has been selected.

```js
let selection;

document.onselectionchange = () => {
  console.log('New selection made');
  selection = document.getSelection();
  console.log(selection.type);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}
