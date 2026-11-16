---
title: "Document: createTextNode() method"
short-title: createTextNode()
slug: Web/API/Document/createTextNode
page-type: web-api-instance-method
browser-compat: api.Document.createTextNode
---

{{APIRef("DOM")}}

Creates a new {{domxref("Text")}} node. This method can be used to escape HTML
characters.

## Syntax

```js-nolint
createTextNode(data)
```

### Parameters

- `data`
  - : A string containing the data to be put in the text node.

### Return value

A {{domxref("Text")}} node.

## Examples

```html
<button>YES!</button>
<button>NO!</button>
<button>WE CAN!</button>

<hr />

<p id="p1">First line of paragraph.</p>
```

```js
function addTextNode(text) {
  const newText = document.createTextNode(text);
  const p1 = document.getElementById("p1");

  p1.appendChild(newText);
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    addTextNode(`${event.target.textContent} `);
  });
});
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
