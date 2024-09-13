---
title: "Node: parentElement property"
short-title: parentElement
slug: Web/API/Node/parentElement
page-type: web-api-instance-property
browser-compat: api.Node.parentElement
---

{{APIRef("DOM")}}

The read-only **`parentElement`** property of {{domxref("Node")}} interface
returns the DOM node's parent {{DOMxRef("Element")}}, or `null` if the node either has no
parent, or its parent isn't a DOM {{DOMxRef("Element")}}. {{domxref("Node.parentNode")}} on the other hand returns any kind of parent, regardless of its type.

## Value

An {{domxref("Element")}} that is the parent element of the current node,
or `null` if there isn't one.

## Example

### Using parentElement

This example sets the parent of `node` to have a red text color.

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

### parentElement being null

`parentElement` can be `null` if the node has no parent (for example, because it isn't attached to a tree) or its parent is not an `Element`. On the other hand, {{domxref("Node.parentNode")}} always returns the parent node, which may be a {{domxref("Document")}} or other node types.

```html
<!doctype html>
<html>
  <body>
    <script>
      const html = document.querySelector("html");
      console.log(html.parentElement); // null
      console.log(html.parentNode); // document
    </script>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.parentNode")}}
