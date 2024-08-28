---
title: "HTMLInputElement: defaultValue property"
short-title: defaultValue
slug: Web/API/HTMLInputElement/defaultValue
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.defaultValue
---

{{ApiRef("HTML DOM")}}

The **`defaultValue`** property of the {{domxref("HTMLInputElement")}} interface indicates the original (or default) value of the {{HTMLElement("input")}} element. It reflects the element's [`value`](/en-US/docs/Web/HTML/Element/input#value) attribute.

## Value

A string representing the default, or original, value of the `<input>` element.

## Example

This example demonstrates retrieving the original and current values of an input element.

### HTML

```html
<p>
  <label for="planet">Which planet were you born on?</label>
  <input id="planet" type="text" value="Azarath" />
</p>
<p>
  <input type="button" value="Run JS" id="btn" />
</p>
<p id="log"></p>
```

### JavaScript

```js
const runButton = document.querySelector("#btn");
const inputElement = document.querySelector("#planet");
const log = document.querySelector("#log");

runButton.addEventListener("click", () => {
  log.innerHTML = `Current value: ${inputElement.value} <br /> Original value: ${inputElement.defaultValue}`;
});
```

### Results

{{EmbedLiveSample('Example', '', '120')}}

Change the value of the input, then click "Run JS" to see the results.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
