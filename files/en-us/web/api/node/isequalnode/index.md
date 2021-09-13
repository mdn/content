---
title: Node.isEqualNode()
slug: Web/API/Node/isEqualNode
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.Node.isEqualNode
---
{{APIRef("DOM")}}

The **`Node.isEqualNode()`** method tests whether two nodes are
equal. Two nodes are equal when they have the same type, defining characteristics (for
elements, this would be their ID, number of children, and so forth), its attributes
match, and so on. The specific set of data points that must match varies depending on
the types of the nodes.

## Syntax

```js
var isEqualNode = node.isEqualNode(otherNode);
```

- `otherNode`: The {{domxref("Node")}} to compare equality with.

## Example

In this example, we create three {{HTMLElement("div")}} blocks. The first and third
have the same contents and attributes, while the second is different. Then we run some
JavaScript to compare the nodes using `isEqualNode()` and output the results.

### HTML

```html
<div>This is the first element.</div>
<div>This is the second element.</div>
<div>This is the first element.</div>

<p id="output"></p>
```

```css hidden
#output {
  width: 440px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  display: block;
}
```

### JavaScript

```js
let output = document.getElementById("output");
let divList  = document.getElementsByTagName("div");

output.innerHTML += "div 0 equals div 0: " + divList[0].isEqualNode(divList[0]) + "<br/>";
output.innerHTML += "div 0 equals div 1: " + divList[0].isEqualNode(divList[1]) + "<br/>";
output.innerHTML += "div 0 equals div 2: " + divList[0].isEqualNode(divList[2]) + "<br/>";
```

### Results

{{ EmbedLiveSample('Example', 480) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.isSameNode()")}}
