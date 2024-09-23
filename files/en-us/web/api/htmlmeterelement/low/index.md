---
title: "HTMLMeterElement: low property"
short-title: low
slug: Web/API/HTMLMeterElement/low
page-type: web-api-instance-property
browser-compat: api.HTMLMeterElement.low
---

{{ APIRef("HTML DOM") }}

The **`low`** property of the {{DOMxRef("HTMLMeterElement")}} interface represents the low boundary of the {{htmlelement("meter")}} element as a floating-point number. It reflects the element's [`low`](/en-US/docs/Web/HTML/Element/meter#low) attribute, or the value of `min` if not defined. The value of `low` is clamped by the `min` and `max` values.

This property can also be set directly, for example to set a default value based on some condition.

## Value

A number that is not less than {{DOMxRef("HTMLMeterElement.min")}} nor greater than {{DOMxRef("HTMLMeterElement.max")}}.

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
console.log(meterElement.low); // 15
--meterElement.low;
console.log(meterElement.low); // 14
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meter")}}
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.min")}}
- {{DOMXref("HTMLMeterElement.high")}}
- {{DOMXref("HTMLProgressElement")}}
