---
title: "HTMLProgressElement: value property"
short-title: value
slug: Web/API/HTMLProgressElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLProgressElement.value
---

{{APIRef("HTML DOM")}}

The **`value`** property of the {{DOMxRef("HTMLProgressElement")}} interface represents the current progress of the {{HTMLElement("progress")}} element.

## Value

A floating point number. If {{DOMxRef("HTMLProgressElement.max", "max")}} value is not set on the progress bar then value ranges between 0.0 and 1.0. If the `max` value is set then the `value` ranges between `0` and the `max` value.

If the `value` property is not set on {{DOMxRef("HTMLProgressElement")}} object, then the progress bar remains indeterminate.

## Examples

### HTML

```html
Determinate Progress bar: <progress id="pBar"></progress> <span>0</span>%
<br />
Indeterminate Progress bar: <progress></progress>
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

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
