---
title: Text.wholeText
slug: Web/API/Text/wholeText
tags:
  - API
  - DOM
  - Property
  - Text
browser-compat: api.Text.wholeText
---
{{ apiref("DOM") }}

The **`Text.wholeText`** read-only property returns the full text of all {{domxref("Text")}} nodes logically adjacent to the node. The text is concatenated in document order. This allows specifying any text node and obtaining all adjacent text as a single string.

## Syntax

```js
str = textnode.wholeText;
```

## Notes and example

Suppose you have the following simple paragraph within your webpage (with some whitespace added to aid formatting throughout the code samples here), whose DOM node is stored in the variable `para`:

```html
<p>Thru-hiking is great!  <strong>No insipid election coverage!</strong>
  However, <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a
  ballot</a> is tricky.</p>
```

You decide you don’t like the middle sentence, so you remove it:

```js
para.removeChild(para.childNodes[1]);
```

Later, you decide to rephrase things to, “Thru-hiking is great, but casting a ballot is tricky.” _while preserving the hyperlink_. So you try this:

```js
para.firstChild.data = "Thru-hiking is great, but ";
```

All set, right? _Wrong!_ What happened was you removed the `strong` element, but the removed sentence’s element separated two text nodes. One for the first sentence, and one for the first word of the last. Instead, you now effectively have this:

```html
<p>Thru-hiking is great, but However, <a
  href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a
  ballot</a> is tricky.</p>
```

You’d really prefer to treat all those adjacent text nodes as a single one. That’s where `wholeText` comes in: if you have multiple adjacent text nodes, you can access the contents of all of them using `wholeText`. Let’s pretend you never made that last mistake. In that case, we have:

```js
assert(para.firstChild.wholeText == "Thru-hiking is great!    However, ");
```

`wholeText` is just a property of text nodes that returns the string of data making up all the adjacent (i.e. not separated by an element boundary) text nodes combined.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Text")}} interface it belongs to.
