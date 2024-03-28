---
title: "Range: getClientRects() method"
short-title: getClientRects()
slug: Web/API/Range/getClientRects
page-type: web-api-instance-method
browser-compat: api.Range.getClientRects
---

{{ApiRef("DOM")}}

The **`Range.getClientRects()`** method returns a list of {{domxref("DOMRect")}} objects representing the area of the screen occupied by the [range](/en-US/docs/Web/API/Range). This is created by aggregating the results of calls to
{{ domxref("Element.getClientRects()") }} for all the elements in the range.

## Syntax

```js-nolint
getClientRects()
```

### Parameters

None.

### Return value

An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) sequence of {{domxref("DOMRect")}} objects.

## Examples

### Logging selected client rect sizes

#### HTML

```html
<div></div>
<pre id="output"></pre>
```

#### CSS

```css
div {
  height: 80px;
  width: 200px;
  background-color: blue;
}
```

#### JavaScript

```js
const range = document.createRange();
range.selectNode(document.querySelector("div"));
rectList = range.getClientRects();

const output = document.querySelector("#output");
for (const rect of rectList) {
  output.textContent = `${output.textContent}\n${rect.width}:${rect.height}`;
}
```

#### Result

{{EmbedLiveSample("Logging selected client rect sizes")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Range")}}
