---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
tags:
  - API
  - DOM
  - Node
  - Property
browser-compat: api.Node.nextSibling
---
{{APIRef("DOM")}}

The **`Node.nextSibling`** read-only
property returns the node immediately following the specified one in their
parent's {{domxref("Node.childNodes","childNodes")}}, or returns `null`
if the specified node is the last child in the parent element.

## Syntax

```js
nextNode = node.nextSibling
```

## Notes

Gecko-based browsers insert text nodes into a document to represent whitespace in
the source markup. Therefore a node obtained, for example, using [`Node.firstChild`](/en-US/docs/Web/API/Node/firstChild "The Node.firstChild read-only property returns the node's first child in the tree, or null if the node has no children.")
or [`Node.previousSibling`](/en-US/docs/Web/API/Node/previousSibling "The Node.previousSibling read-only property returns the node immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the first in that list.")
may refer to a whitespace text node rather than the actual element the author
intended to get.

See [Whitespace in the
DOM](/en-US/docs/Web/Guide/DOM/Whitespace_in_the_DOM) and [W3C DOM 3 FAQ:
Why are some Text nodes empty?](https://www.w3.org/DOM/faq.html#emptytext) for more information.

{{domxref("Element.nextElementSibling")}} may be used to obtain the next element
skipping any whitespace nodes, other between-element text, or comments.

## Example

```html
<div id="div-1">Here is div-1</div>
<div id="div-2">Here is div-2</div>

<script>
var el = document.getElementById('div-1').nextSibling,
    i = 1;

console.group('Siblings of div-1:');

while (el) {
  console.log(i, '. ', el.nodeName);
  el = el.nextSibling;
  i++;
}

console.groupEnd();
</script>

/**************************************************
  The console displays the following:

     Siblings of div-1

      1. #text
      2. DIV
      3. #text
      4. SCRIPT

**************************************************/
```

In the above example, `#text` nodes are inserted in the DOM where whitespace
occurs between tags (i.e. after the closing tag of an element and before the opening
tag of the next).

The possible inclusion of text nodes must be allowed for when traversing the DOM using
`nextSibling`. See the resources [in the Notes section](#notes).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.nextElementSibling")}}
