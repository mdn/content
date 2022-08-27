---
title: CharacterData.nextElementSibling
slug: Web/API/CharacterData/nextElementSibling
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.CharacterData.nextElementSibling
---

{{APIRef("DOM")}}

The read-only **`nextElementSibling`** property of the {{domxref("CharacterData")}} interface
returns the first {{domxref("Element")}} node following the specified one in its parent's
children list, or `null` if the specified element is the last one in the list.

## Value

A {{domxref("Element")}} object, or `null` if no sibling has been found.

## Example

```html
TEXT
<div id="div-01">Here is div-01</div>
TEXT2
<div id="div-02">Here is div-02</div>
<pre>Here is the result area</pre>
```

```js
// Initially, set node to the Text node with `TEXT`
let node = document.getElementById("div-01").previousSibling;

let result = "Next element siblings of TEXT:\n";

while (node) {
  result += `${node.nodeName}\n`;
  node = node.nextElementSibling; // The first node is a CharacterData, the others Element objects
}

document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("Example", "100%", "230")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.previousElementSibling")}}
