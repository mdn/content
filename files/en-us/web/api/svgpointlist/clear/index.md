---
title: SVGPointList.clear()
slug: Web/API/SVGPointList/clear
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - clear
  - SVGPointList
browser-compat: api.SVGPointList.clear
---
{{APIRef("SVG")}}

The **`clear()`** method of the {{domxref("SVGPointList")}} interface removes all items from the list.

## Syntax

```js
clear()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the list is read-only.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. Calling `clear()` empties the list. Therefore the polyline no longer displays in the SVG.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline id="example" stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90"/>
```

```js
let example = document.getElementById("example");
example.points.clear();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
