---
title: "HTMLSelectElement: value property"
short-title: value
slug: Web/API/HTMLSelectElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.value
---

{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.value`** property contains the value of the first selected {{htmlelement("option")}} element associated with this {{htmlelement("select")}} element.

This property can also be set directly, for example to set a default value based on some condition.

## Value

A string containing the value of the first selected {{htmlelement("option")}} element in this {{htmlelement("select")}} element, or the empty string if no options are selected.

## Examples

### Retrieving the selected value

```html
<label for="bird-select">Choose a bird:</label>

<select name="birds" id="bird-select">
  <option value="">--Please choose an option--</option>
  <option value="Scarlet ibis">Scarlet ibis</option>
  <option value="Marabou stork">Marabou stork</option>
  <option value="Roseate spoonbill">Roseate spoonbill</option>
</select>

<pre id="log"></pre>
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const select = document.querySelector("#bird-select");
select.addEventListener("change", () => {
  log(`Selection: ${select.value}`);
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

{{EmbedLiveSample("Retrieving the selected value")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("select")}} HTML element, implementing this interface.
