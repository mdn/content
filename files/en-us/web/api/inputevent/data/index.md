---
title: "InputEvent: data property"
short-title: data
slug: Web/API/InputEvent/data
page-type: web-api-instance-property
browser-compat: api.InputEvent.data
---

{{APIRef("UI Events")}}

The **`data`** read-only property of the
{{domxref("InputEvent")}} interface returns a string with inserted
characters. This may be an empty string if the change doesn't insert text, such as when
characters are deleted.

## Value

A string.

## Examples

In the following example, an event listener receives the [input](/en-US/docs/Web/API/HTMLElement/input_event) event. Any textual change
to the {{htmlelement("input")}} element is retrieved by `InputEvent.data` and
inserted into a paragraph using the
[`Node.textContent`](/en-US/docs/Web/API/Node/textContent)
property.

```html
<p>Some text to copy and paste.</p>

<input type="text" />

<p class="result"></p>
```

```js
const editable = document.querySelector("input");
const result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = `Inputted text: ${e.data}`;
});
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
