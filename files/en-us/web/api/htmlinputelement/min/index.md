---
title: "HTMLInputElement: min property"
short-title: min
slug: Web/API/HTMLInputElement/min
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.min
---

{{ApiRef("HTML DOM")}}

The **`min`** property of the {{domxref("HTMLInputElement")}} interface reflects the {{HTMLElement("input")}} element's [`min`](/en-US/docs/Web/HTML/Element/input#min) attribute, which generally defines the minimum valid value for a numeric or date-time input. If the attribute is not explicitly set, the `min` property is an empty string.

## Value

A string representing the element's `min` value or an empty string if no `min` is explicitly set.

## Example

```js
const inputElement = document.querySelector("#range");
console.log(inputElement.min); // the current value of the min attribute
inputElement.min = 0; // sets the min value to "0"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}} of type {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, and {{HTMLElement("input/time", "time")}}
- {{domxref("HTMLInputElement.max")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
