---
title: DOMTokenList.length
slug: Web/API/DOMTokenList/length
tags:
  - API
  - DOM
  - DOMTokenList
  - Property
  - Reference
  - length
browser-compat: api.DOMTokenList.length
---
{{APIRef("DOM")}}

The **`length`** read-only property of the
{{domxref("DOMTokenList")}} interface is an `integer` representing the number
of objects stored in the object.

## Syntax

```js
tokenList.length;
```

### Value

An `integer`.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}, then write the length of the list to the
`<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
let span = document.querySelector("span");
let classes = span.classList;
let length = classes.length;

span.textContent = `classList length = ${length}`;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
