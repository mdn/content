---
title: Range.detach()
slug: Web/API/Range/detach
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.detach
---
{{ApiRef("DOM")}}

The **`Range.detach()`** method does nothing. It used to
disable the {{domxref("Range")}} object and enable the browser to release associated
resources. The method has been kept for compatibility.

## Syntax

```js
range.detach();
```

## Example

```js
var range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
range.detach();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
