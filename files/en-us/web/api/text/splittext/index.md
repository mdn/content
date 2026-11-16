---
title: "Text: splitText() method"
short-title: splitText()
slug: Web/API/Text/splitText
page-type: web-api-instance-method
browser-compat: api.Text.splitText
---

{{APIRef("DOM")}}

The **`splitText()`** method of the {{domxref("Text")}} interface
breaks the {{domxref("Text")}} node into two nodes at the specified offset,
keeping both nodes in the tree as siblings.

After the split, the current node contains all the content
up to the specified offset point,
and a newly created node of the same type contains the remaining text.
The newly created node is returned to the caller.
If the original node had a parent, the new node is inserted as the next sibling of the original node.
If the offset is equal to the length of the original node,
the newly created node has no data.

Separated text nodes can be concatenated using the {{domxref("Node.normalize()")}}
method.

## Syntax

```js-nolint
splitText(offset)
```

### Parameters

- `offset`
  - : The index immediately before which to break the text node.

### Return value

Returns the newly created {{domxref("Text")}} node that contains the text after the
specified offset point.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the specified offset is negative or is greater
    than the number of 16-bit units in the node's text.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the node is read-only.

## Example

In this example, the text of a {{HTMLElement("p")}} is split into two text nodes, and a
{{HTMLElement("u")}} is inserted between them.

```html
<p>foobar</p>
```

```js
const p = document.querySelector("p");

// Get contents of <p> as a text node
const foobar = p.firstChild;

// Split 'foobar' into two text nodes, 'foo' and 'bar',
// and save 'bar' as a const
const bar = foobar.splitText(3);

// Create a <u> element containing ' new content '
const u = document.createElement("u");
u.appendChild(document.createTextNode(" new content "));

// Add <u> before 'bar'
p.insertBefore(u, bar);

// The result is: <p>foo<u> new content </u>bar</p>
```

{{EmbedLiveSample("Example", 700, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Text")}} interface it belongs to.
- The opposite method: {{domxref("Node.normalize")}}.
