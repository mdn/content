---
title: "HTMLInputElement: name property"
short-title: name
slug: Web/API/HTMLInputElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.name
---

{{ApiRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLInputElement")}} interface indicates the name of the {{HTMLElement("input")}} element. It reflects the element's [`name`](/en-US/docs/Web/HTML/Element/input#name) attribute.

## Value

A string representing the element's name.

## Example

This example demonstrates setting and retrieving the name of an input element.

### HTML

```html
<p>
  <label for="planet">Which planet were you born on?</label>
  <input id="planet" type="text" name="origin" />
</p>
<p>
  <label for="newname">Enter a new name</label>
  <input id="newname" type="text" />
</p>

<p>
  <input type="button" value="Run JS" id="btn" />
</p>
<p id="log"></p>
```

### JavaScript

```js
const inputElement = document.querySelector("#planet");
const log = document.querySelector("#log");
const runButton = document.querySelector("#btn");
const newName = document.querySelector("#newname");

runButton.addEventListener("click", () => {
  if (newName.value.length > 0) {
    inputElement.name = newName.value;
  }
  log.innerHTML = `Element's name: <strong>${inputElement.name}</strong>`;
});
```

### Results

{{EmbedLiveSample('Example', '', '200')}}

You can check the new name in your browser developer tools' HTML panel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
