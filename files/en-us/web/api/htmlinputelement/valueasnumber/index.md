---
title: "HTMLInputElement: valueAsNumber property"
short-title: valueAsNumber
slug: Web/API/HTMLInputElement/valueAsNumber
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.valueAsNumber
---

{{ APIRef("HTML DOM") }}

The **`valueAsNumber`** property of the {{DOMxRef("HTMLInputElement")}} interface represents the current value of the {{htmlelement("input")}} element as a number or `NaN` if converting to a numeric value is not possible.

This property can also be set directly, for example to set a default numeric value based on some condition.

## Value

A number that represents the value of the element or `NaN` if numeric conversion is impossible.

## Examples

### Retrieving a number value

In this example, the log displays the current value of the {{HTMLElement("input/number", "number")}} input when changed.

#### HTML

We include an {{htmlelement("input")}} of type `number` and an associated {{htmlelement("label")}}, with a {{htmlelement("pre")}} container for our output.

```html
<label for="number">Pick a number between 1 and 10:</label>

<input name="number" id="number" min="1" max="10" type="number" />

<pre id="log"></pre>
```

#### JavaScript

The `<pre>` element's {{domxref("HTMLElement.innerText", "innerText")}} is updated to the current value of the `<input>` every time a {{domxref("HTMLElement/change_event", "change")}} event is fired.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("number");

inputElement.addEventListener("change", () => {
  logElement.innerText = `Number: ${inputElement.valueAsNumber}`;
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

{{EmbedLiveSample("Retrieving a number value", "", 100)}}

If you delete the number in the widget, the result is `NaN`.

### Retrieving a date value as a number

This example demonstrates the `valueAsNumber` property of an `<input>` with type {{HTMLElement("input/datetime-local", "datetime-local")}}.

#### HTML

We include an `<input>` of type `datetime-local`:

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="datetime-local" />

<pre id="log"></pre>
```

#### JavaScript

When no date or time is selected, the empty string resolves to `NaN`. Each time a selection is made, a {{domxref("HTMLElement/change_event", "change")}} event is fired, updating the `<pre>` content showing the {{DOMXref("HTMLInputElement.value")}} of the form control compared to that value as a number.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `Initial value: ${inputElement.valueAsNumber}`;

inputElement.addEventListener("change", () => {
  const d = new Date(inputElement.valueAsNumber);
  logElement.innerText = `${inputElement.value} resolves to ${inputElement.valueAsNumber}, \nwhich is ${d.toDateString()} at ${d.toTimeString()}`;
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

{{EmbedLiveSample("Retrieving a date value as a number", "", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- {{DOMXref("HTMLInputElement.valueAsDate")}}
