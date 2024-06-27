---
title: "HTMLProgressElement: position property"
short-title: position
slug: Web/API/HTMLProgressElement/position
page-type: web-api-instance-property
browser-compat: api.HTMLProgressElement.position
---

{{APIRef("HTML DOM")}}

The **`position`** read-only property of the {{DOMxRef("HTMLProgressElement")}} interface returns current progress of the {{HTMLElement("progress")}} element.

## Value

For determinate progress bar returns the result of current value divided by max value, i.e., a fraction between `0.0` and `1.0`.

For indeterminate progress bar the value is always `-1`.

## Examples

### HTML

```html
Determinate Progress bar: <progress id="pBar"></progress> Position:
<span>0</span>
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

pBar.max = 100;
pBar.value = 0;

setInterval(() => {
  pBar.value = pBar.value < pBar.max ? pBar.value + 1 : 0;

  span.textContent = pBar.position;
}, 100);
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
