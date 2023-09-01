---
title: "Selection: collapse() method"
short-title: collapse()
slug: Web/API/Selection/collapse
page-type: web-api-instance-method
browser-compat: api.Selection.collapse
---

{{ApiRef("DOM")}}

The **`Selection.collapse()`** method collapses the current selection to a single point. The document is not modified. If the content is focused and editable, the caret will blink there.

> **Note:** This method is an alias for the {{domxref("Selection.setPosition()")}} method.

## Syntax

```js-nolint
collapse(node)
collapse(node, offset)
```

### Parameters

- `node`
  - : The caret location will be within this node. This value can also be set to
    `null` — if `null` is specified, the method will behave like
    {{domxref("Selection.removeAllRanges()")}}, i.e. all ranges will be removed from the
    selection.
- `offset` {{optional_inline}}
  - : The offset in `node` to which the selection will be collapsed. If not
    specified, the default value `0` is used.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Place the caret at the beginning of an HTML document's body.
const body = document.querySelector("body");
window.getSelection().collapse(body, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection.setPosition()")}}
