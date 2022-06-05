---
title: Node.firstChild
slug: Web/API/Node/firstChild
page-type: web-api-instance-property
tags:
  - Property
  - Reference
browser-compat: api.Node.firstChild
---
{{APIRef("DOM")}}

The read-only **`firstChild`** property of the {{domxref("Node")}} interface
returns the node's first child in the tree,
or `null` if the node has no children.

If the node is a {{domxref("Document")}},
this property returns the first node in the list of its direct children.

> **Note:** This property returns any type of node that is the first child of this one.
> It may be a {{domxref("Text")}} or a {{domxref("Comment")}} node.
> If you want to get the first {{domxref("Element")}} that is a child of another element,
> consider using {{domxref("Element.firstElementChild")}}.

## Value

A {{domxref("Node")}}, or `null` if there are none.

## Example

This example demonstrates the use of `firstChild` and how whitespace nodes
might interfere with using this property.

```html
<p id="para-01">
  <span>First span</span>
</p>

<script>
  const p01 = document.getElementById('para-01');
  console.log(p01.firstChild.nodeName);
</script>
```

In the above, the [console](/en-US/docs/Web/API/console) will show '#text'
because a text node is inserted to maintain the whitespace between the end of the
opening `<p>` and `<span>` tags. **Any**
[whitespace](/en-US/docs/Web/API/Document_Object_Model/Whitespace)
will create a `#text` node, from a single space to multiple spaces, returns,
tabs, and so on.

Another `#text` node is inserted between the closing
`</span>` and `</p>`tags.

If this whitespace is removed from the source, the #text nodes are not inserted and the
span element becomes the paragraph's first child.

```html
<p id="para-01"><span>First span</span></p>

<script>
  const p01 = document.getElementById('para-01');
  console.log(p01.firstChild.nodeName);
</script>
```

Now the console will show 'SPAN'.

To avoid the issue with `node.firstChild` returning `#text` or
`#comment` nodes, {{domxref("Element.firstElementChild")}} can be used to
return only the first element node.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.firstElementChild")}}
- {{domxref("Node.lastChild")}}
