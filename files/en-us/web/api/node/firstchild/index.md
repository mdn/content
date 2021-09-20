---
title: Node.firstChild
slug: Web/API/Node/firstChild
tags:
  - API
  - DOM
  - Node
  - Property
  - Reference
browser-compat: api.Node.firstChild
---
{{APIRef("DOM")}}

The **`Node.firstChild`** read-only
property returns the node's first child in the tree, or `null` if the node
has no children.

If the node is a `Document`, it returns the first
node in the list of its direct children.

## Syntax

```js
var childNode = node.firstChild;
```

## Example

This example demonstrates the use of `firstChild` and how whitespace nodes
might interfere with using this property.

```html
<p id="para-01">
  <span>First span</span>
</p>

<script>
  var p01 = document.getElementById('para-01');
  console.log(p01.firstChild.nodeName);
</script>
```

In the above, the [console](/en-US/docs/Web/API/console) will show '#text'
because a text node is inserted to maintain the whitespace between the end of the
opening `<p>` and `<span>` tags. **Any**
[whitespace](/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM)
will create a `#text` node, from a single space to multiple spaces, returns,
tabs, and so on.

Another `#text` node is inserted between the closing
`</span>` and `</p>`tags.

If this whitespace is removed from the source, the #text nodes are not inserted and the
span element becomes the paragraph's first child.

```html
<p id="para-01"><span>First span</span></p>

<script>
  var p01 = document.getElementById('para-01');
  console.log(p01.firstChild.nodeName);
</script>
```

Now the console will show 'SPAN'.

To avoid the issue with `node.firstChild` returning `#text` or
`#comment` nodes, {{domxref("Element.firstElementChild")}} can be used to
return only the first element node. However, `node.firstElementChild`
requires a shim for Internet Explorer 9 and earlier.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
