---
title: "HTMLOutputElement: defaultValue property"
short-title: defaultValue
slug: Web/API/HTMLOutputElement/defaultValue
page-type: web-api-instance-property
browser-compat: api.HTMLOutputElement.defaultValue
---

{{ APIRef("HTML DOM") }}

The **`defaultValue`** property of the {{DOMxRef("HTMLOutputElement")}} interface represents the default text content of this {{htmlelement("output")}} element. Getting and setting this value is equivalent to getting and setting {{domxref("Node.textContent", "textContent")}} on the {{htmlelement("output")}}.

## Value

A string.

## Examples

In the example below, the `defaultValue` still returns the value originally written in the HTML. Changes to {{domxref("HTMLOutputElement.value", "value")}} will not affect the `defaultValue` or its `textContent` in the DOM.

```html
<fieldset>
  <legend>Add two numbers</legend>
  <p>
    <input type="number" id="operand1" value="5" aria-label="First number" />
    +
    <input type="number" id="operand2" value="7" aria-label="Second number" />
    =
    <output
      id="result"
      for="operand1 operand2"
      aria-live="polite"
      aria-controls="output"
      >12</output
    >
  </p>
</fieldset>
<pre id="logs" aria-live="polite"></pre>
```

```js
const logs = document.getElementById("logs");
const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const result = document.getElementById("result");

function updateResult() {
  result.value = operand1.valueAsNumber + operand2.valueAsNumber;
  logs.innerText = `result.defaultValue: ${result.defaultValue}\nresult.value: ${result.value}`;
}

operand1.addEventListener("input", updateResult);
operand2.addEventListener("input", updateResult);
updateResult();
```

{{EmbedLiveSample("examples", "", "150")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("output")}}
- {{DOMXref("HTMLOutputElement.value")}}
