---
title: Text.wholeText
slug: Web/API/Text/wholeText
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

A {{jsxref("String")}} with the concanated text.

## Example

Suppose you have the following simple paragraph within your webpage:

```html
<p>Through-hiking is great!  <strong>No insipid election coverage!</strong> However, <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a> is tricky.</p>
```

You decide you don't like the middle sentence, so you remove it:

```js
const para = document.getElementsByTagname("p")[0]; // Reads the paragraph
para.removeChild(para.childNodes[1]); // Delete the strong element
```

Later, you want to rephrase things to, "Through-hiking is great, but casting a ballot is tricky." _while preserving the hyperlink_.

But, when you removed the `<strong>` element, the two text nodes on each part of the removed element, weren't merged into a single one: you have two consecutive `Text` nodes, one with `'Through-hiking is great!  '`, immediately followed by `' However, '`.

So, if you do this:

```js example-bad
para.firstChild.data = "Through-hiking is great, but ";
```

you'll end replacing  the first `Text` node only and you'll get:

```html
<p>Through-hiking is great, but However, <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a  ballot</a> is tricky.</p>
```

To treat all those adjacent text nodes as a single one, you use `wholeText`.

```js example-good
para.firstChild.wholeText == "Through-hiking is great, but ";
```

and you end with:

```html
<p>Through-hiking is great, but <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a  ballot</a> is tricky.</p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Text")}} interface it belongs to.
