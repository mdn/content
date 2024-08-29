---
title: "HTMLMeterElement: optimum property"
short-title: optimum
slug: Web/API/HTMLMeterElement/optimum
page-type: web-api-instance-property
browser-compat: api.HTMLMeterElement.optimum
---

{{ APIRef("HTML DOM") }}

The **`optimum`** property of the {{DOMxRef("HTMLMeterElement")}} interface represents the optimum boundary of the {{htmlelement("meter")}} element as a floating-point number. It reflects the element's [`optimum`](/en-US/docs/Web/HTML/Element/meter#optimum) attribute, or the midpoint between `min` and `max` values if not defined. The value of `optimum` is clamped by the `min` and `max` values.

This property can also be set directly, for example to set a default value based on some condition.

## Value

A number. Defaults to the midpoint between {{DOMxRef("HTMLMeterElement.min")}} and {{DOMxRef("HTMLMeterElement.max")}} if not defined.

## Examples

In this example, no `optimum` value is set.

```html
<label for="review">Star rating:</label>
<meter id="review" min="0" max="10" low="2" high="8" value="9"></meter>
```

Though not explicitly defined, the default `optimum` is the midpoint between `min` and `max`, but can be set to any value between `min` and `max`, inclusive.

```js
const meterElement = document.getElementById("fuel");
console.log(meterElement.optimum); // 5
meterElement.optimum = (meterElement.max + meterElement.optimum) / 2;
console.log(meterElement.optimum); // 7.5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meter")}}
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.high")}}
- {{DOMXref("HTMLMeterElement.low")}}
- {{DOMXref("HTMLProgressElement")}}
