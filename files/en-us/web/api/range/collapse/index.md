---
title: "Range: collapse() method"
short-title: collapse()
slug: Web/API/Range/collapse
page-type: web-api-instance-method
browser-compat: api.Range.collapse
---

{{APIRef("DOM")}}

The **`Range.collapse()`** method collapses the
{{domxref("Range")}} to one of its boundary points.

A collapsed {{domxref("Range")}} is empty, containing no content, specifying a
single-point in a DOM tree. To determine if a {{domxref("Range")}} is already collapsed,
see the {{domxref("Range.collapsed")}} property.

## Syntax

```js-nolint
collapse()
collapse(toStart)
```

### Parameters

- `toStart` {{optional_inline}}
  - : A boolean value: `true` collapses the {{domxref("Range")}}
    to its start, `false` to its end. If omitted, it defaults to
    `false` {{experimental_inline}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const range = document.createRange();

const referenceNode = document.getElementsByTagName("div").item(0);
range.selectNode(referenceNode);
range.collapse(true);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
