---
title: "Selection: addRange() method"
short-title: addRange()
slug: Web/API/Selection/addRange
page-type: web-api-instance-method
browser-compat: api.Selection.addRange
---

{{ ApiRef("DOM") }}

The **`Selection.addRange()`** method adds a
{{domxref("Range")}} to a {{domxref("Selection")}}.

## Syntax

```js-nolint
addRange(range)
```

### Parameters

- `range`
  - : A {{ domxref("Range") }} object that will be added to the {{domxref("Selection")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

> [!NOTE]
> Currently only Firefox supports multiple selection ranges, other browsers will not
> add new ranges to the selection if it already contains one.

### HTML

```html
<p>
  I <strong>insist</strong> that you <strong>try</strong> selecting the
  <strong>strong words</strong>.
</p>
<button>Select strong words</button>
```

### JavaScript

```js
let button = document.querySelector("button");

button.addEventListener("click", () => {
  const selection = window.getSelection();
  const strongElems = document.getElementsByTagName("strong");

  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }

  for (const node of strongElems) {
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
