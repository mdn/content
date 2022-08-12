---
title: Range.detach()
slug: Web/API/Range/detach
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.detach
---
{{ApiRef("DOM")}}

The **`Range.detach()`** method does nothing. It used to
disable the {{domxref("Range")}} object and enable the browser to release associated
resources. The method has been kept for compatibility.

## Syntax

```js
detach()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
range.detach();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
