---
title: "HTMLMeterElement: value property"
short-title: value
slug: Web/API/HTMLMeterElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLMeterElement.value
---

{{ APIRef("HTML DOM") }}

The **`value`** property of the {{DOMxRef("HTMLMeterElement")}} interface represents the current value of the {{htmlelement("meter")}} element as a floating-point number. It reflects the element's [`value`](/en-US/docs/Web/HTML/Element/meter#value) attribute. If no `value` is set, it is the {{DOMxRef("HTMLMeterElement.min")}} value or `0`, whichever is greater.

This property can also be set directly, for example to set a default value based on some condition.

## Value

A number. Defaults to either {{DOMxRef("HTMLMeterElement.min")}} or `0`, whichever if greater, if not defined.

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
console.log(meterElement.value); // 50
--meterElement.value;
console.log(meterElement.value); // 49
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meter")}}
- {{DOMXref("HTMLMeterElement.min")}}
- {{DOMXref("HTMLProgressElement")}}
