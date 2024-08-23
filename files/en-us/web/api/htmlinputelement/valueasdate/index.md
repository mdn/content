---
title: "HTMLInputElement: valueAsDate property"
short-title: valueAsDate
slug: Web/API/HTMLInputElement/valueAsDate
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.valueAsDate
---

{{ APIRef("HTML DOM") }}

The **`valueAsDate`** property of the {{DOMxRef("HTMLInputElement")}} interface represents the current value of the {{htmlelement("input")}} element as a {{jsxref("Date")}}, or `null` if conversion is not possible.

This property can also be set directly, for example to set a default date based on some condition. If the provided value is neither `null` nor a `Date` object, a {{jsxref("TypeError")}} is thrown. If the provided value is `null` or an [invalid date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), the input value is set to the empty string.

This property always returns `null` when accessed on an input that isn't date- or time-based. When setting this property on such an input, an `InvalidStateError` {{domxref("DOMException")}} is thrown.

## Value

A {{jsxref("Date")}} object or `null` if a conversion is impossible.

## Examples

### Retrieving a date value

This example demonstrates accessing the `valueAsDate` property on an `<input>` of type {{HTMLElement("input/week", "week")}}.

#### HTML

We include an `<input>` of type `week`:

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="week" />

<pre id="log"></pre>
```

#### JavaScript

When no date or time is selected, the empty input resolves to `null`. Each time a selection is made, a {{domxref("HTMLElement/change_event", "change")}} event is fired, updating the `<pre>` content showing the {{DOMXref("HTMLInputElement.value")}} of the form control compared to that value as a date.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `Initial value: ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
  logElement.innerText = `${inputElement.value} resolves to ${inputElement.valueAsDate}`;
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### Results

{{EmbedLiveSample("Retrieving a date value", "", 100)}}

### Using Date methods

This example demonstrates applying {{jsxref("Date")}} methods directly to the `valueAsDate` property of an `<input>` of type {{HTMLElement("input/date", "date")}}.

#### HTML

We include an `<input>` of type `date`:

```html
<label for="date2">Pick a date:</label>

<input name="date2" id="date2" type="date" />

<pre id="log"></pre>
```

#### JavaScript

When no date is selected, the empty string resolves to `null`. Each time a selection is made, a {{domxref("HTMLElement/change_event", "change")}} event is fired. We then populate the log with the date selected, formatted using the `Date` object's {{jsxref("Date.prototype.toLocaleDateString()", "toLocaleDateString()")}} method.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date2");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

logElement.innerText = `Initial value: ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
  if (inputElement.valueAsDate !== null) {
    logElement.innerText = `You selected ${inputElement.valueAsDate.toLocaleDateString("en-US", options)}`;
  } else {
    logElement.innerText = `${inputElement.value} resolves to ${inputElement.valueAsDate}`;
  }
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### Results

{{EmbedLiveSample("Using Date methods", "", 100)}}

The date may be a day off due to your local timezone.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- {{DOMXref("HTMLInputElement.valueAsNumber")}}
