---
title: "HTMLMeterElement: max property"
short-title: max
slug: Web/API/HTMLMeterElement/max
page-type: web-api-instance-property
browser-compat: api.HTMLMeterElement.max
---

{{ APIRef("HTML DOM") }}

The **`max`** property of the {{DOMxRef("HTMLMeterElement")}} interface represents the maximum value of the {{htmlelement("meter")}} element as a floating-point number. It reflects the element's [`max`](/en-US/docs/Web/HTML/Element/meter#max) attribute, or the `min` value if no `max` is set, or `1` if neither the `min` or the `max` is defined.

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
console.log(meterElement.max); // 100
--meterElement.max;
console.log(meterElement.max); // 99
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meter")}}
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.min")}}
- {{DOMXref("HTMLProgressElement")}}
