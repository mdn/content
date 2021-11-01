---
title: Selection.addRange()
slug: Web/API/Selection/addRange
tags:
  - API
  - Experimental
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.addRange
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.addRange()`** method adds a
{{domxref("Range")}} to a {{domxref("Selection")}}.

## Syntax

```js
selection.addRange(range);
```

### Parameters

- `range`
  - : A {{ domxref("Range") }} object that will be added to the {{ domxref("Selection")
    }}.

## Example

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

button.addEventListener('click', function () {
  let selection = window.getSelection();
  let strongs = document.getElementsByTagName('strong');

  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }

  for (let i = 0; i < strongs.length; i++) {
    let range = document.createRange();
    range.selectNode(strongs[i]);
    selection.addRange(range);
  }
});
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface this method belongs to
