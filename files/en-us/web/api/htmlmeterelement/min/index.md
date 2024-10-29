---
title: "HTMLMeterElement: min property"
short-title: min
slug: Web/API/HTMLMeterElement/min
page-type: web-api-instance-property
browser-compat: api.HTMLMeterElement.min
---

{{ APIRef("HTML DOM") }}

The **`min`** property of the {{DOMxRef("HTMLMeterElement")}} interface represents the minimum value of the {{htmlelement("meter")}} element as a floating-point number. It reflects the element's [`min`](/en-US/docs/Web/HTML/Element/meter#min) attribute, or `0` if no `min` is defined.

This property can also be set directly, for example to set a default value based on some condition.

## Value

A number.

## Examples

```html
<label for="fuel">Current fuel level:</label>
<meter
  id="fuel"
  min="0"
  max="100"
  low="15"
  high="66"
  optimum="80"
  value="50"></meter>
```

```js
const meterElement = document.getElementById("fuel");
console.log(meterElement.min); // 0
++meterElement.min;
console.log(meterElement.min); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meter")}}
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.max")}}
- {{DOMXref("HTMLProgressElement")}}
