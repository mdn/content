---
title: "HTMLInputElement: value property"
short-title: value
slug: Web/API/HTMLInputElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.value
---

{{ APIRef("HTML DOM") }}

The **`value`** property of the {{DOMxRef("HTMLInputElement")}} interface represents the current value of the {{htmlelement("input")}} element as a string.

This property can also be set directly, for example to set a default value based on some condition.

## Value

A string containing the value of the {{htmlelement("input")}} element, or the empty string if the input element has no value set.

## Examples

### Retrieving a text input's value

In this example, the log displays the current value as the user enters data into the input.

#### HTML

We include an {{htmlelement("input")}} and an associated {{htmlelement("label")}}, with a {{htmlelement("pre")}} container for our output.

```html
<label for="given-name">Your name:</label>

<input name="given-name" id="given-name" />

<pre id="log"></pre>
```

#### JavaScript

The `<pre>` element's {{domxref("HTMLElement.innerText", "innerText")}} is updated to the current value of the `<input>` every time a {{domxref("Element/keyup_event", "keyup")}} event is fired.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("given-name");

inputElement.addEventListener("keyup", () => {
  logElement.innerText = `Name: ${inputElement.value}`;
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

{{EmbedLiveSample("Retrieving a text input's value", "", 100)}}

### Retrieving a color value

This example demonstrates that the `value` property with an `<input>` of type {{HTMLElement("input/color", "color")}}.

#### HTML

We include an `<input>` of type `color`:

```html
<label for="color">Pick a color:</label>

<input name="color" id="color" type="color" />

<pre id="log"></pre>
```

#### JavaScript

The `<pre>` element's {{domxref("HTMLElement.innerText", "innerText")}} is updated with the default color value (`#000000`) and then updated every time a {{domxref("HTMLElement/change_event", "change")}} event is fired.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("color");

logElement.innerText = `Color: ${inputElement.value}`;

inputElement.addEventListener("change", () => {
  logElement.innerText = `Color: ${inputElement.value}`;
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

{{EmbedLiveSample("Retrieving a color value", "", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.valueAsDate")}}
- {{DOMXref("HTMLInputElement.valueAsNumber")}}
