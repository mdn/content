---
title: "HTMLInputElement: max property"
short-title: max
slug: Web/API/HTMLInputElement/max
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.max
---

{{ApiRef("HTML DOM")}}

The **`max`** property of the {{domxref("HTMLInputElement")}} interface reflects the {{HTMLElement("input")}} element's [`max`](/en-US/docs/Web/HTML/Element/input#max) attribute, which generally defines the maximum valid value for a numeric or date-time input. If the attribute is not explicitly set, the `max` property is an empty string.

## Value

A string representing the element's `max` value or an empty string if no `max` is explicitly set.

## Example

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.max); // the current value of the max attribute
inputElement.max = "18:00:00"; // sets the max value to 6pm
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}} of type {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, and {{HTMLElement("input/time", "time")}}
- {{domxref("HTMLInputElement.min")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
