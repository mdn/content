---
title: Range.cloneRange()
slug: Web/API/Range/cloneRange
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.cloneRange
---
{{ APIRef("DOM") }}

The **`Range.cloneRange()`** method returns a
{{domxref("Range")}} object with boundary points identical to the cloned
{{domxref("Range")}}.

The returned clone is copied by value, not reference, so a change in either
{{domxref("Range")}} does not affect the other.

## Syntax

```js
cloneRange()
```

### Parameters

None.

### Return value

A {{domxref("Range")}} object.

## Examples

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
clone = range.cloneRange();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
