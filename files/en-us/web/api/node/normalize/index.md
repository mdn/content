---
title: Node.normalize()
slug: Web/API/Node/normalize
tags:
  - Method
  - Reference
browser-compat: api.Node.normalize
---
{{APIRef("DOM")}}

The **`normalize()`** method of the {{domxref("Node")}} puts the specified node
and all of its sub-tree into a _normalized_ form.
In a normalized sub-tree, no text nodes in the sub-tree are empty and there are no adjacent text nodes.

## Syntax

```js
normalize();
```

### Parameters

None.

### Return value

None.

## Example

```html
<output id="result"></output>
```

```js
let wrapper = document.createElement("div");

wrapper.appendChild( document.createTextNode("Part 1 ") );
wrapper.appendChild( document.createTextNode("Part 2 ") );

let node = wrapper.firstChild;
let result = "Before normalization:<br/>";
while (node) {
  result += " " + node.nodeName + ": " + node.nodeValue + "<br/>";
  node = node.nextSibling;
}

wrapper.normalize();

node = wrapper.firstChild;
result += "<br/><br/>After normalization:<br/>";
while (node) {
  result += " " + node.nodeName + ": " + node.nodeValue + "<br/>";
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerHTML = result;
```

{{ EmbedLiveSample("Example", "100%", "170")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Text.splitText()")}}, its opposite.
