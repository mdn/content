---
title: Selection.addRange()
slug: Web/API/Selection/addRange
page-type: web-api-instance-method
tags:
  - API
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.addRange
---
{{ ApiRef("DOM") }}

The **`Selection.addRange()`** method adds a
{{domxref("Range")}} to a {{domxref("Selection")}}.

## Syntax

```js
addRange(range)
```

### Parameters

- `range`
  - : A {{ domxref("Range") }} object that will be added to the {{ domxref("Selection")
    }}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

> **Note:** Currently only Firefox supports multiple selection ranges, other browsers will not
> add new ranges to the selection if it already contains one.

### HTML

```html
<p>I <strong>insist</strong> that you <strong>try</strong> selecting the <strong>strong words</strong>.</p>
<button>Select strong words</button>
```

### JavaScript

```js
let button = document.querySelector('button');

button.addEventListener('click', () => {
  const selection = window.getSelection();
  const strongs = document.getElementsByTagName('strong');

  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }

  for (const node of strongs) {
    const range = document.createRange();
    range.selectNode(node);
    selection.addRange(range);
  }
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface this method belongs to
