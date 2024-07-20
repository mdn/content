---
title: "Node: isEqualNode() method"
short-title: isEqualNode()
slug: Web/API/Node/isEqualNode
page-type: web-api-instance-method
browser-compat: api.Node.isEqualNode
---

{{APIRef("DOM")}}

The **`isEqualNode()`** method of the {{domxref("Node")}} interface tests whether two nodes are equal.
Two nodes are equal when they have the same type, defining characteristics (for
elements, this would be their ID, number of children, and so forth), its attributes
match, and so on. The specific set of data points that must match varies depending on
the types of the nodes.

## Syntax

```js-nolint
isEqualNode(otherNode)
```

### Parameters

- `otherNode`
  - : The {{domxref("Node")}} to compare equality with.
    > **Note:** This parameter is not optional, but can be set to `null`.

### Return value

A boolean value that is `true` if the two nodes are equals, or `false` if not.
If `otherNode` is `null`, `isEqualNode()` always return false.

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
const output = document.getElementById("output");
const divList = document.getElementsByTagName("div");

output.innerText += `div 0 equals div 0: ${divList[0].isEqualNode(
  divList[0],
)}\n`;
output.innerText += `div 0 equals div 1: ${divList[0].isEqualNode(
  divList[1],
)}\n`;
output.innerText += `div 0 equals div 2: ${divList[0].isEqualNode(
  divList[2],
)}\n`;
```

### Results

{{ EmbedLiveSample('Example', "100%", "210") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.isSameNode()")}}
