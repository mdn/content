---
title: "HTMLInputElement: step property"
short-title: step
slug: Web/API/HTMLInputElement/step
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.step
---

{{ApiRef("HTML DOM")}}

The **`step`** property of the {{domxref("HTMLInputElement")}} interface indicates the step by which numeric or date-time {{HTMLElement("input")}} elements can change. It reflects the element's [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute. Valid values include the string `"any"` or a string containing a positive floating point number. If the attribute is not explicitly set, the `step` property is an empty string.

## Value

A string representing the element's `step` value or an empty string if no step is explicitly set.

## Example

```js
const inputElement = document.querySelector('[type="number"]');
console.log(inputElement.step); // the current value of the step attribute
inputElement.step = 0.1; // sets the step value to "0.1"
inputElement.step = "any"; // sets the step to "any"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}} of type {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, and {{HTMLElement("input/time", "time")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
