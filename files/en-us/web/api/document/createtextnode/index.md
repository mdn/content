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
<!doctype html>
<html lang="en">
  <head>
    <title>createTextNode example</title>
    <script>
      function addTextNode(text) {
        const newtext = document.createTextNode(text);
        const p1 = document.getElementById("p1");

        p1.appendChild(newtext);
      }
    </script>
  </head>

  <body>
    <button onclick="addTextNode('YES! ');">YES!</button>
    <button onclick="addTextNode('NO! ');">NO!</button>
    <button onclick="addTextNode('WE CAN! ');">WE CAN!</button>

    <hr />

    <p id="p1">First line of paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
