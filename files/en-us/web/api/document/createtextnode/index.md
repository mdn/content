---
title: Document.createTextNode()
slug: Web/API/Document/createTextNode
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - createTextNode
browser-compat: api.Document.createTextNode
---
{{APIRef("DOM")}}

Creates a new {{domxref("Text")}} node. This method can be used to escape HTML
characters.

## Syntax

```js
var text = document.createTextNode(data);
```

- _text_ is a {{domxref("Text")}} node.
- _data_ is a [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  containing the data to be put in the text node.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>createTextNode example</title>
<script>
function addTextNode(text) {
  var newtext = document.createTextNode(text),
      p1 = document.getElementById("p1");

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

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
