---
title: Node.isSameNode()
slug: Web/API/Node/isSameNode
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.Node.isSameNode
---
{{APIRef("DOM")}}

The **`isSameNode()`** method of the {{domxref("Node")}} interface
is a legacy alias the [for the `===` strict equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality).
That is, it tests whether two nodes are the same
(in other words, whether they reference the same object).

> **Note:** There is no need to use `isSameNode()`; instead use the `===` strict equality operator.

## Syntax

```js
isSameNode(otherNode);
```

### Parameters

- `otherNode`
  - : The {{domxref("Node")}} to test against.
    > **Note:** This parameter is not optional, but can be set to `null`.

### Return value

A boolean value that is `true` if both nodes are strictly equal, `false` if not.

## Example

In this example, we create three {{HTMLElement("div")}} blocks. The first and third
have the same contents and attributes, while the second is different. Then we run some
JavaScript to compare the nodes using `isSameNode()` and output the results.

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

output.innerHTML += `div 0 same as div 0: ${divList[0].isSameNode(divList[0])}<br/>`;
output.innerHTML += `div 0 same as div 1: ${divList[0].isSameNode(divList[1])}<br/>`;
output.innerHTML += `div 0 same as div 2: ${divList[0].isSameNode(divList[2])}<br/>`;
```

### Results

{{ EmbedLiveSample('Example', "100%", "205") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.isEqualNode()")}}
