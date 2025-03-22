---
title: "HTMLMeterElement: high property"
short-title: high
slug: Web/API/HTMLMeterElement/high
page-type: web-api-instance-property
browser-compat: api.HTMLMeterElement.high
---

{{ APIRef("HTML DOM") }}

The **`high`** property of the {{DOMxRef("HTMLMeterElement")}} interface represents the high boundary of the {{htmlelement("meter")}} element as a floating-point number. It reflects the element's [`high`](/en-US/docs/Web/HTML/Element/meter#high) attribute, or the value of `max` if not defined. The value of `high` is clamped by the `low` and `max` values.

This property can also be set directly, for example to set a default value based on some condition.

## Value

A number that is not less than {{DOMxRef("HTMLMeterElement.low")}} nor greater than {{DOMxRef("HTMLMeterElement.max")}}.

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
console.log(meterElement.high); // 66
++meterElement.high;
console.log(meterElement.high); // 67
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meter")}}
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.max")}}
- {{DOMXref("HTMLMeterElement.low")}}
- {{DOMXref("HTMLProgressElement")}}
