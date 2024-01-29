---
title: "HTMLProgressElement: max property"
short-title: max
slug: Web/API/HTMLProgressElement/max
page-type: web-api-instance-property
browser-compat: api.HTMLProgressElement.max
---

{{APIRef("HTML DOM")}}

The **`max`** property of the {{DOMxRef("HTMLProgressElement")}} interface represents the upper bound of the {{HTMLElement("progress")}} element's range.

## Value

A floating point number that is greater than zero. The default value is 1.0.

## Examples

### HTML

```html
Progress: <progress id="pBar"></progress> <span>0</span>%
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

console.log(`Default value of max: ${pBar.max}`);

pBar.max = 100;
pBar.value = 0;

setInterval(() => {
  pBar.value = pBar.value < pBar.max ? pBar.value + 1 : 0;

  span.textContent = Math.trunc(pBar.position * 100);
}, 100);
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
