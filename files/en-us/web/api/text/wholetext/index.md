---
title: Text.wholeText
slug: Web/API/Text/wholeText
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Text.wholeText
---

{{ apiref("DOM") }}

The read-only **`wholeText`** property of the {{domxref("Text")}} interface
returns the full text of all {{domxref("Text")}} nodes logically adjacent to the node.
The text is concatenated in document order.
This allows specifying any text node and obtaining all adjacent text as a single string.

> **Note:** This is similar to call {{domxref("Node.normalize()")}} followed by reading the text value,
> but without modifying the tree.

## Value

A string with the concatenated text.

## Example

Suppose you have the following simple paragraph within your webpage:

```html
<p>
  Through-hiking is great!
  <strong>No insipid election coverage!</strong> However,
  <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a>
  is tricky.
</p>
```

You decide you don't like the middle sentence, so you remove it:

```js
const paragraph = document.querySelector("p"); // Reads the paragraph
paragraph.removeChild(para.childNodes[1]); // Delete the strong element
```

Now you end up with _"Through-hiking is great! However, casting a ballot is tricky."_, with two nodes before the hyperlink:

1. `Through-hiking is great!`
2. ` However, `

To get those two nodes at once, you would call `para.childNodes[0].wholeText`:

```js
console.log(`'${paragraph.childNodes[0].wholeText}'`); // 'Through-hiking is great!   However, '
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Text")}} interface it belongs to.
